export interface FilterState { topic: string; year: string; sort: string; }
export interface FilterPaper { topic: string; arxivSubmitted: string; siteDate: string; }
export const SORTS: string[];
export const DEFAULT_SORT: string;
export function readFilterState(search: string, validTopics: string[], validYears: string[]): FilterState;
export function filterAndSortPapers<T extends FilterPaper>(papers: T[], state: FilterState): T[];
export function stateToSearch(state: FilterState): string;
