#!/usr/bin/env python3
"""Generate and verify the versioned site-v2 article compatibility baseline."""

from __future__ import annotations

import argparse
import json
import re
import sys
from collections import Counter
from pathlib import Path
from typing import Any, Iterable

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

from scripts.validate_posts import normalize_arxiv_id, parse_post


BASELINE_VERSION = 1
POST_NAME = re.compile(
    r"^(?P<year>\d{4})-(?P<month>\d{2})-(?P<day>\d{2})-(?P<slug>[a-z0-9]+(?:-[a-z0-9]+)*)\.md$"
)
PROTECTED_FIELDS = ("filename", "title", "authors", "topic", "arxiv_id", "legacy_url")


class BaselineError(ValueError):
    """Raised when current posts or a stored baseline violate the contract."""


def legacy_url(filename: str) -> str:
    """Reproduce Jekyll's paper URL strictly from a post filename."""

    match = POST_NAME.fullmatch(filename)
    if match is None:
        raise BaselineError(f"invalid post filename: {filename}")
    return "/papers/{year}/{month}/{day}/{slug}/".format(**match.groupdict())


def _required_text(metadata: dict[str, Any], field: str, filename: str) -> str:
    value = metadata.get(field)
    if not isinstance(value, str) or not value.strip():
        raise BaselineError(f"{filename}: {field} must be a non-empty string")
    return value


def build_manifest(root: Path) -> dict[str, Any]:
    """Build a deterministic manifest from the repository's current posts."""

    posts_dir = root / "_posts"
    articles: list[dict[str, str]] = []
    for path in sorted(posts_dir.glob("*.md")):
        metadata, _body, errors = parse_post(path)
        if errors or metadata is None:
            detail = "; ".join(error.message for error in errors)
            raise BaselineError(f"{path.name}: cannot parse front matter: {detail}")
        arxiv_id = normalize_arxiv_id(metadata.get("arxiv_id"))
        if arxiv_id is None:
            raise BaselineError(f"{path.name}: arxiv_id cannot be normalized")
        articles.append(
            {
                "filename": path.name,
                "title": _required_text(metadata, "title", path.name),
                "authors": _required_text(metadata, "authors", path.name),
                "topic": _required_text(metadata, "topic", path.name),
                "arxiv_id": arxiv_id,
                "legacy_url": legacy_url(path.name),
            }
        )

    _check_unique(articles, "filename")
    _check_unique(articles, "arxiv_id")
    _check_unique(articles, "legacy_url")
    topic_counts = dict(sorted(Counter(article["topic"] for article in articles).items()))
    return {
        "version": BASELINE_VERSION,
        "summary": {"article_count": len(articles), "topic_counts": topic_counts},
        "articles": articles,
    }


def _check_unique(articles: list[dict[str, str]], field: str) -> None:
    counts = Counter(article[field] for article in articles)
    duplicates = sorted(value for value, count in counts.items() if count > 1)
    if duplicates:
        raise BaselineError(f"duplicate {field}: {', '.join(duplicates)}")


def validate_manifest(manifest: dict[str, Any]) -> None:
    """Validate uniqueness and internally derived summary values."""

    if manifest.get("version") != BASELINE_VERSION:
        raise BaselineError(f"unsupported baseline version: {manifest.get('version')}")
    articles = manifest.get("articles")
    if not isinstance(articles, list) or any(not isinstance(item, dict) for item in articles):
        raise BaselineError("articles must be a list of objects")
    for article in articles:
        missing = [field for field in PROTECTED_FIELDS if not isinstance(article.get(field), str)]
        if missing:
            raise BaselineError(f"baseline article has invalid fields: {', '.join(missing)}")
        if article["legacy_url"] != legacy_url(article["filename"]):
            raise BaselineError(f"{article['filename']}: legacy URL is not derived from its filename")
        if normalize_arxiv_id(article["arxiv_id"]) != article["arxiv_id"]:
            raise BaselineError(f"{article['filename']}: arXiv ID is not a normalized base ID")
    _check_unique(articles, "filename")
    _check_unique(articles, "arxiv_id")
    _check_unique(articles, "legacy_url")
    expected_summary = {
        "article_count": len(articles),
        "topic_counts": dict(sorted(Counter(item["topic"] for item in articles).items())),
    }
    if manifest.get("summary") != expected_summary:
        raise BaselineError("manifest summary is inconsistent with its article records")


def compare_baseline(baseline: dict[str, Any], current: dict[str, Any]) -> None:
    """Protect baseline entries while permitting valid newly added articles."""

    validate_manifest(baseline)
    validate_manifest(current)
    current_by_filename = {item["filename"]: item for item in current["articles"]}
    problems: list[str] = []
    for expected in baseline["articles"]:
        actual = current_by_filename.get(expected["filename"])
        if actual is None:
            problems.append(f"removed baseline article: {expected['filename']}")
            continue
        for field in PROTECTED_FIELDS[1:]:
            if actual[field] != expected[field]:
                problems.append(
                    f"{expected['filename']}: {field} changed from {expected[field]!r} to {actual[field]!r}"
                )
    if problems:
        raise BaselineError("\n".join(problems))


def load_manifest(path: Path) -> dict[str, Any]:
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, UnicodeError, json.JSONDecodeError) as exc:
        raise BaselineError(f"cannot read baseline {path}: {exc}") from exc
    if not isinstance(data, dict):
        raise BaselineError("baseline root must be an object")
    return data


def write_manifest(path: Path, manifest: dict[str, Any]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def main(argv: Iterable[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--root", type=Path, default=Path(__file__).resolve().parents[1])
    parser.add_argument("--baseline", type=Path)
    parser.add_argument("--write", action="store_true", help="write the current manifest instead of comparing")
    args = parser.parse_args(argv)
    baseline_path = args.baseline or args.root / "tests" / "fixtures" / "site-v2-baseline.json"
    try:
        current = build_manifest(args.root)
        validate_manifest(current)
        if args.write:
            write_manifest(baseline_path, current)
            print(f"wrote baseline for {current['summary']['article_count']} articles: {baseline_path}")
        else:
            baseline = load_manifest(baseline_path)
            compare_baseline(baseline, current)
            additions = current["summary"]["article_count"] - len(baseline["articles"])
            print(f"baseline is compatible; current articles: {current['summary']['article_count']}; additions: {additions}")
    except BaselineError as exc:
        print(f"baseline regression: {exc}", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
