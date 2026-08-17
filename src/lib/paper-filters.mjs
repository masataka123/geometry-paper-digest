export const SORTS = ["arxiv-newest", "arxiv-oldest", "site-newest"];
export const DEFAULT_SORT = SORTS[0];

export function readFilterState(search, validTopics, validYears) {
  const params = new URLSearchParams(search);
  const q = (params.get("q") ?? "").trim();
  const topic = validTopics.includes(params.get("topic")) ? params.get("topic") : "all";
  const year = validYears.includes(params.get("year")) ? params.get("year") : "all";
  const sort = SORTS.includes(params.get("sort")) ? params.get("sort") : DEFAULT_SORT;
  return { q, topic, year, sort };
}

export function filterAndSortPapers(papers, state, matchedPathnames = null) {
  return papers
    .filter((paper) => matchedPathnames === null || matchedPathnames.has(paper.pathname))
    .filter((paper) => state.topic === "all" || paper.topic === state.topic)
    .filter((paper) => state.year === "all" || paper.arxivSubmitted.startsWith(`${state.year}-`))
    .toSorted((left, right) => {
      if (state.sort === "arxiv-oldest") return left.arxivSubmitted.localeCompare(right.arxivSubmitted);
      if (state.sort === "site-newest") return right.siteDate.localeCompare(left.siteDate);
      return right.arxivSubmitted.localeCompare(left.arxivSubmitted);
    });
}

export function stateToSearch(state) {
  const params = new URLSearchParams();
  if (state.q?.trim()) params.set("q", state.q.trim());
  if (state.topic !== "all") params.set("topic", state.topic);
  if (state.year !== "all") params.set("year", state.year);
  if (state.sort !== DEFAULT_SORT) params.set("sort", state.sort);
  const query = params.toString();
  return query ? `?${query}` : "";
}
