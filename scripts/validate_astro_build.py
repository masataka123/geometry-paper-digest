#!/usr/bin/env python3
"""Validate the Astro output against the Phase 0 compatibility baseline."""

from __future__ import annotations

import argparse
import html
import json
import sys
from html.parser import HTMLParser
from pathlib import Path
from typing import Iterable

import yaml

from site_baseline import BaselineError, load_manifest, validate_manifest


BASE_PATH = "/geometry-paper-digest"
LEGACY_TOPIC_URL = "/topics/complex-geometry.html"


class PageInspector(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.text: list[str] = []
        self.hrefs: list[str] = []
        self.paper_content_depth = 0
        self.paper_content_text: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        values = dict(attrs)
        if tag == "a" and values.get("href"):
            self.hrefs.append(values["href"] or "")
        classes = (values.get("class") or "").split()
        if "paper-content" in classes:
            self.paper_content_depth = 1
        elif self.paper_content_depth:
            self.paper_content_depth += 1

    def handle_endtag(self, _tag: str) -> None:
        if self.paper_content_depth:
            self.paper_content_depth -= 1

    def handle_data(self, data: str) -> None:
        self.text.append(data)
        if self.paper_content_depth:
            self.paper_content_text.append(data)


def output_path(dist: Path, url: str) -> Path:
    """Map a root-relative public URL to Astro's static output path."""

    if url.endswith("/"):
        return dist / url.removeprefix("/") / "index.html"
    return dist / url.removeprefix("/")


def inspect_page(path: Path) -> tuple[str, PageInspector]:
    source = path.read_text(encoding="utf-8")
    inspector = PageInspector()
    inspector.feed(source)
    return source, inspector


def load_topic_slugs(root: Path) -> list[str]:
    """Load normal topic slugs from the same source of truth used by the site."""

    data = yaml.safe_load((root / "_data" / "topics.yml").read_text(encoding="utf-8"))
    if not isinstance(data, list):
        raise BaselineError("_data/topics.yml must contain a list")
    slugs: list[str] = []
    for item in data:
        if not isinstance(item, dict) or not isinstance(item.get("slug"), str) or not item["slug"]:
            raise BaselineError("every topic must have a non-empty string slug")
        slugs.append(item["slug"])
    if len(slugs) != len(set(slugs)):
        raise BaselineError("_data/topics.yml contains duplicate slugs")
    return slugs


def validate_build(root: Path, dist: Path) -> list[str]:
    errors: list[str] = []
    baseline_path = root / "tests" / "fixtures" / "site-v2-baseline.json"
    baseline = load_manifest(baseline_path)
    topic_slugs = load_topic_slugs(root)
    topic_urls = [f"/topics/{slug}.html" for slug in topic_slugs]
    try:
        validate_manifest(baseline)
    except BaselineError as exc:
        return [f"invalid Phase 0 baseline: {exc}"]

    legacy_urls = [article["legacy_url"] for article in baseline["articles"]]
    if len(legacy_urls) != len(set(legacy_urls)):
        errors.append("Phase 0 baseline contains duplicate legacy URLs")

    for article in baseline["articles"]:
        path = output_path(dist, article["legacy_url"])
        if not path.is_file():
            errors.append(f"missing paper URL {article['legacy_url']}: {path}")
            continue
        source, inspector = inspect_page(path)
        page_text = " ".join(inspector.text)
        if article["title"] not in page_text:
            errors.append(f"{article['filename']}: title is missing from generated HTML")
        if article["authors"] not in page_text:
            errors.append(f"{article['filename']}: authors are missing from generated HTML")
        if not " ".join(inspector.paper_content_text).strip():
            errors.append(f"{article['filename']}: rendered Markdown body is empty")
        expected_topic_link = f"{BASE_PATH}/topics/{article['topic']}.html"
        if expected_topic_link not in inspector.hrefs:
            errors.append(f"{article['filename']}: missing base-aware topic link {expected_topic_link}")
        if "window.MathJax" not in source or "tex-svg.js" not in source:
            errors.append(f"{article['filename']}: MathJax 3 configuration is missing")

    for url in [*topic_urls, LEGACY_TOPIC_URL]:
        if not output_path(dist, url).is_file():
            errors.append(f"missing topic URL {url}")

    for topic_url in topic_urls:
        topic_path = output_path(dist, topic_url)
        if not topic_path.is_file():
            continue
        _source, topic_page = inspect_page(topic_path)
        topic_slug = topic_url.removeprefix("/topics/").removesuffix(".html")
        for article in baseline["articles"]:
            if article["topic"] != topic_slug:
                continue
            expected = f"{BASE_PATH}{article['legacy_url']}"
            if expected not in topic_page.hrefs:
                errors.append(f"{topic_url} is missing base-aware paper link {expected}")

    home_path = dist / "index.html"
    if not home_path.is_file():
        errors.append("missing home page")
    else:
        _source, home = inspect_page(home_path)
        for url in topic_urls:
            expected = f"{BASE_PATH}{url}"
            if expected not in home.hrefs:
                errors.append(f"home page is missing base-aware link {expected}")
        if f"{BASE_PATH}/papers/" not in home.hrefs:
            errors.append("home page is missing base-aware papers index link")

    papers_index_path = output_path(dist, "/papers/")
    if not papers_index_path.is_file():
        errors.append("missing compact papers index /papers/")
    else:
        papers_source, papers_page = inspect_page(papers_index_path)
        for article in baseline["articles"]:
            expected = f"{BASE_PATH}{article['legacy_url']}"
            if expected not in papers_page.hrefs:
                errors.append(f"papers index is missing base-aware paper link {expected}")
        for marker in ('name="q"', 'name="author"', 'name="tag"', 'name="topic"', 'name="year"', 'name="sort"', 'data-paper-list'):
            if marker not in papers_source:
                errors.append(f"papers index is missing Phase 2 control {marker!r}")
        for forbidden in ("abstract_en", "summary_en", "abstract_ja", "paper-content", "paper-card__title-ja"):
            if forbidden in papers_source:
                errors.append(f"papers index exposes non-compact content marker {forbidden!r}")
        if "arXiv Abstract" in papers_source:
            errors.append("papers index unexpectedly renders arXiv Abstract cards")
        if "日本語要約" not in papers_source:
            errors.append("papers index is missing Japanese summary headings")
        if "paper-card__abstract" in papers_source:
            errors.append("papers index unexpectedly contains full arXiv Abstract card content")
        for forbidden_heading in ("English Abstract", "English Summary", "Arxiv Abstract"):
            if forbidden_heading in papers_source:
                errors.append(f"papers index uses forbidden heading {forbidden_heading!r}")
        card_heading_checks = (
            "/papers/2026/08/06/analytic-bertini-local/",
            "/papers/2026/08/17/alpha-spectrum-toric-fano/",
        )
        for pathname in card_heading_checks:
            card_start = papers_source.find(f'data-pathname="{pathname}"')
            card_end = papers_source.find("</article>", card_start)
            if card_start < 0 or card_end < 0:
                errors.append(f"papers index is missing representative card {pathname}")
                continue
            card_source = papers_source[card_start:card_end]
            tags = card_source.find("tag-chips")
            japanese_heading = card_source.find("日本語要約")
            links = card_source.find("paper-card__links")
            if japanese_heading < 0:
                errors.append(f"representative card {pathname} is missing its Japanese summary heading")
            elif tags >= 0 and not tags < japanese_heading < links:
                errors.append(f"representative card {pathname} does not order tags, Japanese summary, and links correctly")

    legacy_notice = output_path(dist, LEGACY_TOPIC_URL)
    if legacy_notice.is_file():
        _source, notice = inspect_page(legacy_notice)
        expected = f"{BASE_PATH}/topics/differential-geometry.html"
        if expected not in notice.hrefs:
            errors.append(f"legacy complex-geometry notice is missing link {expected}")

    representative_checks = {
        "/papers/2026/08/06/analytic-bertini-local/": ("arXiv Abstract", "日本語要約", "<h2"),
        "/papers/2026/08/17/alpha-spectrum-toric-fano/": (
            "arXiv Abstract",
            "日本語要約",
            r"\mathbb{Q}",
            "<ul>",
            "背景と問題設定",
        ),
    }
    for url, needles in representative_checks.items():
        path = output_path(dist, url)
        if not path.is_file():
            continue
        source = html.unescape(path.read_text(encoding="utf-8"))
        for needle in needles:
            if needle not in source:
                errors.append(f"representative page {url} is missing {needle!r}")
        for forbidden in ("English summary", "Original abstract on arXiv", ">Abstract</h2>"):
            if forbidden in source:
                errors.append(f"representative page {url} still renders obsolete abstract UI {forbidden!r}")

    visible_title_checks = {
        "/papers/2026/08/06/analytic-bertini-local/": "解析的Bertini定理",
        "/papers/2026/08/17/alpha-spectrum-toric-fano/": "トーリックQ-Fano多様体",
    }
    for url, title_ja_fragment in visible_title_checks.items():
        path = output_path(dist, url)
        if not path.is_file():
            continue
        source = html.unescape(path.read_text(encoding="utf-8"))
        if 'class="paper-title-ja"' in source:
            errors.append(f"representative page {url} visibly renders title_ja")
        if f'data-pagefind-meta="title_ja">' not in source or title_ja_fragment not in source:
            errors.append(f"representative page {url} does not retain indexed title_ja metadata")

    return errors


def main(argv: Iterable[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--root", type=Path, default=Path(__file__).resolve().parents[1])
    parser.add_argument("--dist", type=Path)
    args = parser.parse_args(argv)
    dist = args.dist or args.root / "dist"
    try:
        errors = validate_build(args.root.resolve(), dist.resolve())
    except (OSError, UnicodeError, json.JSONDecodeError, BaselineError) as exc:
        print(f"Astro build regression: {exc}", file=sys.stderr)
        return 1
    if errors:
        for error in errors:
            print(f"[error] {error}", file=sys.stderr)
        print(f"Astro build regression found {len(errors)} error(s)", file=sys.stderr)
        return 1
    baseline = load_manifest(args.root / "tests" / "fixtures" / "site-v2-baseline.json")
    print(f"Astro build contains all {len(baseline['articles'])} Phase 0 paper URLs and compatibility pages")
    return 0


if __name__ == "__main__":
    sys.exit(main())
