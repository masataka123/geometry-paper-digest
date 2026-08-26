#!/usr/bin/env python3
"""Geometry Paper Digest の記事を、リポジトリ内の情報だけで検証する。"""

from __future__ import annotations

import argparse
import re
import sys
from dataclasses import dataclass
from datetime import date
from pathlib import Path
from typing import Any, Iterable
import yaml

from urllib.parse import urlparse

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from scripts.arxiv_inventory import ARXIV_HOSTS, ARXIV_PATH_RE, build_inventory, normalize_arxiv_id


REQUIRED_FIELDS = (
    "layout",
    "title",
    "authors",
    "arxiv_primary_category",
    "topic",
    "tags",
    "arxiv_id",
    "arxiv_url",
    "arxiv_submitted",
    "arxiv_updated",
    "arxiv_categories",
    "arxiv_abstract",
    "summary",
    "abstract_en",
    "summary_en",
    "abstract_ja",
    "abstract_source_url",
    "license_name",
    "license_url",
    "article_mode",
    "source_scope",
    "published",
)

POST_FILENAME_RE = re.compile(
    r"^(?P<date>\d{4}-\d{2}-\d{2})-(?P<slug>[a-z0-9]+(?:-[a-z0-9]+)*)\.md$"
)
PRIMARY_CATEGORY_TOPIC = {
    "math.AG": "algebraic-geometry",
    "math.DG": "differential-geometry",
    "math.CV": "several-complex-variables",
}

PLACEHOLDERS = (
    (re.compile(r"Exact official English arXiv title", re.IGNORECASE), "英語タイトルのプレースホルダー"),
    (re.compile(r"(?<!\d)2608\.00000(?:v\d+)?(?!\d)"), "arXiv番号のプレースホルダー"),
    (re.compile(r"著者名"), "著者名のプレースホルダー"),
    (re.compile(r"\bSection\s+X\b", re.IGNORECASE), "節番号のプレースホルダー"),
    (re.compile(r"\bpp\.\s*X\s*[–—-]\s*Y\b", re.IGNORECASE), "ページ範囲のプレースホルダー"),
    (re.compile(r"\bp\.\s*X\b", re.IGNORECASE), "ページ番号のプレースホルダー"),
)


@dataclass(frozen=True)
class ValidationError:
    """1件の検証エラー。"""

    path: Path
    check: str
    message: str

    def format(self, root: Path | None = None) -> str:
        display_path = self.path
        if root is not None:
            try:
                display_path = self.path.relative_to(root)
            except ValueError:
                pass
        return f"[エラー] 対象ファイル: {display_path} | 検査項目: {self.check} | 問題: {self.message}"


@dataclass(frozen=True)
class ValidationResult:
    """リポジトリ全体の検証結果。"""

    article_count: int
    arxiv_count: int
    errors: tuple[ValidationError, ...]

    @property
    def ok(self) -> bool:
        return not self.errors


def nonempty_text(value: Any) -> bool:
    """値が空白以外を含む文字列なら真を返す。"""

    return isinstance(value, str) and bool(value.strip())


def is_arxiv_url(value: Any) -> bool:
    """値が対応対象のarXiv HTTP(S) URLなら真を返す。"""

    if not isinstance(value, str):
        return False
    candidate = value.strip()
    try:
        parsed = urlparse(candidate)
    except ValueError:
        return False
    if parsed.scheme.lower() not in {"http", "https"}:
        return False
    if parsed.hostname is None or parsed.hostname.lower() not in ARXIV_HOSTS:
        return False
    if parsed.username is not None or parsed.password is not None or parsed.port is not None:
        return False
    if parsed.query or parsed.fragment:
        return False
    return ARXIV_PATH_RE.fullmatch(parsed.path) is not None


