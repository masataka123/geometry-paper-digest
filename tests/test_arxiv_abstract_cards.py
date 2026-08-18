from pathlib import Path
import unittest

from scripts.validate_posts import parse_post


ROOT = Path(__file__).resolve().parents[1]


class ArxivAbstractCardTests(unittest.TestCase):
    def test_every_existing_post_has_an_arxiv_abstract(self) -> None:
        posts = sorted((ROOT / "_posts").glob("*.md"))
        for post in posts:
            metadata, _body, errors = parse_post(post)
            self.assertFalse(errors, post.name)
            self.assertIsNotNone(metadata, post.name)
            abstract = metadata.get("arxiv_abstract")
            self.assertIsInstance(abstract, str, post.name)
            self.assertTrue(abstract.strip(), post.name)

    def test_card_uses_only_listing_summary(self) -> None:
        card = (ROOT / "src/components/PaperCard.astro").read_text(encoding="utf-8")
        self.assertIn("paper.metadata.summary", card)
        self.assertNotIn("paper.metadata.arxivAbstract", card)
        self.assertNotIn("paper.metadata.abstractEn", card)
        self.assertNotIn("paper.metadata.summaryEn", card)
        self.assertNotIn("arXiv Abstract", card)

    def test_card_orders_tags_summary_and_links(self) -> None:
        card = (ROOT / "src/components/PaperCard.astro").read_text(encoding="utf-8")
        tags = card.index("tag-chips")
        japanese_heading = card.index("日本語要約")
        japanese_summary = card.index("paper.metadata.summary")
        links = card.index("paper-card__links")
        self.assertLess(tags, japanese_heading)
        self.assertLess(japanese_heading, japanese_summary)
        self.assertLess(japanese_summary, links)
        self.assertNotIn("titleJa", card)

    def test_individual_abstracts_use_official_and_japanese_metadata(self) -> None:
        abstracts = (ROOT / "src/components/Abstracts.astro").read_text(encoding="utf-8")
        official_heading = abstracts.index("arXiv Abstract")
        official_source = abstracts.index("metadata.arxivAbstract")
        japanese_heading = abstracts.index("日本語要約")
        japanese_source = abstracts.index("metadata.abstractJa")
        self.assertLess(official_heading, official_source)
        self.assertLess(official_source, japanese_heading)
        self.assertLess(japanese_heading, japanese_source)
        for removed in ("metadata.abstractEn", "metadata.summaryEn", "English summary", "Original abstract on arXiv"):
            self.assertNotIn(removed, abstracts)
