import test from "node:test";
import assert from "node:assert/strict";
import { filterAndSortPapers, readFilterState, stateToSearch } from "../../src/lib/paper-filters.mjs";

const papers = [
  { pathname: "/ag/", authorIds: ["alice"], topic: "ag", arxivSubmitted: "2025-01-02", siteDate: "2025-03-01" },
  { pathname: "/dg/", authorIds: ["bob", "alice"], topic: "dg", arxivSubmitted: "2026-02-03", siteDate: "2025-02-01" },
];
const baseState = { q: "", author: "all", topic: "all", year: "all", sort: "arxiv-newest" };
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
  const state = { q: "Chern 類", author: "alice", topic: "ag", year: "2025", sort: "site-newest" };
  assert.deepEqual(readFilterState(stateToSearch(state), ["all", "ag"], ["all", "2025"], ["all", "alice"]), state);
});
test("invalid query values fall back safely", () => {
  assert.deepEqual(readFilterState("?q=%20test%20&author=nope&topic=nope&year=x&sort=x", ["all", "ag"], ["all", "2025"]), { q: "test", author: "all", topic: "all", year: "all", sort: "arxiv-newest" });
});
test("combines author with q, topic, year, and sort", () => {
  const state = { q: "chern", author: "alice", topic: "ag", year: "2025", sort: "site-newest" };
  assert.deepEqual(filterAndSortPapers(papers, state, new Set(["/ag/", "/dg/"])).map((paper) => paper.pathname), ["/ag/"]);
  assert.equal(filterAndSortPapers(papers, { ...baseState, author: "bob" }).length, 1);
});
test("keeps a fixed topic when author filtering is applied", () => {
  const fixedTopicState = { ...baseState, author: "alice", topic: "ag", year: "2025", sort: "site-newest", q: "chern" };
  assert.deepEqual(filterAndSortPapers(papers, fixedTopicState, new Set(["/ag/", "/dg/"])).map(({ pathname }) => pathname), ["/ag/"]);
});
test("combines Pagefind matches with topic, year, and sort", () => {
  const matches = new Set(["/ag/", "/dg/"]);
  assert.deepEqual(filterAndSortPapers(papers, { q: "x", author: "all", topic: "ag", year: "2025", sort: "site-newest" }, matches).map((paper) => paper.pathname), ["/ag/"]);
  assert.equal(filterAndSortPapers(papers, { ...baseState, q: "x" }, new Set()).length, 0);
});
