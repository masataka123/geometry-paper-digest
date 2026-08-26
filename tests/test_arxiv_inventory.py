from __future__ import annotations

import tempfile
import unittest
from pathlib import Path

from scripts.arxiv_inventory import build_inventory, normalize_arxiv_id


class ArxivInventoryTests(unittest.TestCase):
    def setUp(self) -> None:
        self.temporary_directory = tempfile.TemporaryDirectory()
        self.posts = Path(self.temporary_directory.name) / "_posts"
        self.posts.mkdir()

    def tearDown(self) -> None:
        self.temporary_directory.cleanup()

    def add_post(self, name: str, metadata: str, body: str = "") -> Path:
        path = self.posts / name
        path.write_text(f"---\n{metadata}---\n{body}", encoding="utf-8")
        return path

    def test_supported_forms_have_one_base_identifier(self) -> None:
        values = (
            "2608.01234",
            "arXiv:2608.01234",
            "2608.01234v1",
            "arXiv:2608.01234v27",
            "https://arxiv.org/abs/2608.01234v2",
            "https://arxiv.org/pdf/2608.01234v3",
            "https://arxiv.org/pdf/2608.01234v4.pdf",
            "https://export.arxiv.org/abs/2608.01234",
        )
        self.assertEqual({normalize_arxiv_id(value) for value in values}, {"2608.01234"})

    def test_matching_id_and_url_produce_inventory_entry(self) -> None:
        path = self.add_post(
            "2026-08-01-paper.md",
            'arxiv_id: "arXiv:2608.01234v2"\narxiv_url: "https://arxiv.org/pdf/2608.01234.pdf"\n',
        )
        result = build_inventory(self.posts)
        self.assertTrue(result.ok)
        self.assertEqual(result.entries, {"2608.01234": path})

    def test_mismatching_id_and_url_fail_closed(self) -> None:
        self.add_post(
            "2026-08-01-paper.md",
            'arxiv_id: "2608.01234"\narxiv_url: "https://arxiv.org/abs/2608.99999"\n',
        )
        result = build_inventory(self.posts)
        self.assertFalse(result.ok)
        self.assertEqual(result.entries, {})
        self.assertTrue(any("arxiv_idは" in error.message for error in result.errors))

    def test_unnormalizable_metadata_fails_closed(self) -> None:
        self.add_post(
            "2026-08-01-paper.md",
            'arxiv_id: "not-an-id"\narxiv_url: "https://example.com/2608.01234"\n',
        )
        result = build_inventory(self.posts)
        self.assertFalse(result.ok)
        self.assertEqual(result.entries, {})
        self.assertEqual(len(result.errors), 2)

    def test_duplicate_versions_report_every_path(self) -> None:
        self.add_post(
            "2026-08-01-first.md",
            'arxiv_id: "2608.01234v1"\narxiv_url: "https://arxiv.org/abs/2608.01234"\n',
        )
        self.add_post(
            "2026-08-02-second.md",
            'arxiv_id: "arXiv:2608.01234v2"\narxiv_url: "https://arxiv.org/pdf/2608.01234v2.pdf"\n',
        )
        result = build_inventory(self.posts)
        self.assertFalse(result.ok)
        self.assertEqual(result.entries, {})
        duplicate_errors = [error for error in result.errors if "重複" in error.message]
        self.assertEqual(len(duplicate_errors), 2)
        self.assertTrue(all("first.md" in error.message and "second.md" in error.message for error in duplicate_errors))

    def test_body_url_is_legacy_fallback_when_both_fields_are_absent(self) -> None:
        path = self.add_post(
            "2026-08-01-legacy.md",
            "title: Legacy\n",
            "[paper](https://export.arxiv.org/pdf/2608.01234v6.pdf)\n",
        )
        result = build_inventory(self.posts)
        self.assertTrue(result.ok)
        self.assertEqual(result.entries, {"2608.01234": path})

    def test_ambiguous_body_fallback_fails_closed(self) -> None:
        self.add_post(
            "2026-08-01-legacy.md",
            "title: Legacy\n",
            "https://arxiv.org/abs/2608.01234 https://arxiv.org/abs/2608.05678\n",
        )
        result = build_inventory(self.posts)
        self.assertFalse(result.ok)
        self.assertEqual(result.entries, {})

    def test_only_one_metadata_field_fails_closed(self) -> None:
        self.add_post("2026-08-01-paper.md", 'arxiv_id: "2608.01234"\n')
        result = build_inventory(self.posts)
        self.assertFalse(result.ok)
        self.assertTrue(any("片方だけ" in error.message for error in result.errors))


if __name__ == "__main__":
    unittest.main()
