export const SORTS = ["arxiv-newest", "arxiv-oldest", "site-newest"];
export const DEFAULT_SORT = SORTS[0];

export function readFilterState(search, validTopics, validYears, validAuthors = ["all"], validTags = ["all"]) {
  const params = new URLSearchParams(search);
  const q = (params.get("q") ?? "").trim();
  const topic = validTopics.includes(params.get("topic")) ? params.get("topic") : "all";
  const year = validYears.includes(params.get("year")) ? params.get("year") : "all";
  const author = validAuthors.includes(params.get("author")) ? params.get("author") : "all";
  const tag = validTags.includes(params.get("tag")) ? params.get("tag") : "all";
  const sort = SORTS.includes(params.get("sort")) ? params.get("sort") : DEFAULT_SORT;
  return { q, author, tag, topic, year, sort };
}

export function filterAndSortPapers(papers, state, matchedPathnames = null) {
  return papers
    .filter((paper) => matchedPathnames === null || matchedPathnames.has(paper.pathname))
    .filter((paper) => state.author === "all" || paper.authorIds.includes(state.author))
    .filter((paper) => state.tag === "all" || paper.tags.includes(state.tag))
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
  if (state.author !== "all") params.set("author", state.author);
  if (state.tag !== "all") params.set("tag", state.tag);
  if (state.topic !== "all") params.set("topic", state.topic);
  if (state.year !== "all") params.set("year", state.year);
  if (state.sort !== DEFAULT_SORT) params.set("sort", state.sort);
  const query = params.toString();
  return query ? `?${query}` : "";
}
