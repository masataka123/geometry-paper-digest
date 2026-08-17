#!/usr/bin/env node
import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";

import matter from "gray-matter";

const root = new URL("../", import.meta.url);
const nativeFetch = globalThis.fetch;
globalThis.fetch = async (input, init) => {
  const url = new URL(input instanceof Request ? input.url : String(input));
  if (url.protocol !== "file:") return nativeFetch(input, init);
  return new Response(await readFile(fileURLToPath(url)));
};

const pagefind = await import(new URL("dist/pagefind/pagefind.js", root));
const homeHtml = await readFile(new URL("dist/index.html", root), "utf8");
const baseUrl = homeHtml.match(/<html[^>]+data-base-url="([^"]+)"/)?.[1];
assert(baseUrl, "generated HTML does not expose Astro's base URL");
await pagefind.options({ baseUrl });
await pagefind.init();
const postsDirectory = new URL("_posts/", root);
const filenames = (await readdir(postsDirectory)).filter((name) => name.endsWith(".md")).sort();
const posts = await Promise.all(filenames.map(async (filename) => {
  const { data } = matter(await readFile(new URL(filename, postsDirectory), "utf8"));
  const [, year, month, day, slug] = filename.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)\.md$/);
  return { filename, pathname: `/papers/${year}/${month}/${day}/${slug}/`, data };
}));

async function results(query) {
  const response = await pagefind.search(query, { match: "all" });
  return Promise.all(response.results.map((result) => result.data()));
}

for (const post of posts) {
  const matches = await results(String(post.data.arxiv_id).replace(/v\d+$/, ""));
  const paths = matches.map((match) => match.meta.pathname);
  assert(paths.includes(post.pathname), `${post.filename}: arXiv ID did not find its paper`);
  assert.equal(paths.filter((path) => path === post.pathname).length, 1, `${post.filename}: paper is duplicated in results`);
  assert(matches.some((match) => match.url === `${baseUrl.replace(/\/$/, "")}${post.pathname}`), `${post.filename}: result URL is not base-aware`);
}

const cases = [
  ["English title", "Analytic Bertini theorem II", "/papers/2026/08/06/analytic-bertini-local/"],
  ["Japanese title", "解析的Bertini定理", "/papers/2026/08/06/analytic-bertini-local/"],
  ["author", "Mingchen Xia", "/papers/2026/08/06/analytic-bertini-local/"],
  ["English abstract", "confirming a conjecture of Boucksom", "/papers/2026/08/06/analytic-bertini-local/"],
  ["English summary", "fixed-dimensional K-polystable toric", "/papers/2026/08/17/alpha-spectrum-toric-fano/"],
  ["Japanese summary", "多重劣調和関数の乗数イデアル", "/papers/2026/08/06/analytic-bertini-local/"],
  ["Japanese Markdown body", "例外パラメータ", "/papers/2026/08/06/analytic-bertini-local/"],
  ["arXiv ID", "2608.14115", "/papers/2026/08/17/alpha-spectrum-toric-fano/"],
];
for (const [label, query, pathname] of cases) {
  const matches = await results(query);
  assert(matches.some((match) => match.meta.pathname === pathname), `${label} query ${JSON.stringify(query)} missed ${pathname}`);
}
assert.equal((await results("龘靐齉")).length, 0, "nonexistent query returned results");

console.log(`Pagefind indexed ${posts.length} papers as one result per paper; ${cases.length} real-content searches and the zero-result case passed.`);
