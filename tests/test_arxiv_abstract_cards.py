from pathlib import Path
import unittest

from scripts.validate_posts import parse_post


ROOT = Path(__file__).resolve().parents[1]


class ArxivAbstractCardTests(unittest.TestCase):
    def test_every_existing_post_has_an_arxiv_abstract(self) -> None:
        posts = sorted((ROOT / "_posts").glob("*.md"))
        self.assertEqual(len(posts), 131)
        for post in posts:
            metadata, _body, errors = parse_post(post)
            self.assertFalse(errors, post.name)
            self.assertIsNotNone(metadata, post.name)
            abstract = metadata.get("arxiv_abstract")
            self.assertIsInstance(abstract, str, post.name)
            self.assertTrue(abstract.strip(), post.name)

    def test_card_uses_only_dedicated_english_metadata(self) -> None:
        card = (ROOT / "src/components/PaperCard.astro").read_text(encoding="utf-8")
        self.assertIn("paper.metadata.arxivAbstract", card)
        self.assertNotIn("paper.metadata.abstractEn", card)
        self.assertNotIn("paper.metadata.summaryEn", card)
        self.assertNotIn("English Summary", card)

    def test_card_orders_abstract_before_japanese_summary(self) -> None:
        card = (ROOT / "src/components/PaperCard.astro").read_text(encoding="utf-8")
        abstract_heading = card.index("arXiv Abstract")
        japanese_heading = card.index("日本語要約")
        japanese_summary = card.index("paper.metadata.summary")
        self.assertLess(abstract_heading, japanese_heading)
        self.assertLess(japanese_heading, japanese_summary)
        self.assertNotIn("titleJa", card)