def parse_post(path: Path) -> tuple[dict[str, Any] | None, str, list[ValidationError]]:
    """記事のfront matterと本文を分離し、YAMLを解析する。"""

    errors: list[ValidationError] = []
    try:
        text = path.read_text(encoding="utf-8")
    except (OSError, UnicodeError) as exc:
        errors.append(ValidationError(path, "ファイル読込", f"UTF-8で読み込めません: {exc}"))
        return None, "", errors

    lines = text.splitlines(keepends=True)
    if not lines or lines[0].strip() != "---":
        errors.append(ValidationError(path, "YAML front matter", "先頭の区切り `---` がありません"))
        return None, text, errors

    closing_index = next((index for index in range(1, len(lines)) if lines[index].strip() == "---"), None)
    if closing_index is None:
        errors.append(ValidationError(path, "YAML front matter", "終了区切り `---` がありません"))
        return None, "", errors

    yaml_text = "".join(lines[1:closing_index])
    body = "".join(lines[closing_index + 1 :])
    try:
        data = yaml.safe_load(yaml_text)
    except yaml.YAMLError as exc:
        errors.append(ValidationError(path, "YAML front matter", f"YAMLを解析できません: {exc}"))
        return None, body, errors
    if not isinstance(data, dict):
        errors.append(ValidationError(path, "YAML front matter", "front matterはキーと値の対応である必要があります"))
        return None, body, errors
    return data, body, errors


def validate_filename(path: Path) -> list[ValidationError]:
    """Jekyll記事ファイル名と日付を検証する。"""

    match = POST_FILENAME_RE.fullmatch(path.name)
    if not match:
        return [ValidationError(path, "ファイル名", "`YYYY-MM-DD-short-slug.md` 形式ではありません")]
    try:
        date.fromisoformat(match.group("date"))
    except ValueError:
        return [ValidationError(path, "ファイル名", f"日付 `{match.group('date')}` は有効な暦日ではありません")]
    return []


def validate_post(path: Path, topics: set[str]) -> tuple[list[ValidationError], str | None]:
    """単一記事を検証し、エラーと基本arXiv番号を返す。"""

    errors = validate_filename(path)
    metadata, body, parse_errors = parse_post(path)
    errors.extend(parse_errors)
    if metadata is None:
        return errors, None

    for field in REQUIRED_FIELDS:
        if field not in metadata:
            errors.append(ValidationError(path, "必須フィールド", f"`{field}` がありません"))

    arxiv_id = normalize_arxiv_id(metadata.get("arxiv_id"))
    arxiv_url = normalize_arxiv_id(metadata.get("arxiv_url"))
    if "arxiv_id" in metadata and arxiv_id is None:
        errors.append(ValidationError(path, "arXiv番号", "`arxiv_id` から基本arXiv番号を抽出できません"))
    if "arxiv_url" in metadata and arxiv_url is None:
        errors.append(ValidationError(path, "arXiv URL", "`arxiv_url` から基本arXiv番号を抽出できません"))
    if arxiv_id is not None and arxiv_url is not None and arxiv_id != arxiv_url:
        errors.append(
            ValidationError(path, "arXiv番号の一致", f"arxiv_idは `{arxiv_id}`、arxiv_urlは `{arxiv_url}` です")
        )

    for field in ("arxiv_url", "abstract_source_url"):
        if field in metadata and not is_arxiv_url(metadata[field]):
            errors.append(ValidationError(path, "arXiv URL", f"`{field}` は妥当なarXivのHTTP(S) URLではありません"))

    abstract_used = nonempty_text(metadata.get("abstract_en"))
    summary_used = nonempty_text(metadata.get("summary_en"))
    if abstract_used == summary_used:
        state = "両方に文章があります" if abstract_used else "両方が空です"
        errors.append(ValidationError(path, "英語欄の排他性", f"`abstract_en` と `summary_en` の{state}"))

    for field in ("arxiv_abstract", "summary", "abstract_ja"):
        if field in metadata and not nonempty_text(metadata[field]):
            errors.append(ValidationError(path, "必須文章", f"`{field}` に空白ではない文章が必要です"))

    if "source_scope" in metadata and metadata["source_scope"] != "Abstract and Introduction":
        errors.append(
            ValidationError(path, "source_scope", "値は正確に `Abstract and Introduction` である必要があります")
        )
    if "published" in metadata and (type(metadata["published"]) is not bool or metadata["published"] is not True):
        errors.append(ValidationError(path, "published", "YAMLの真偽値 `true` である必要があります"))
    topic = metadata.get("topic")
    if "topic" in metadata and not nonempty_text(topic):
        errors.append(ValidationError(path, "topic", "一つのtopicを文字列で指定する必要があります"))
    elif "topic" in metadata and topic not in topics:
        errors.append(ValidationError(path, "topic", f"未定義のトピック `{topic}` が指定されています"))

    if "tags" in metadata and not isinstance(metadata["tags"], list):
        errors.append(ValidationError(path, "tags", "YAMLリストである必要があります"))

    primary = metadata.get("arxiv_primary_category")
    if "arxiv_primary_category" in metadata:
        if not nonempty_text(primary):
            errors.append(ValidationError(path, "primary category", "`arxiv_primary_category` は空でない文字列である必要があります"))
        elif primary not in PRIMARY_CATEGORY_TOPIC:
            errors.append(ValidationError(path, "primary category", f"対象外のprimary category `{primary}` です"))
        elif topic != PRIMARY_CATEGORY_TOPIC[primary]:
            errors.append(ValidationError(path, "primary categoryとtopic", f"`{primary}` のtopicは `{PRIMARY_CATEGORY_TOPIC[primary]}` である必要があります"))

    categories = metadata.get("arxiv_categories")
    if "arxiv_categories" in metadata:
        if not isinstance(categories, list):
            errors.append(ValidationError(path, "arxiv_categories", "YAMLリストである必要があります"))
        else:
            if any(not nonempty_text(category) for category in categories):
                errors.append(ValidationError(path, "arxiv_categories", "各要素は空でない文字列である必要があります"))
            hashable_categories = [category for category in categories if isinstance(category, str)]
            if len(hashable_categories) != len(set(hashable_categories)):
                errors.append(ValidationError(path, "arxiv_categories", "カテゴリーが重複しています"))
            if nonempty_text(primary) and primary not in categories:
                errors.append(ValidationError(path, "arxiv_categories", "primary categoryが含まれていません"))

    forbidden_math = ((r"\(", r"\(...\)"), (r"\[", r"\[...\]"))
    for marker, description in forbidden_math:
        if marker in body:
            errors.append(ValidationError(path, "数式区切り", f"禁止された区切り `{description}` が本文にあります"))
    for pattern, description in PLACEHOLDERS:
        if pattern.search(body):
            errors.append(ValidationError(path, "テンプレートプレースホルダー", f"未処理の{description}が本文にあります"))

    return errors, arxiv_id or arxiv_url


