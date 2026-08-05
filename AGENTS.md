# Geometry Paper Digest — Codex instructions

## Purpose
Maintain a Japanese research-paper digest site for algebraic geometry, complex geometry, and several complex variables.

## Daily selection
1. Read `selection-profile.yml` before choosing papers.
2. Search recent arXiv submissions in the configured categories and time window.
3. Rank papers using title, abstract, category overlap, research relevance, and novelty.
4. Prefer papers whose mathematical contribution can be stated accurately from the paper itself.
5. Avoid recommending the same arXiv identifier twice unless a materially new version changes the main result.

## Publishing a paper
When instructed to publish the top paper or a named paper:
1. Fetch the arXiv abstract page, metadata, PDF, and—when available—the TeX source.
2. Record the exact arXiv identifier, version, authors, first-submission date, categories, and license.
3. Read the introduction and all theorem statements needed to identify the main results.
4. Create one Markdown file in `_posts/` named `YYYY-MM-DD-short-slug.md` using `ARTICLE_TEMPLATE.md`.
5. Preserve every hypothesis, quantifier, sign, index, normalization, and exceptional case in theorem statements.
6. Distinguish clearly among the authors' theorem, conjecture, motivation, prior work, and the digest's explanation.
7. Give source locations such as theorem number, section, and page whenever available.
8. Use MathJax-compatible LaTeX. Do not convert mathematical notation into approximate prose when a formula is clearer.
9. Set exactly one `topic` from `_data/topics.yml`.
10. Check all internal and external links before finishing.

## License-aware text policy
A translation is an adaptation. Check the license shown on the arXiv abstract page.
- If the paper uses a license permitting adaptations, a faithful Japanese translation of selected passages may be published with attribution and the required license notice.
- If the license is arXiv's non-exclusive distribution license, an ND license, or is unclear, do not publish a near-complete translation of the introduction. Instead write an original Japanese summary and a precise paraphrase of the main theorem, with short quotations only when necessary.
- Never imply that arXiv itself owns the paper's copyright.
- Always link to the original paper and display the paper's license.

## Quality checks required even without human review
Before publication, perform a separate verification pass:
- Compare theorem hypotheses and conclusions against the PDF or TeX source.
- Check theorem numbering and equation transcription.
- Check that no claim is presented as proved if it is only conjectured or conditional.
- Check Japanese terminology for mathematical precision.
- Check that `published: false` is not present.
- Confirm the site builds and the new post appears in exactly one topic page.

## Git workflow
- For a draft request, create changes without publishing.
- For an explicit `公開してください` request, commit and push to the configured publishing branch if repository permissions allow it.
- Use a concise commit message: `Add digest for arXiv:<id>`.
