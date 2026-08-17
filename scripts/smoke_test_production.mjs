#!/usr/bin/env node
import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import matter from "gray-matter";
import { load, JSON_SCHEMA } from "js-yaml";
import { buildCanonicalAuthors, parseAuthorNames } from "../src/lib/author-core.mjs";

const root = new URL("../", import.meta.url);
const defaultOrigin = "https://masataka123.github.io/geometry-paper-digest/";
const option = process.argv.indexOf("--base-url");
const baseUrl = new URL(option >= 0 ? process.argv[option + 1] : defaultOrigin);
assert(baseUrl.pathname.endsWith("/"), "--base-url must end in / ");

const filenames = (await readdir(new URL("_posts/", root))).filter((name) => name.endsWith(".md")).sort();
assert(filenames.length, "no paper fixture is available");
const postData = await Promise.all(filenames.map(async (filename) => ({
  filename,
  data: matter(await readFile(new URL(`_posts/${filename}`, root), "utf8")).data,
})));
const representative = postData[0].filename;
const match = representative.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)\.md$/);
const identity = buildCanonicalAuthors(postData.flatMap(({ data }) => parseAuthorNames(data.authors)));
const firstAuthor = parseAuthorNames(postData[0].data.authors)[0];
const authorId = identity.idFor(firstAuthor);
const topics = load(await readFile(new URL("_data/topics.yml", root), "utf8"), { schema: JSON_SCHEMA });
const tags = load(await readFile(new URL("_data/tags.yml", root), "utf8"), { schema: JSON_SCHEMA });

const checks = [
  ["home", ""], ["papers", "papers/"],
  ["paper", `papers/${match[1]}/${match[2]}/${match[3]}/${match[4]}/`],
  ["topic", `topics/${topics[0].slug}.html`], ["legacy topic", "topics/complex-geometry.html"],
  ["authors", "authors/"], ["author", `authors/${authorId}/`],
  ["tags", "tags/"], ["tag", `tags/${tags[0].id}/`],
  ["Pagefind", "pagefind/pagefind.js"],
];
for (const [label, relative] of checks) {
  const url = new URL(relative, baseUrl);
  const response = await fetch(url, { redirect: "follow" });
  assert.equal(response.status, 200, `${label}: ${url} returned ${response.status}`);
  const body = await response.arrayBuffer();
  assert(body.byteLength > 0, `${label}: ${url} returned an empty body`);
  console.log(`ok ${label}: ${url}`);
}
console.log(`Production smoke test passed for ${checks.length} URLs under ${baseUrl}`);
