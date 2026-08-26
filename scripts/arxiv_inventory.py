#!/usr/bin/env python3
"""Build a fresh, fail-closed inventory of arXiv identifiers in ``_posts``."""

from __future__ import annotations

import argparse
import re
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Any, Iterable
from urllib.parse import urlparse

import yaml


ARXIV_NUMBER = r"(?P<base>\d{4}\.\d{4,5})(?:v\d+)?"
ARXIV_ID_RE = re.compile(rf"^(?:arXiv:)?{ARXIV_NUMBER}$", re.IGNORECASE)
ARXIV_PATH_RE = re.compile(rf"^/(?:abs|pdf)/{ARXIV_NUMBER}(?:\.pdf)?/?$", re.IGNORECASE)
ARXIV_URL_RE = re.compile(
    rf"https?://(?:export\.)?arxiv\.org/(?:abs|pdf)/{ARXIV_NUMBER}(?:\.pdf)?/?",
    re.IGNORECASE,
)
ARXIV_HOSTS = {"arxiv.org", "export.arxiv.org"}


def normalize_arxiv_id(value: Any) -> str | None:
    """Return the version-free identifier for a supported arXiv ID or URL."""

    if not isinstance(value, str):
        return None
    candidate = value.strip()
    match = ARXIV_ID_RE.fullmatch(candidate)
    if match:
        return match.group("base")

    try:
        parsed = urlparse(candidate)
    except ValueError:
        return None
    if parsed.scheme.lower() not in {"http", "https"}:
        return None
    if parsed.hostname is None or parsed.hostname.lower() not in ARXIV_HOSTS:
        return None
    if parsed.username is not None or parsed.password is not None or parsed.port is not None:
        return None
    if parsed.query or parsed.fragment:
        return None
    match = ARXIV_PATH_RE.fullmatch(parsed.path)
    return match.group("base") if match else None


@dataclass(frozen=True)
class InventoryError:
    path: Path
    message: str

    def format(self, root: Path) -> str:
        try:
            display_path = self.path.relative_to(root)
        except ValueError:
            display_path = self.path
        return f"[エラー] 対象ファイル: {display_path} | 検査項目: arXiv inventory | 問題: {self.message}"


@dataclass(frozen=True)
class InventoryResult:
    entries: dict[str, Path]
    errors: tuple[InventoryError, ...]

    @property
    def ok(self) -> bool:
        return not self.errors


def _read_post(path: Path) -> tuple[dict[str, Any] | None, str, str | None]:
    try:
        text = path.read_text(encoding="utf-8")
    except (OSError, UnicodeError) as exc:
        return None, "", f"UTF-8で読み込めません: {exc}"
    lines = text.splitlines(keepends=True)
    if not lines or lines[0].strip() != "---":
        return None, text, "先頭のYAML front matter区切りがありません"
    closing = next((index for index in range(1, len(lines)) if lines[index].strip() == "---"), None)
    if closing is None:
        return None, "", "YAML front matterの終了区切りがありません"
    try:
        metadata = yaml.safe_load("".join(lines[1:closing]))
    except yaml.YAMLError as exc:
        return None, "", f"YAML front matterを解析できません: {exc}"
    if not isinstance(metadata, dict):
        return None, "", "YAML front matterはキーと値の対応である必要があります"
    return metadata, "".join(lines[closing + 1 :]), None


def _body_identifiers(body: str) -> set[str]:
    return {match.group("base") for match in ARXIV_URL_RE.finditer(body)}


def build_inventory(posts_directory: Path) -> InventoryResult:
    """Scan current Markdown posts and return a unique base-ID-to-path mapping.

    Modern posts must have matching, normalizable ``arxiv_id`` and ``arxiv_url``.
    A body URL is accepted only as a legacy fallback when both fields are absent.
    Any ambiguity or duplicate makes the entire result unusable.
    """

    posts_directory = posts_directory.resolve()
    paths_by_identifier: dict[str, list[Path]] = {}
    errors: list[InventoryError] = []
    for path in sorted(posts_directory.rglob("*.md")):
        metadata, body, read_error = _read_post(path)
        if read_error is not None or metadata is None:
            errors.append(InventoryError(path, read_error or "記事を解析できません"))
            continue

        has_id = "arxiv_id" in metadata
        has_url = "arxiv_url" in metadata
        identifier = normalize_arxiv_id(metadata.get("arxiv_id")) if has_id else None
        url_identifier = normalize_arxiv_id(metadata.get("arxiv_url")) if has_url else None
        if has_id and identifier is None:
            errors.append(InventoryError(path, "`arxiv_id`から基本arXiv番号を抽出できません"))
        if has_url and url_identifier is None:
            errors.append(InventoryError(path, "`arxiv_url`から基本arXiv番号を抽出できません"))
        if has_id != has_url:
            errors.append(InventoryError(path, "`arxiv_id`と`arxiv_url`の片方だけが存在します"))
        if identifier is not None and url_identifier is not None and identifier != url_identifier:
            errors.append(
                InventoryError(path, f"arxiv_idは`{identifier}`、arxiv_urlは`{url_identifier}`です")
            )

        selected = identifier if identifier == url_identifier else None
        if not has_id and not has_url:
            fallback = _body_identifiers(body)
            if len(fallback) != 1:
                errors.append(
                    InventoryError(path, f"本文fallbackから一意な基本arXiv番号を得られません（{len(fallback)}件）")
                )
            else:
                selected = next(iter(fallback))
        if selected is not None:
            paths_by_identifier.setdefault(selected, []).append(path)

    for identifier, paths in sorted(paths_by_identifier.items()):
        if len(paths) > 1:
            names = ", ".join(str(path.relative_to(posts_directory.parent)) for path in paths)
            for path in paths:
                errors.append(InventoryError(path, f"基本arXiv番号`{identifier}`が重複しています: {names}"))

    entries = {identifier: paths[0] for identifier, paths in paths_by_identifier.items() if len(paths) == 1}
    return InventoryResult(entries, tuple(errors))


def main(argv: Iterable[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="現在の_postsからarXiv inventoryを生成します")
    parser.add_argument(
        "--root", type=Path, default=Path(__file__).resolve().parents[1], help="リポジトリルート"
    )
    args = parser.parse_args(argv)
    root = args.root.resolve()
    result = build_inventory(root / "_posts")
    if result.errors:
        for error in result.errors:
            print(error.format(root), file=sys.stderr)
        print("inventoryは生成されませんでした", file=sys.stderr)
        return 1
    for identifier, path in sorted(result.entries.items()):
        print(f"{identifier}\t{path.relative_to(root)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
