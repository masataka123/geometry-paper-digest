from __future__ import annotations

import sys
import tempfile
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "scripts"))

from validate_astro_build import PageInspector, load_topic_slugs, output_path


class AstroBuildRegressionHelpersTests(unittest.TestCase):
    def test_trailing_slash_url_maps_to_index_file(self) -> None:
        self.assertEqual(
            output_path(Path("dist"), "/papers/2026/08/17/example/"),
            Path("dist/papers/2026/08/17/example/index.html"),
        )

    def test_html_url_maps_to_literal_html_file(self) -> None:
        self.assertEqual(
            output_path(Path("dist"), "/topics/algebraic-geometry.html"),
            Path("dist/topics/algebraic-geometry.html"),
        )

    def test_inspector_finds_links_and_paper_body(self) -> None:
        inspector = PageInspector()
        inspector.feed(
            '<a href="/geometry-paper-digest/">home</a>'
            '<div class="paper-content"><h2>見出し</h2><p>本文</p></div>'
        )
        self.assertEqual(inspector.hrefs, ["/geometry-paper-digest/"])
        self.assertIn("本文", " ".join(inspector.paper_content_text))

    def test_topic_slugs_come_from_topics_data(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            (root / "_data").mkdir()
            (root / "_data" / "topics.yml").write_text(
                "- slug: first-topic\n- slug: future-topic\n",
                encoding="utf-8",
            )
            self.assertEqual(load_topic_slugs(root), ["first-topic", "future-topic"])


if __name__ == "__main__":
    unittest.main()
