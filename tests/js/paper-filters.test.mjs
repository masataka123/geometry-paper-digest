import test from "node:test";
import assert from "node:assert/strict";
import { filterAndSortPapers, normalizeSearchQuery, readFilterState, stateToSearch } from "../../src/lib/paper-filters.mjs";

const papers = [
  { pathname: "/ag/", authorIds: ["alice"], tags: ["chern"], topic: "ag", arxivSubmitted: "2025-01-02", siteDate: "2025-03-01" },
  { pathname: "/dg/", authorIds: ["bob", "alice"], tags: ["metrics"], topic: "dg", arxivSubmitted: "2026-02-03", siteDate: "2025-02-01" },
];
const baseState = { q: "", author: "all", tag: "all", topic: "all", year: "all", month: "all", sort: "arxiv-newest" };
test("filters by topic and year, including zero results", () => {
  assert.equal(filterAndSortPapers(papers, { ...baseState, topic: "ag", year: "2025" }).length, 1);
  assert.equal(filterAndSortPapers(papers, { ...baseState, topic: "dg", year: "2025" }).length, 0);
});
test("supports all three sorts", () => {
  assert.equal(filterAndSortPapers(papers, baseState)[0].topic, "dg");
  assert.equal(filterAndSortPapers(papers, { ...baseState, sort: "arxiv-oldest" })[0].topic, "ag");
  assert.equal(filterAndSortPapers(papers, { ...baseState, sort: "site-newest" })[0].topic, "ag");
});
test("round trips valid query state", () => {
  const state = { q: "Chern 類", author: "alice", tag: "chern", topic: "ag", year: "2025", month: "01", sort: "site-newest" };
  assert.deepEqual(readFilterState(stateToSearch(state), ["all", "ag"], ["all", "2025"], ["all", "alice"], ["all", "chern"]), state);
});
test("invalid query values fall back safely", () => {
  assert.deepEqual(readFilterState("?q=%20test%20&author=nope&topic=nope&year=x&sort=x", ["all", "ag"], ["all", "2025"]), { q: "test", author: "all", tag: "all", topic: "all", year: "all", month: "all", sort: "arxiv-newest" });
});
test("combines author with q, topic, year, and sort", () => {
  const state = { q: "chern", author: "alice", tag: "chern", topic: "ag", year: "2025", month: "01", sort: "site-newest" };
  assert.deepEqual(filterAndSortPapers(papers, state, new Set(["/ag/", "/dg/"])).map((paper) => paper.pathname), ["/ag/"]);
  assert.equal(filterAndSortPapers(papers, { ...baseState, author: "bob" }).length, 1);
});
test("keeps a fixed topic when author filtering is applied", () => {
  const fixedTopicState = { ...baseState, author: "alice", topic: "ag", year: "2025", month: "01", sort: "site-newest", q: "chern" };
  assert.deepEqual(filterAndSortPapers(papers, fixedTopicState, new Set(["/ag/", "/dg/"])).map(({ pathname }) => pathname), ["/ag/"]);
});
test("combines Pagefind matches with topic, year, and sort", () => {
  const matches = new Set(["/ag/", "/dg/"]);
  assert.deepEqual(filterAndSortPapers(papers, { q: "x", author: "all", tag: "all", topic: "ag", year: "2025", month: "01", sort: "site-newest" }, matches).map((paper) => paper.pathname), ["/ag/"]);
  assert.equal(filterAndSortPapers(papers, { ...baseState, q: "x" }, new Set()).length, 0);
});

test("filters by tag and supports zero results", () => {
  assert.deepEqual(filterAndSortPapers(papers, { ...baseState, tag: "chern" }).map(({ pathname }) => pathname), ["/ag/"]);
  assert.equal(filterAndSortPapers(papers, { ...baseState, tag: "missing" }).length, 0);
});
test("combines tag with q, author, topic, year, and sort", () => {
  const state = { q: "chern", author: "alice", tag: "chern", topic: "ag", year: "2025", month: "01", sort: "site-newest" };
  assert.deepEqual(filterAndSortPapers(papers, state, new Set(["/ag/", "/dg/"])).map(({ pathname }) => pathname), ["/ag/"]);
});
test("invalid tag falls back and valid tag round trips", () => {
  assert.equal(readFilterState("?tag=nope", ["all", "ag"], ["all", "2025"], ["all", "alice"], ["all", "chern"]).tag, "all");
  assert.equal(new URLSearchParams(stateToSearch({ ...baseState, tag: "chern" })).get("tag"), "chern");
});
test("keeps a fixed topic when tag filtering is applied", () => {
  assert.deepEqual(filterAndSortPapers(papers, { ...baseState, tag: "chern", topic: "ag" }).map(({ pathname }) => pathname), ["/ag/"]);
});

