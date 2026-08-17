#!/usr/bin/env node
import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";

import matter from "gray-matter";
import { load, JSON_SCHEMA } from "js-yaml";
import { validateBaselineAssignments, validatePostTags, validateTaxonomy } from "./tag-validation.mjs";

const root = new URL("../", import.meta.url);
const base = "/geometry-paper-digest";
const baseline = JSON.parse(await readFile(new URL("tests/fixtures/phase5-tags-baseline.json", root), "utf8"));
const taxonomy = load(await readFile(new URL("_data/tags.yml", root), "utf8"), { schema: JSON_SCHEMA });
const ids = validateTaxonomy(taxonomy);
assert.equal(ids.length, 37, "taxonomy must contain exactly 37 tags");
assert.deepEqual(ids, baseline.taxonomy_ids, "taxonomy IDs/order differ from the approved Phase 5 baseline");
const known = new Set(ids);

// Validate the fixture's own migration summary so it cannot be edited inconsistently.
const baselineFrequency = Object.fromEntries(ids.map((id) => [id, 0]));
let baselineAssignments = 0;
let baselineZero = 0;
for (const article of baseline.articles) {
  validatePostTags(article, known, `baseline ${article.filename}`);
  baselineAssignments += article.tags.length;
  if (!article.tags.length) baselineZero++;
  for (const id of article.tags) baselineFrequency[id]++;
}
assert.equal(baseline.summary.article_count, baseline.articles.length, "Phase 5 baseline article count is inconsistent");
assert.equal(baseline.summary.zero_tag_count, baselineZero, "Phase 5 baseline zero-tag count is inconsistent");
assert.equal(baseline.summary.total_assignments, baselineAssignments, "Phase 5 baseline assignment count is inconsistent");
assert.deepEqual(baseline.summary.tag_frequencies, baselineFrequency, "Phase 5 baseline frequencies are inconsistent");

const filenames = (await readdir(new URL("_posts/", root))).filter((name) => name.endsWith(".md")).sort();
assert(filenames.length >= baseline.articles.length, "current corpus is smaller than the Phase 5 baseline");
const frequency = new Map(ids.map((id) => [id, 0]));
let total = 0;
let zero = 0;
const posts = [];
const currentByFilename = new Map();
for (const filename of filenames) {
  const source = await readFile(new URL(`_posts/${filename}`, root), "utf8");
  const parsed = matter(source);
  validatePostTags(parsed.data, known, filename);
  currentByFilename.set(filename, parsed.data.tags);
  for (const id of parsed.data.tags) frequency.set(id, frequency.get(id) + 1);
  total += parsed.data.tags.length;
  if (!parsed.data.tags.length) zero++;
  const [,year,month,day,slug] = filename.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)\.md$/);
  posts.push({ filename, tags: parsed.data.tags, pathname: `/papers/${year}/${month}/${day}/${slug}/` });
}
validateBaselineAssignments(baseline.articles, currentByFilename);

const dist = new URL("dist/", root);
const tagsIndex = await readFile(new URL("tags/index.html", dist), "utf8");
for (const id of ids) {
  assert.equal((tagsIndex.match(new RegExp(`data-tag-id="${id}"`, "g")) ?? []).length, 1, `/tags/ must list ${id} exactly once`);
  assert(tagsIndex.includes(`href="${base}/tags/${id}/"`), `/tags/ link for ${id} is not base-aware`);
  const tagPage = await readFile(new URL(`tags/${id}/index.html`, dist), "utf8");
  const expected = frequency.get(id);
  assert(tagPage.includes(`${expected}件の論文`), `${id}: wrong paper count`);
  for (const post of posts.filter((post) => post.tags.includes(id))) {
    assert(tagPage.includes(`href="${base}${post.pathname}"`), `${id}: missing link to ${post.filename}`);
  }
}

const papersIndex = await readFile(new URL("papers/index.html", dist), "utf8");
assert(papersIndex.includes('name="tag"'), "/papers/ is missing the tag filter");
for (const post of posts) {
  const marker = `data-pathname="${post.pathname}"`;
  const start = papersIndex.indexOf(marker);
  assert(start >= 0, `${post.filename}: missing PaperCard`);
  const card = papersIndex.slice(start, papersIndex.indexOf("</article>", start));
  const expectedDataTags = post.tags.length ? `data-tags="${post.tags.join(" ")}"` : "data-tags";
  assert(card.includes(expectedDataTags), `${post.filename}: PaperCard data-tags mismatch`);
  const paperPage = await readFile(new URL(`${post.pathname.slice(1)}index.html`, dist), "utf8");
  for (const id of post.tags) assert(paperPage.includes(`href="${base}/tags/${id}/"`), `${post.filename}: missing individual-page tag link ${id}`);
  if (!post.tags.length) assert(!paperPage.includes('aria-label="タグ"'), `${post.filename}: zero-tag page renders tag UI`);
}

console.log(`Validated ${ids.length} tags, ${posts.length} current posts, ${total} current assignments, ${zero} current zero-tag posts, ${baseline.articles.length} protected Phase 5 baseline papers, and all generated tag links/pages.`);
