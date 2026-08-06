# Geometry Paper Digest — Codex instructions

## Purpose
Maintain a Japanese research-paper digest site for algebraic geometry, complex geometry, and several complex variables.

## Daily selection
1. Always read `selection-profile.yml` first.
2. Search all relevant arXiv submissions from the last 24 hours in the configured categories. Do not cap the number of candidates investigated.
3. Rank candidates by the profile and select exactly the single paper most relevant to Masataka Iwai's research.
4. Do not create an article when no paper has a sufficient critical or high-priority match. Report: 「直近24時間には基準を満たす新着論文がありません」.
5. Do not select an arXiv identifier already represented in `_posts/`, unless a new version materially changes its main theorem or principal results.
6. A preferred author is a ranking signal, not an automatic first place. Do not mechanically reject algebraic-geometric uses of “numerical”.

## Publishing a paper
1. Fetch and inspect the arXiv abstract page, exact metadata, PDF, and TeX source when available; verify the displayed license.
2. Never use an existing digest article as a source to copy content into a new article. Read the original paper.
3. Record the exact arXiv identifier and version, authors, first-submission date, categories, and license.
4. Create one Markdown file in `_posts/` named `YYYY-MM-DD-short-slug.md` using `ARTICLE_TEMPLATE.md`. A normal article task changes only that one new post: do not edit existing posts, settings, templates, or layouts each time.
5. Use the exact official English arXiv title as `title`; `title_ja` is optional and must not replace the primary title.
6. Put the permitted English abstract or short quotation in `abstract_en`, followed by a distinct Japanese translation or original summary in `abstract_ja`. Make `summary` a different 2–4 sentence Japanese listing summary.
7. Write the body 「要約」 as 3–5 paragraphs. Integrate necessary introduction material into 「要約」 or 「背景と問題設定」; never add a separate introduction translation/summary section or 「研究上の位置づけ」 section.
8. Compare every main theorem with the PDF or TeX source in a separate verification pass. Preserve every hypothesis, quantifier, sign, index, normalization, and exceptional case, and cite theorem, section, and page locations when available.
9. Distinguish the authors' theorem, conjecture, motivation, prior work, and the digest's explanation. Never present a conditional or conjectural statement as proved.
10. Set exactly one `topic` from `_data/topics.yml` and check all internal and external links.

## License-aware text policy
A translation is an adaptation. Check the license on the arXiv abstract page.
- For CC0, CC BY, CC BY-SA, CC BY-NC, or CC BY-NC-SA, the English abstract and faithful Japanese translation may be included with required attribution and notice.
- For arXiv's non-exclusive distribution license, an ND license, or unclear permission, do not assume the full English abstract may be reproduced and do not invent it. Link to the arXiv abstract page, use only a short English quotation when necessary, and write an original faithful Japanese summary.
- Never imply that arXiv owns the paper's copyright. Always link to the paper and display its license.

## Markdown mathematics
- In every new Markdown article, use `$ ... $` for inline mathematics and `$$` on separate lines around display mathematics.
- Do not use `\(...\)` or `\[...\]` as delimiters in Markdown article bodies.
- Do not unnecessarily double-escape LaTeX commands: write `\omega`, not `\\omega`, in Markdown source.
- Preview MathJax before publication, including long display equations and mobile-width rendering.

## Quality and scope checks
- Confirm `published: false` is absent, the site builds, and the new post appears in exactly one topic page.
- Confirm English abstract content is displayed before Japanese abstract content.
- Do not revise existing articles during a normal new-article task.
- Do not change configuration or layout files during a normal new-article task.

## Git workflow
- For a draft request, create changes without publishing.
- For an explicit publication request, prepare the configured publishing workflow when repository permissions allow it.
- Use the concise article commit message `Add digest for arXiv:<id>`.
