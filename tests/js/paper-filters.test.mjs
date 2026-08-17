import test from "node:test";
import assert from "node:assert/strict";
import { filterAndSortPapers, readFilterState, stateToSearch } from "../../src/lib/paper-filters.mjs";

const papers = [
  { topic: "ag", arxivSubmitted: "2025-01-02", siteDate: "2025-03-01" },
  { topic: "dg", arxivSubmitted: "2026-02-03", siteDate: "2025-02-01" },
];
test("filters by topic and year, including zero results", () => {
  assert.equal(filterAndSortPapers(papers, { topic: "ag", year: "2025", sort: "arxiv-newest" }).length, 1);
  assert.equal(filterAndSortPapers(papers, { topic: "dg", year: "2025", sort: "arxiv-newest" }).length, 0);
});
test("supports all three sorts", () => {
  assert.equal(filterAndSortPapers(papers, { topic: "all", year: "all", sort: "arxiv-newest" })[0].topic, "dg");
  assert.equal(filterAndSortPapers(papers, { topic: "all", year: "all", sort: "arxiv-oldest" })[0].topic, "ag");
  assert.equal(filterAndSortPapers(papers, { topic: "all", year: "all", sort: "site-newest" })[0].topic, "ag");
});
test("round trips valid query state", () => {
  const state = { topic: "ag", year: "2025", sort: "site-newest" };
  assert.deepEqual(readFilterState(stateToSearch(state), ["all", "ag"], ["all", "2025"]), state);
});
test("invalid query values fall back safely", () => {
  assert.deepEqual(readFilterState("?topic=nope&year=x&sort=x", ["all", "ag"], ["all", "2025"]), { topic: "all", year: "all", sort: "arxiv-newest" });
});
