from __future__ import annotations

import sys
import tempfile
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

from scripts.validate_posts import normalize_arxiv_id, validate_repository


VALID_METADATA = """\
layout: paper
title: "A valid paper"
authors: "Alice Author"
arxiv_primary_category: "math.AG"
topic: algebraic-geometry
arxiv_id: "2608.01234v1"
arxiv_url: "https://arxiv.org/abs/2608.01234"
arxiv_submitted: "2026-08-01"
arxiv_updated: "2026-08-02"
arxiv_categories:
  - math.AG
summary: "問題と結果を説明する日本語要約です。"
abstract_en: "An English abstract."
summary_en: ""
abstract_ja: "英語欄とは別の日本語による紹介です。"
abstract_source_url: "https://arxiv.org/abs/2608.01234"
license_name: "CC BY 4.0"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
"""


class RepositoryFixture:
    def __init__(self) -> None:
        self.temporary_directory = tempfile.TemporaryDirectory()
        self.root = Path(self.temporary_directory.name)
        (self.root / "_posts").mkdir()
        (self.root / "_data").mkdir()
        (self.root / "_data" / "topics.yml").write_text(
            "- slug: algebraic-geometry\n  title: 代数幾何学\n"
            "- slug: differential-geometry\n  title: 微分幾何学\n"
            "- slug: several-complex-variables\n  title: 多変数複素解析\n",
            encoding="utf-8",
        )

    def close(self) -> None:
        self.temporary_directory.cleanup()

    def add_post(
        self,
        name: str = "2026-08-06-valid-paper.md",
        metadata: str = VALID_METADATA,
        body: str = "## イントロダクションの日本語要約\n\n本文です。\n",
    ) -> Path:
        path = self.root / "_posts" / name
        path.write_text(f"---\n{metadata}---\n\n{body}", encoding="utf-8")
        return path


