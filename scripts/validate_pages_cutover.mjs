#!/usr/bin/env node
import assert from "node:assert/strict";
import { lstat, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { load, JSON_SCHEMA } from "js-yaml";
import { buildCanonicalAuthors, parseAuthorNames } from "../src/lib/author-core.mjs";

const root = new URL("../", import.meta.url);
const dist = new URL("dist/", root);
const base = "/geometry-paper-digest";

async function exists(relative) {
  try { await lstat(new URL(relative, dist)); return true; } catch { return false; }
}
function outputPath(pathname) {
  if (pathname === "/") return "index.html";
  return pathname.endsWith(".html") ? pathname.slice(1) : `${pathname.slice(1).replace(/\/$/, "")}/index.html`;
}
async function requireRoute(pathname, label) {
  assert(await exists(outputPath(pathname)), `${label} route is missing: ${pathname}`);
}

assert(await exists("index.html"), "dist does not contain an Astro build");
const postFiles = (await readdir(new URL("_posts/", root))).filter((name) => name.endsWith(".md")).sort();
const posts = await Promise.all(postFiles.map(async (filename) => {
  const { data } = matter(await readFile(new URL(`_posts/${filename}`, root), "utf8"));
  const match = filename.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)\.md$/);
  assert(match, `invalid post filename: ${filename}`);
  return { filename, data, pathname: `/papers/${match[1]}/${match[2]}/${match[3]}/${match[4]}/` };
}));
assert.equal(new Set(posts.map(({ pathname }) => pathname)).size, posts.length, "duplicate paper routes");
await requireRoute("/", "home");
await requireRoute("/papers/", "papers index");
for (const post of posts) await requireRoute(post.pathname, post.filename);

const topics = load(await readFile(new URL("_data/topics.yml", root), "utf8"), { schema: JSON_SCHEMA });
for (const topic of topics) await requireRoute(`/topics/${topic.slug}.html`, `topic ${topic.slug}`);
await requireRoute("/topics/complex-geometry.html", "legacy complex geometry topic");

const names = posts.flatMap(({ data }) => parseAuthorNames(data.authors));
const authorIds = [...buildCanonicalAuthors(names).ids.values()].sort();
await requireRoute("/authors/", "authors index");
for (const id of authorIds) await requireRoute(`/authors/${id}/`, `author ${id}`);

const tags = load(await readFile(new URL("_data/tags.yml", root), "utf8"), { schema: JSON_SCHEMA });
await requireRoute("/tags/", "tags index");
for (const tag of tags) await requireRoute(`/tags/${tag.id}/`, `tag ${tag.id}`);

assert(await exists("pagefind/pagefind.js"), "Pagefind JavaScript is missing");
const pagefindFiles = await readdir(new URL("pagefind/", dist));
assert(pagefindFiles.some((name) => name.endsWith(".wasm") || /^wasm\..+\.pagefind$/.test(name)), "Pagefind WASM payload is missing");

async function walk(directory, relative = "") {
  const files = [];
  for (const name of await readdir(directory)) {
    const child = new URL(`${name}${name.endsWith("/") ? "" : ""}`, directory);
    const childRelative = path.posix.join(relative, name);
    const info = await lstat(child);
    assert(!info.isSymbolicLink(), `deploy artifact contains a symlink: ${childRelative}`);
    if (info.isDirectory()) files.push(...await walk(new URL(`${name}/`, directory), childRelative));
    else files.push(childRelative);
  }
  return files;
}
const artifactFiles = await walk(dist);
const htmlFiles = artifactFiles.filter((name) => name.endsWith(".html"));
const forbiddenRootPath = /(?:href|src)=["']\/(?!geometry-paper-digest(?:\/|["']))(?!\/)/;
for (const filename of htmlFiles) {
  const html = await readFile(new URL(filename, dist), "utf8");
  assert(!forbiddenRootPath.test(html), `${filename}: root-relative link or asset omits ${base}`);
}
const home = await readFile(new URL("index.html", dist), "utf8");
assert(home.includes(`data-base-url="${base}/"`), "Astro base URL marker is wrong");
assert(home.includes(`${base}/_astro/`), "base-aware Astro CSS/JavaScript asset is missing");
assert(home.includes("mathjax@3"), "MathJax 3 marker is missing");
const papersIndex = await readFile(new URL("papers/index.html", dist), "utf8");
assert(papersIndex.includes("data-filter-bar"), "papers index search controls are missing");
const scripts = await Promise.all(artifactFiles.filter((name) => name.endsWith(".js")).map((name) => readFile(new URL(name, dist), "utf8")));
assert(scripts.some((source) => source.includes("pagefind/pagefind.js") && source.includes("documentElement.dataset.baseUrl")), "Pagefind dynamic import is missing from the base-aware client bundle");

console.log(`Pages cutover preflight passed: ${posts.length} papers, ${topics.length + 1} topic files, ${authorIds.length} authors, ${tags.length} tags, and ${artifactFiles.length} regular artifact files.`);
