# Site v2 migration contract

This document fixes the compatibility contract for the long-term migration of
Geometry Paper Digest. Later phases may change the site generator and user
interface, but they must preserve the content and URLs protected here.

## Source of truth

- `_posts/` is the only source of truth for paper articles.
- Articles must not be copied into an Astro-specific content directory.
- Existing Markdown bodies must not be rewritten as part of the migration.
- `_data/topics.yml` remains the source of truth for topic definitions.
- Build-time adapters may derive indexes and route data, but generated data is
  never an authoritative replacement for these source files.

## Compatibility contract

- Every existing paper URL must remain available.
- Existing topic URLs ending in `.html` must remain available.
- `/topics/complex-geometry.html` must remain available as the legacy topic
  notice page.
- The GitHub Pages base path remains `/geometry-paper-digest`.
- Paper routes retain their current trailing slash and use the Jekyll pattern
  `/papers/:year/:month/:day/:title/`. Here `:title` means the slug in the
  Markdown filename, not a slug derived from front matter `title`.
- MathJax 3 rendering for `$...$` and `$$...$$` mathematics must be preserved.
- The normal article-addition workflow specified by `DAILY_PROMPT.md`,
  `BACKLOG_PROMPT.md`, `ARTICLE_TEMPLATE.md`, and `AGENTS.md` must continue to
  work without requiring article copies or edits to existing articles.
- `scripts/validate_posts.py` remains the authoritative validator for article
  metadata and normalized arXiv identifier uniqueness.

## Baseline and regression policy

`tests/fixtures/site-v2-baseline.json` is a versioned snapshot of every article
present when Phase 0 was completed. For each baseline article it records the
filename, title, authors, topic, normalized base arXiv identifier, and legacy
URL. Its summary records the snapshot article count and topic counts.

The regression checker regenerates the same fields directly from `_posts/`.
Every snapshot entry must still exist and match exactly, so an accidental
rename or metadata/URL change to an existing article fails. Newly added valid
articles are allowed: they are checked for uniqueness and consistency but do
not require rewriting the historical snapshot. The snapshot's counts are
checked only against its own records; current counts are always derived from
the current posts. This separates historical compatibility protection from
normal growth through the article-addition workflow.

When an intentional change to a protected historical value is approved, its
snapshot update must be reviewed together with an explicit compatibility plan.
Do not regenerate the snapshot merely to make a failing test pass.

## Migration phases

0. **Contract and baseline:** freeze this contract, capture the article
   baseline, and add URL/metadata regression tests.
1. **Astro compatibility layer:** add only an Astro build-time adapter over
   `_posts/` and reproduce existing pages, URLs, styling, and MathJax behavior.
2. **Compact list and filters:** add compact paper listings and static topic
   and year filtering.
3. **Pagefind:** add the static full-text index and search interface.
4. **Authors:** add normalized author indexing, author search, and author pages.
5. **Tags:** define the tag taxonomy, add optional tag metadata, filters, and
   tag pages without conflating tags with primary-category topics.
6. **GitHub Pages cutover:** deploy the tested Astro/Pagefind artifact through
   GitHub Actions while retaining the base path and legacy routes.
7. **Jekyll retirement:** after a stable comparison period, remove Jekyll-only
   files while retaining `_posts/`, topic data, operational prompts, and the
   Python validation suite.

Each phase must retain the checks established by all earlier phases. Astro,
Pagefind, search UI, author pages, and tags are explicitly outside Phase 0.
