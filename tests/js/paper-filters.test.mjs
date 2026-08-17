import assert from "node:assert/strict";
import test from "node:test";

import {
  filterAndSortPapers,
  filterStateSearch,
  normalizeFilterState,
} from "../../src/lib/paper-filters.mjs";

const papers = [
  { title: "B", topic: "algebraic-geometry", year: "2026", arxivSubmitted: "2026-08-01", siteDate: "2026-08-03" },
  { title: "A", topic: "algebraic-geometry", year: "2025", arxivSubmitted: "2025-02-01", siteDate: "2026-08-04" },
  { title: "C", topic: "differential-geometry", year: "2026", arxivSubmitted: "2026-07-01", siteDate: "2026-08-05" },
];
const topics = ["algebraic-geometry", "differential-geometry"];
const years = ["2026", "2025"];

test("restores valid topic, year, and sort query parameters", () => {
  assert.deepEqual(
    normalizeFilterState("?topic=algebraic-geometry&year=2026&sort=oldest", topics, years),
    { topic: "algebraic-geometry", year: "2026", sort: "oldest" },
  );
});

test("invalid query parameters safely return defaults", () => {
  assert.deepEqual(
    normalizeFilterState("?topic=unknown&year=1900&sort=random", topics, years),
    { topic: "", year: "", sort: "newest" },
  );
});

test("topic and year filters combine", () => {
  const result = filterAndSortPapers(papers, { topic: "algebraic-geometry", year: "2026", sort: "newest" });
  assert.deepEqual(result.map((paper) => paper.title), ["B"]);
});

test("a valid combination can return zero papers", () => {
  const result = filterAndSortPapers(papers, { topic: "differential-geometry", year: "2025", sort: "newest" });
  assert.deepEqual(result, []);
});

test("sort modes order by arXiv or site-added date", () => {
  assert.deepEqual(filterAndSortPapers(papers, { topic: "", year: "", sort: "newest" }).map((p) => p.title), ["B", "C", "A"]);
  assert.deepEqual(filterAndSortPapers(papers, { topic: "", year: "", sort: "oldest" }).map((p) => p.title), ["A", "C", "B"]);
  assert.deepEqual(filterAndSortPapers(papers, { topic: "", year: "", sort: "added" }).map((p) => p.title), ["C", "A", "B"]);
});

test("serializes filter state into bookmarkable query parameters", () => {
  assert.equal(
    filterStateSearch({ topic: "algebraic-geometry", year: "2026", sort: "newest" }),
    "?topic=algebraic-geometry&year=2026&sort=newest",
  );
});