test("invalid dimensions do not erase independently valid dimensions", () => {
  const topics = ["all", "ag"];
  const years = ["all", "2025"];
  const authors = ["all", "alice"];
  const tags = ["all", "chern"];
  assert.deepEqual(readFilterState("?author=nope&tag=chern&topic=ag&year=2025", topics, years, authors, tags), { ...baseState, author: "all", tag: "chern", topic: "ag", year: "2025" });
  assert.deepEqual(readFilterState("?author=alice&tag=nope&topic=ag", topics, years, authors, tags), { ...baseState, author: "alice", tag: "all", topic: "ag" });
  assert.deepEqual(readFilterState("?author=alice&tag=chern&topic=nope", topics, years, authors, tags), { ...baseState, author: "alice", tag: "chern", topic: "all" });
});

test("clearing q or tag removes only that parameter", () => {
  const state = { q: "chern", author: "alice", tag: "chern", topic: "ag", year: "2025", month: "01", sort: "site-newest" };
  const noTag = new URLSearchParams(stateToSearch({ ...state, tag: "all" }));
  assert.equal(noTag.has("tag"), false); assert.equal(noTag.get("q"), "chern"); assert.equal(noTag.get("author"), "alice");
  const noQuery = new URLSearchParams(stateToSearch({ ...state, q: "" }));
  assert.equal(noQuery.has("q"), false); assert.equal(noQuery.get("tag"), "chern"); assert.equal(noQuery.get("topic"), "ag");
});

test("fixed topic remains authoritative with every other filter", () => {
  const state = { q: "chern", author: "alice", tag: "chern", topic: "ag", year: "2025", month: "01", sort: "site-newest" };
  assert.deepEqual(filterAndSortPapers(papers, state, new Set(["/ag/", "/dg/"])).map(({ pathname }) => pathname), ["/ag/"]);
});

test("filters by month alone and with every other dimension", () => {
  assert.deepEqual(filterAndSortPapers(papers, { ...baseState, month: "02" }).map(({ pathname }) => pathname), ["/dg/"]);
  assert.deepEqual(filterAndSortPapers(papers, { ...baseState, year: "2026", month: "02" }).map(({ pathname }) => pathname), ["/dg/"]);
  for (const partial of [{ tag: "metrics" }, { author: "bob" }, { topic: "dg" }, { q: "Einstein" }]) {
    assert.deepEqual(filterAndSortPapers(papers, { ...baseState, ...partial, month: "02" }, partial.q ? new Set(["/dg/"]) : null).map(({ pathname }) => pathname), ["/dg/"]);
  }
  assert.equal(filterAndSortPapers(papers, { ...baseState, month: "02", sort: "site-newest" })[0].pathname, "/dg/");
});

test("invalid month becomes all and clearing month preserves other parameters", () => {
  assert.equal(readFilterState("?month=13&tag=chern", ["all"], ["all"], ["all"], ["all", "chern"]).month, "all");
  const params = new URLSearchParams(stateToSearch({ ...baseState, q: "chern", tag: "chern", month: "all" }));
  assert.equal(params.has("month"), false);
  assert.equal(params.get("q"), "chern");
  assert.equal(params.get("tag"), "chern");
});

test("normalizes whitespace, Unicode composition, and dash variants without fuzzy matching", () => {
  assert.equal(normalizeSearchQuery("  Monge\tAmpere  "), "Monge Ampere");
  assert.equal(normalizeSearchQuery("Monge–Ampère"), "Monge Ampère");
  assert.equal(normalizeSearchQuery("Ka\u0308hler-Einstein"), "Kähler Einstein");
});