def load_topics(path: Path) -> tuple[set[str], list[ValidationError]]:
    """topics.ymlからトピックslugを読み込む。"""

    try:
        data = yaml.safe_load(path.read_text(encoding="utf-8"))
    except (OSError, UnicodeError, yaml.YAMLError) as exc:
        return set(), [ValidationError(path, "トピック定義", f"読み込みまたは解析に失敗しました: {exc}")]
    if not isinstance(data, list):
        return set(), [ValidationError(path, "トピック定義", "トップレベルはリストである必要があります")]
    topics = {item.get("slug") for item in data if isinstance(item, dict) and nonempty_text(item.get("slug"))}
    return topics, []


def validate_repository(root: Path) -> ValidationResult:
    """root以下の全記事を検証する。"""

    root = root.resolve()
    posts_directory = root / "_posts"
    posts = sorted(posts_directory.rglob("*.md"))
    topics, errors = load_topics(root / "_data" / "topics.yml")
    inventory = build_inventory(posts_directory)
    for post in posts:
        if post.parent != posts_directory:
            errors.append(
                ValidationError(post, "ファイル名", "記事は `_posts/` の直下に置く必要があります")
            )
        post_errors, _ = validate_post(post, topics)
        errors.extend(post_errors)
    for error in inventory.errors:
        # The inventory is the shared source of truth for consistency and duplicate checks.
        if "重複" in error.message:
            errors.append(ValidationError(error.path, "arXiv番号の重複", error.message))
    return ValidationResult(len(posts), len(inventory.entries), tuple(errors))


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Geometry Paper Digestの全記事を検証します")
    parser.add_argument(
        "--root",
        type=Path,
        default=Path(__file__).resolve().parents[1],
        help="リポジトリのルート（既定: スクリプトの親リポジトリ）",
    )
    return parser


def main(argv: Iterable[str] | None = None) -> int:
    args = build_parser().parse_args(argv)
    result = validate_repository(args.root)
    if result.errors:
        for error in result.errors:
            print(error.format(args.root))
        print(f"検査した記事数: {result.article_count}")
        print(f"検出した基本arXiv番号数: {result.arxiv_count}")
        print(f"検出したエラー数: {len(result.errors)}")
        return 1
    print(f"検査した記事数: {result.article_count}")
    print(f"検出した基本arXiv番号数: {result.arxiv_count}")
    print("すべての記事が検査に合格しました")
    return 0


if __name__ == "__main__":
    sys.exit(main())
