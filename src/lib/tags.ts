import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

import { load, JSON_SCHEMA } from "js-yaml";

import type { Paper } from "./posts";
import { withBase } from "./urls";

export interface Tag {
  id: string;
  name: string;
  nameJa: string;
  description: string;
  searchAliases: string[];
}

export interface TagWithPapers extends Tag {
  papers: Paper[];
  paperCount: number;
}

const TAG_ID = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
let cache: Promise<Tag[]> | undefined;

function requiredText(value: unknown, field: string, id = "unknown"): string {
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`Tag ${id} field ${field} must be a non-empty string`);
  }
  return value;
}

export function getTags(): Promise<Tag[]> {
  if (!cache) {
    cache = (async () => {
      const path = fileURLToPath(new URL("../../_data/tags.yml", import.meta.url));
      const parsed: unknown = load(await readFile(path, "utf8"), { schema: JSON_SCHEMA });
      if (!Array.isArray(parsed)) throw new Error("_data/tags.yml must contain a list");
      const tags = parsed.map((item) => {
        if (!item || typeof item !== "object") throw new Error("Each tag must be an object");
        const data = item as Record<string, unknown>;
        const id = requiredText(data.id, "id");
        if (!TAG_ID.test(id)) throw new Error(`Invalid tag ID: ${id}`);
        return {
          id,
          name: requiredText(data.name, "name", id),
          nameJa: requiredText(data.name_ja, "name_ja", id),
          description: requiredText(data.description, "description", id),
          searchAliases: Array.isArray(data.search_aliases) ? data.search_aliases.map((alias) => requiredText(alias, "search_aliases", id)) : [],
        };
      });
      if (tags.length !== 37) throw new Error(`Expected 37 tags, found ${tags.length}`);
      if (new Set(tags.map(({ id }) => id)).size !== tags.length) throw new Error("Duplicate tag ID in taxonomy");
      return tags;
    })();
  }
  return cache;
}

export async function resolveTagIds(ids: string[]): Promise<Tag[]> {
  const tags = await getTags();
  const requested = new Set(ids);
  const known = new Set(tags.map((tag) => tag.id));
  const unknown = ids.filter((id) => !known.has(id));
  if (unknown.length) throw new Error(`Unknown tag ID(s): ${unknown.join(", ")}`);
  // Display is stable in taxonomy order; front-matter order is not identity.
  return tags.filter((tag) => requested.has(tag.id));
}

export async function buildTagIndex(papers: Paper[]): Promise<TagWithPapers[]> {
  return (await getTags()).map((tag) => {
    const taggedPapers = papers
      .filter((paper) => paper.metadata.tags.includes(tag.id))
      .toSorted((left, right) => right.metadata.arxivSubmitted.localeCompare(left.metadata.arxivSubmitted));
    return { ...tag, papers: taggedPapers, paperCount: taggedPapers.length };
  });
}

export function tagPath(id: string): string {
  return `/tags/${id}/`;
}

export function tagUrl(id: string): string {
  return withBase(tagPath(id));
}
