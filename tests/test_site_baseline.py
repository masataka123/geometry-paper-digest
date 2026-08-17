from __future__ import annotations

import copy
import json
import sys
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

from scripts.site_baseline import BaselineError, build_manifest, compare_baseline, legacy_url, validate_manifest


ROOT = Path(__file__).resolve().parents[1]
BASELINE_PATH = ROOT / "tests" / "fixtures" / "site-v2-baseline.json"


class SiteBaselineTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        cls.baseline = json.loads(BASELINE_PATH.read_text(encoding="utf-8"))
        cls.current = build_manifest(ROOT)

    def test_repository_remains_compatible_with_baseline(self) -> None:
        compare_baseline(self.baseline, self.current)

    def test_current_manifest_summary_is_derived_from_articles(self) -> None:
        validate_manifest(self.current)

    def test_legacy_url_uses_filename_slug_not_title(self) -> None:
        self.assertEqual(
            legacy_url("2026-08-17-alpha-spectrum-toric-fano.md"),
            "/papers/2026/08/17/alpha-spectrum-toric-fano/",
        )

    def test_new_article_is_allowed_without_changing_snapshot(self) -> None:
        current = copy.deepcopy(self.baseline)
        added = copy.deepcopy(current["articles"][0])
        added.update(
            filename="2027-01-02-new-paper.md",
            title="A newly added paper",
            authors="New Author",
            arxiv_id="2701.00001",
            legacy_url="/papers/2027/01/02/new-paper/",
        )
        current["articles"].append(added)
        current["summary"]["article_count"] += 1
        current["summary"]["topic_counts"][added["topic"]] += 1
        compare_baseline(self.baseline, current)

    def test_protected_metadata_change_fails(self) -> None:
        current = copy.deepcopy(self.baseline)
        current["articles"][0]["title"] = "Changed title"
        with self.assertRaisesRegex(BaselineError, "title changed"):
            compare_baseline(self.baseline, current)

    def test_duplicate_arxiv_id_fails(self) -> None:
        manifest = copy.deepcopy(self.baseline)
        manifest["articles"][1]["arxiv_id"] = manifest["articles"][0]["arxiv_id"]
        with self.assertRaisesRegex(BaselineError, "duplicate arxiv_id"):
            validate_manifest(manifest)

    def test_duplicate_filename_fails(self) -> None:
        manifest = copy.deepcopy(self.baseline)
        manifest["articles"][1]["filename"] = manifest["articles"][0]["filename"]
        manifest["articles"][1]["legacy_url"] = manifest["articles"][0]["legacy_url"]
        with self.assertRaisesRegex(BaselineError, "duplicate filename"):
            validate_manifest(manifest)

    def test_duplicate_legacy_url_fails(self) -> None:
        manifest = copy.deepcopy(self.baseline)
        manifest["articles"][1]["legacy_url"] = manifest["articles"][0]["legacy_url"]
        with self.assertRaisesRegex(BaselineError, "legacy URL is not derived"):
            validate_manifest(manifest)

    def test_inconsistent_topic_counts_fail(self) -> None:
        manifest = copy.deepcopy(self.baseline)
        topic = manifest["articles"][0]["topic"]
        manifest["summary"]["topic_counts"][topic] += 1
        with self.assertRaisesRegex(BaselineError, "summary is inconsistent"):
            validate_manifest(manifest)


if __name__ == "__main__":
    unittest.main()