class ValidatePostsTests(unittest.TestCase):
    def setUp(self) -> None:
        self.repo = RepositoryFixture()

    def tearDown(self) -> None:
        self.repo.close()

    def messages(self) -> list[str]:
        return [f"{error.check}: {error.message}" for error in validate_repository(self.repo.root).errors]

    def replace(self, old: str, new: str) -> str:
        return VALID_METADATA.replace(old, new)

    def test_valid_post_passes(self) -> None:
        self.repo.add_post()
        result = validate_repository(self.repo.root)
        self.assertTrue(result.ok)
        self.assertEqual((result.article_count, result.arxiv_count), (1, 1))

    def test_broken_yaml_front_matter_fails(self) -> None:
        self.repo.add_post(metadata="title: [broken\n")
        self.assertTrue(any("YAMLを解析できません" in message for message in self.messages()))

    def test_missing_required_field_fails(self) -> None:
        self.repo.add_post(metadata=self.replace('authors: "Alice Author"\n', ""))
        self.assertTrue(any("`authors` がありません" in message for message in self.messages()))

    def test_arxiv_id_and_url_mismatch_fails(self) -> None:
        self.repo.add_post(
            metadata=self.replace(
                'arxiv_url: "https://arxiv.org/abs/2608.01234"',
                'arxiv_url: "https://arxiv.org/abs/2608.99999"',
            )
        )
        self.assertTrue(any("arXiv番号の一致" in message for message in self.messages()))

    def test_versions_are_detected_as_duplicates(self) -> None:
        self.repo.add_post()
        second = self.replace("2608.01234v1", "2608.01234v2")
        self.repo.add_post("2026-08-06-second-paper.md", second)
        messages = self.messages()
        self.assertTrue(any("arXiv番号の重複" in message and "2608.01234" in message for message in messages))

    def test_abs_and_pdf_urls_are_detected_as_duplicates(self) -> None:
        self.repo.add_post()
        second = self.replace("2608.01234v1", "arXiv:2608.01234v2").replace(
            "https://arxiv.org/abs/2608.01234", "https://arxiv.org/pdf/2608.01234.pdf"
        )
        self.repo.add_post("2026-08-06-second-paper.md", second)
        self.assertTrue(any("arXiv番号の重複" in message for message in self.messages()))

    def test_both_english_fields_filled_fails(self) -> None:
        self.repo.add_post(metadata=self.replace('summary_en: ""', 'summary_en: "An original summary."'))
        self.assertTrue(any("両方に文章があります" in message for message in self.messages()))

    def test_both_english_fields_empty_fails(self) -> None:
        self.repo.add_post(metadata=self.replace('abstract_en: "An English abstract."', 'abstract_en: ""'))
        self.assertTrue(any("両方が空です" in message for message in self.messages()))

    def test_unknown_topic_fails(self) -> None:
        self.repo.add_post(metadata=self.replace("topic: algebraic-geometry", "topic: unknown-topic"))
        self.assertTrue(any("未定義のトピック" in message for message in self.messages()))

    def test_valid_primary_category_topic_mappings_pass(self) -> None:
        cases = (("math.AG", "algebraic-geometry"), ("math.DG", "differential-geometry"), ("math.CV", "several-complex-variables"))
        for index, (primary, topic) in enumerate(cases):
            metadata = VALID_METADATA.replace('arxiv_primary_category: "math.AG"', f'arxiv_primary_category: "{primary}"')
            metadata = metadata.replace("topic: algebraic-geometry", f"topic: {topic}")
            metadata = metadata.replace("  - math.AG", f"  - {primary}")
            metadata = metadata.replace("2608.01234", f"2608.0123{index}")
            self.repo.add_post(f"2026-08-06-valid-paper-{index}.md", metadata)
        self.assertTrue(validate_repository(self.repo.root).ok)

    def test_primary_category_topic_mismatch_fails(self) -> None:
        self.repo.add_post(metadata=self.replace("topic: algebraic-geometry", "topic: differential-geometry"))
        self.assertTrue(any("primary categoryとtopic" in message for message in self.messages()))

    def test_missing_primary_category_fails(self) -> None:
        self.repo.add_post(metadata=self.replace('arxiv_primary_category: "math.AG"\n', ""))
        self.assertTrue(any("`arxiv_primary_category` がありません" in message for message in self.messages()))

    def test_disallowed_primary_category_fails(self) -> None:
        self.repo.add_post(metadata=self.replace('arxiv_primary_category: "math.AG"', 'arxiv_primary_category: "math.NT"'))
        self.assertTrue(any("対象外のprimary category" in message for message in self.messages()))

    def test_categories_string_fails(self) -> None:
        self.repo.add_post(metadata=self.replace("arxiv_categories:\n  - math.AG", 'arxiv_categories: "math.AG"'))
        self.assertTrue(any("YAMLリスト" in message for message in self.messages()))

    def test_primary_category_missing_from_categories_fails(self) -> None:
        self.repo.add_post(metadata=self.replace("  - math.AG", "  - math.DG"))
        self.assertTrue(any("primary categoryが含まれていません" in message for message in self.messages()))

    def test_duplicate_categories_fail(self) -> None:
        self.repo.add_post(metadata=self.replace("  - math.AG", "  - math.AG\n  - math.AG"))
        self.assertTrue(any("カテゴリーが重複" in message for message in self.messages()))

    def test_published_false_fails(self) -> None:
        self.repo.add_post(metadata=self.replace("published: true", "published: false"))
        self.assertTrue(any("YAMLの真偽値 `true`" in message for message in self.messages()))

    def test_published_string_true_fails(self) -> None:
        self.repo.add_post(metadata=self.replace("published: true", 'published: "true"'))
        self.assertTrue(any("YAMLの真偽値 `true`" in message for message in self.messages()))

    def test_wrong_source_scope_fails(self) -> None:
        self.repo.add_post(metadata=self.replace("Abstract and Introduction", "Full paper"))
        self.assertTrue(any("source_scope" in message for message in self.messages()))

    def test_forbidden_math_delimiters_fail(self) -> None:
        self.repo.add_post(body=r"本文に \(x+y\) と式を書く。")
        self.assertTrue(any("数式区切り" in message for message in self.messages()))

    def test_invalid_filename_fails(self) -> None:
        self.repo.add_post(name="2026-02-30-Bad_Slug.md")
        self.assertTrue(any(message.startswith("ファイル名:") for message in self.messages()))

    def test_template_placeholder_fails(self) -> None:
        self.repo.add_post(body="- **Introduction:** Section X, pp. X–Y\n")
        self.assertTrue(any("テンプレートプレースホルダー" in message for message in self.messages()))

    def test_supported_arxiv_representations_normalize(self) -> None:
        values = (
            "arXiv:2608.01234",
            "2608.01234",
            "2608.01234v1",
            "2608.01234v2",
            "https://arxiv.org/abs/2608.01234",
            "https://arxiv.org/abs/2608.01234v2",
            "https://arxiv.org/pdf/2608.01234.pdf",
            "https://export.arxiv.org/abs/2608.01234",
        )
        self.assertEqual({normalize_arxiv_id(value) for value in values}, {"2608.01234"})


if __name__ == "__main__":
    unittest.main()
