#!/usr/bin/env node
import assert from "node:assert/strict";
import { readFile, readdir, stat } from "node:fs/promises";
import matter from "gray-matter";
import { buildCanonicalAuthors, parseAuthorNames } from "../src/lib/author-core.mjs";

const files = (await readdir("_posts")).filter((name) => name.endsWith(".md")).sort();
const posts = await Promise.all(files.map(async (filename) => {
  const { data } = matter(await readFile(`_posts/${filename}`, "utf8"));
  return { filename, authors: parseAuthorNames(data.authors) };
}));
const identity = buildCanonicalAuthors(posts.flatMap(({ authors }) => authors));
const authorPapers = new Map([...identity.ids].map(([name, id]) => [id, { name, files: [] }]));
const papersIndex = await readFile("dist/papers/index.html", "utf8");
for (const post of posts) {
  const ids = post.authors.map((name) => identity.idFor(name));
  assert.equal(ids.length, new Set(ids).size, `${post.filename}: duplicate canonical author`);
  const [, year, month, day, slug] = post.filename.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)\.md$/);
  const html = await readFile(`dist/papers/${year}/${month}/${day}/${slug}/index.html`, "utf8");
  let paperPosition = -1; let cardPosition = -1;
  for (const id of ids) {
    const href = `/geometry-paper-digest/authors/${id}/`;
    const nextPaperPosition = html.indexOf(href, paperPosition + 1);
    const nextCardPosition = papersIndex.indexOf(href, cardPosition + 1);
    assert(nextPaperPosition > paperPosition, `${post.filename}: missing or out-of-order paper-to-author link ${id}`);
    assert(nextCardPosition > cardPosition, `${post.filename}: missing or out-of-order PaperCard author link ${id}`);
    paperPosition = nextPaperPosition; cardPosition = nextCardPosition;
    authorPapers.get(id).files.push(`/papers/${year}/${month}/${day}/${slug}/`);
  }
}
const index = await readFile("dist/authors/index.html", "utf8");
let previousIndexPosition = -1;
for (const [id, author] of [...authorPapers].sort((left, right) => left[1].name.localeCompare(right[1].name, "en") || left[0].localeCompare(right[0]))) {
  await stat(`dist/authors/${id}/index.html`);
  assert(index.includes(`/geometry-paper-digest/authors/${id}/`), `author index is missing ${id}`);
  assert.equal(index.split(`/geometry-paper-digest/authors/${id}/`).length - 1, 1, `author index contains ${id} more than once`);
  const indexPosition = index.indexOf(`/geometry-paper-digest/authors/${id}/`);
  assert(indexPosition > previousIndexPosition, `author index order is unstable near ${author.name}`);
  previousIndexPosition = indexPosition;
  const html = await readFile(`dist/authors/${id}/index.html`, "utf8");
  assert(html.includes(author.name), `${id}: display name is missing`);
  for (const pathname of author.files) assert(html.includes(`/geometry-paper-digest${pathname}`), `${id}: missing author-to-paper link ${pathname}`);
}
console.log(`Validated ${posts.length} papers and ${authorPapers.size} canonical author pages with bidirectional base-aware links.`);
