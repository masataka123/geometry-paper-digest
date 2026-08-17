import { buildCanonicalAuthors, parseAuthorNames } from "./author-core.mjs";
import { getPapers, type Paper } from "./posts";

export interface PaperAuthor { id: string; displayName: string; }
export interface Author extends PaperAuthor { aliases: string[]; papers: Paper[]; paperCount: number; }

let cache: Promise<{ authors: Author[]; byPaper: Map<string, PaperAuthor[]> }> | undefined;
export async function buildAuthorIndex(papers: Paper[], identityOverrides: Record<string, string> = {}) {
    const parsed = new Map(papers.map((paper) => [paper.filename, parseAuthorNames(paper.metadata.authors)]));
    const occurrences = papers.flatMap((paper) => parsed.get(paper.filename)!.map((name, index) => ({ name, occurrence: `${paper.filename}#${index + 1}` })));
    const unknownOverrides = new Set(Object.keys(identityOverrides));
    const requestedIdentityKeys = occurrences.map(({ occurrence }) => { unknownOverrides.delete(occurrence); return identityOverrides[occurrence] || ""; });
    if (unknownOverrides.size) throw new Error(`Unknown author identity override(s): ${[...unknownOverrides].join(", ")}`);
    const names = occurrences.map(({ name }) => name);
    // Aliases merge documented name variants; occurrence overrides separately split documented homonyms.
    const identity = buildCanonicalAuthors(names, {}, requestedIdentityKeys);
    const identityKeys = identity.occurrenceIdentityKeys;
    const byPaper = new Map<string, PaperAuthor[]>();
    const papersByIdentity = new Map<string, Paper[]>();
    let occurrenceIndex = 0;
    for (const paper of papers) {
      const seen = new Set<string>();
      const paperAuthors = parsed.get(paper.filename)!.map((name) => {
        const identityKey = identityKeys[occurrenceIndex++];
        const displayName = identity.canonicalFor(name); const id = identity.idFor(name, identityKey)!;
        if (seen.has(id)) throw new Error(`${paper.filename}: duplicate canonical author ${displayName}`);
        seen.add(id); papersByIdentity.set(identityKey, [...(papersByIdentity.get(identityKey) ?? []), paper]);
        return { id, displayName };
      });
      byPaper.set(paper.filename, paperAuthors);
    }
    const authors = [...identity.identities].map(([identityKey, displayName]) => {
      const authorPapers = papersByIdentity.get(identityKey) ?? [];
      return { id: identity.ids.get(identityKey)!, displayName, aliases: names.filter((name) => identity.canonicalFor(name) === displayName && name !== displayName), papers: authorPapers, paperCount: authorPapers.length };
    }).sort((a, b) => a.displayName.localeCompare(b.displayName, "en") || a.id.localeCompare(b.id));
    return { authors, byPaper };
}

export function getAuthorIndex() {
  if (!cache) cache = (async () => {
    const papers = await getPapers();
    return buildAuthorIndex(papers);
  })();
  return cache;
}
