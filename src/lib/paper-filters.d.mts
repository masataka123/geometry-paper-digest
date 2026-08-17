export interface FilterState { q: string; author: string; topic: string; year: string; sort: string; }
export interface FilterPaper { pathname: string; authorIds: string[]; topic: string; arxivSubmitted: string; siteDate: string; }
export const SORTS: string[];
export const DEFAULT_SORT: string;
export function readFilterState(search: string, validTopics: string[], validYears: string[], validAuthors?: string[]): FilterState;
export function filterAndSortPapers<T extends FilterPaper>(papers: T[], state: FilterState, matchedPathnames?: Set<string> | null): T[];
export function stateToSearch(state: FilterState): string;
