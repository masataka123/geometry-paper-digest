from __future__ import annotations

import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


class BacklogPromptInventoryTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        cls.prompt = (ROOT / "BACKLOG_PROMPT.md").read_text(encoding="utf-8")

    def test_uses_the_shared_fresh_inventory_without_codex_reading_all_posts(self) -> None:
        self.assertGreaterEqual(self.prompt.count("python scripts/arxiv_inventory.py"), 2)
        self.assertIn("DAILY運用と同じ共通inventory", self.prompt)
        self.assertIn("cacheや以前のrunの出力を再利用しません", self.prompt)
        self.assertIn("Codex自身はduplicate確認のために既存記事本文を全件読みません", self.prompt)
        self.assertNotIn("`_posts/` 以下の全Markdown記事を読み", self.prompt)

    def test_inventory_failure_is_fail_closed(self) -> None:
        self.assertIn("非zero終了した場合はfail closed", self.prompt)
        self.assertIn("`paper-backlog.yml`の項目を変更せずBACKLOG処理を中止", self.prompt)
        self.assertIn("推測や別の正規化処理で続行しません", self.prompt)

    def test_duplicate_uses_inventory_path_and_ignores_version(self) -> None:
        self.assertIn("inventoryとbacklog項目のversionを除いた基本番号を主key", self.prompt)
        self.assertIn("status: already-published", self.prompt)
        self.assertIn('article_path: "_posts/既存記事のファイル名.md"', self.prompt)
        self.assertIn('note: "基本arXiv番号が既存記事と重複"', self.prompt)

    def test_first_five_pending_rule_and_order_are_unchanged(self) -> None:
        self.assertIn("最初に現れる `status: pending` から最大5件だけ", self.prompt)
        self.assertIn("duplicate、対象外、取得失敗も5件に数え", self.prompt)
        self.assertIn("補充のため6件目以降へ進まない", self.prompt)
        self.assertIn("backlogの並び順を変更しません", self.prompt)

    def test_pr_check_is_another_fresh_full_scan(self) -> None:
        self.assertIn("existing vs existing、new vs existing、new vs new", self.prompt)
        self.assertIn("処理開始前とは別のfresh scan", self.prompt)
        self.assertIn("inventory生成またはduplicate検査が失敗した場合", self.prompt)


if __name__ == "__main__":
    unittest.main()
