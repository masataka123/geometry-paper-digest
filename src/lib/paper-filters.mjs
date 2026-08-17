export const DEFAULT_FILTER_STATE = Object.freeze({ topic: "", year: "", sort: "newest" });
export const SORT_VALUES = Object.freeze(["newest", "oldest", "added"]);

export function normalizeFilterState(search, topicSlugs, years) {
  const params = new URLSearchParams(search);
  const topic = topicSlugs.includes(params.get("topic")) ? params.get("topic") : "";
  const year = years.includes(params.get("year")) ? params.get("year") : "";
  const sort = SORT_VALUES.includes(params.get("sort")) ? params.get("sort") : "newest";
  return { topic, year, sort };
}

export function filterAndSortPapers(papers, state) {
  const direction = state.sort === "oldest" ? 1 : -1;
  return papers
    .filter((paper) => (!state.topic || paper.topic === state.topic) && (!state.year || paper.year === state.year))
    .sort((left, right) => {
      const leftDate = state.sort === "added" ? left.siteDate : left.arxivSubmitted;
      const rightDate = state.sort === "added" ? right.siteDate : right.arxivSubmitted;
      const byDate = leftDate.localeCompare(rightDate) * direction;
      return byDate || left.title.localeCompare(right.title, "en");
    });
}

export function filterStateSearch(state) {
  const params = new URLSearchParams();
  if (state.topic) params.set("topic", state.topic);
  if (state.year) params.set("year", state.year);
  params.set("sort", state.sort);
  return `?${params.toString()}`;
}

function readCard(element) {
  return {
    element,
    topic: element.dataset.topic || "",
    year: element.dataset.year || "",
    arxivSubmitted: element.dataset.arxivSubmitted || "",
    siteDate: element.dataset.siteDate || "",
    title: element.dataset.title || "",
  };
}

export function initPaperFilters(root = document, browserWindow = window) {
  const form = root.querySelector("[data-paper-filters]");
  const list = root.querySelector('[data-paper-list="filterable"]');
  if (!form || !list) return;

  const topicSelect = form.querySelector("[data-topic-filter]");
  const yearSelect = form.querySelector("[data-year-filter]");
  const sortSelect = form.querySelector("[data-sort-filter]");
  const count = form.querySelector("[data-result-count]");
  const empty = root.querySelector("[data-filter-empty]");
  const cards = [...list.querySelectorAll("[data-paper-card]")].map(readCard);
  const topicSlugs = [...topicSelect.options].map((option) => option.value).filter(Boolean);
  const years = [...yearSelect.options].map((option) => option.value).filter(Boolean);

  const render = (state) => {
    topicSelect.value = state.topic;
    yearSelect.value = state.year;
    sortSelect.value = state.sort;
    const visible = filterAndSortPapers(cards, state);
    const visibleElements = new Set(visible.map((paper) => paper.element));
    cards.forEach((paper) => { paper.element.hidden = !visibleElements.has(paper.element); });
    visible.forEach((paper) => list.append(paper.element));
    count.textContent = String(visible.length);
    empty.hidden = visible.length !== 0;
  };

  const stateFromLocation = () => normalizeFilterState(browserWindow.location.search, topicSlugs, years);
  const initialState = stateFromLocation();
  render(initialState);
  if (browserWindow.location.search !== filterStateSearch(initialState)) {
    browserWindow.history.replaceState(null, "", filterStateSearch(initialState));
  }

  form.addEventListener("change", () => {
    const state = normalizeFilterState(
      filterStateSearch({ topic: topicSelect.value, year: yearSelect.value, sort: sortSelect.value }),
      topicSlugs,
      years,
    );
    browserWindow.history.pushState(null, "", filterStateSearch(state));
    render(state);
  });
  browserWindow.addEventListener("popstate", () => render(stateFromLocation()));
}
