# Phase 6 GitHub Pages cutover runbook

Phase 6A only prepares and validates the custom GitHub Actions deployment. The
repository Pages source remains the legacy branch/root Jekyll deployment, and
`deploy-pages.yml` has only a manual `workflow_dispatch` trigger. Merging the
preflight therefore cannot deploy Astro. Jekyll sources remain in place until
Phase 7.

## Before cutover

- Confirm the Phase 6 PR is merged and `main` CI is green.
- Confirm the current production Jekyll site is reachable.
- Confirm **Settings → Pages** still shows the legacy branch/root source.
- Confirm **Actions → Deploy Astro site to Pages** exists, but do not run it yet.
- Run `npm ci`, `npm run build:search`, and `npm run test:pages-cutover` at the
  cutover commit. The validator dynamically inventories papers, topics,
  authors, and tags rather than freezing current corpus counts.

## Cutover (Phase 6B, manual)

1. Open the GitHub repository.
2. Open **Settings**.
3. Open **Pages**.
4. Under **Build and deployment**, locate **Source**.
5. Select **GitHub Actions**.
6. Open **Actions**.
7. Select **Deploy Astro site to Pages**.
8. Choose **Run workflow**, select `main`, and explicitly dispatch it.
9. Wait for both `build` and the protected `github-pages` `deploy` job to
   succeed. A failed build cannot start deployment.

The workflow builds with `npm run build:search`, validates that exact `dist/`,
and uploads only `dist/`. `configure-pages` does not rewrite Astro's configured
`site` (`https://masataka123.github.io`) or `base`
(`/geometry-paper-digest`).

## After cutover

- Run `npm run smoke:production` and require all HTTP checks to pass.
- Manually inspect the home page, `/papers/`, one protected paper, all topic
  `.html` route types (including `complex-geometry.html`), `/authors/` and an
  author page, `/tags/` and a tag page.
- Exercise `q`, author, tag, topic, year, and sort filters and confirm Pagefind
  loads below `/geometry-paper-digest/pagefind/`.
- Confirm Japanese content, existing CSS, trailing slashes, and MathJax 3
  rendering on a formula-bearing paper.
- Inspect home, lists, search, and a paper at mobile width.

## Rollback

If the initial deployment has a serious defect, do not delete or rewrite
content. In **Settings → Pages → Build and deployment → Source**, restore the
previous **Deploy from a branch** selection and its prior branch/root folder,
then wait for the legacy Jekyll deployment and repeat production URL checks.
Rollback is intentionally manual. All Jekyll layouts, pages, configuration,
CSS, and compatibility files remain available through Phase 6.

## Enabling automatic deployment after a successful cutover

After the first manual deployment and smoke/manual checks succeed, use a small
Phase 6B follow-up that adds only this event beside `workflow_dispatch`:

```yaml
  push:
    branches:
      - main
```

Keep the manual trigger for recovery, and retain the existing concurrency,
permissions, validation, artifact, and two-job structure. Never add a
`pull_request` deployment trigger.
