import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

import { load, JSON_SCHEMA } from "js-yaml";

export interface Topic {
  slug: string;
  arxivCategory: string;
  title: string;
  english: string;
  description: string;
}

function text(value: unknown, field: string): string {
  if (typeof value !== "string" || value.length === 0) {
    throw new Error(`Topic field ${field} must be a non-empty string`);
  }
  return value;
}

export async function getTopics(): Promise<Topic[]> {
  const path = fileURLToPath(new URL("../../_data/topics.yml", import.meta.url));
  const parsed: unknown = load(await readFile(path, "utf8"), { schema: JSON_SCHEMA });
  if (!Array.isArray(parsed)) {
    throw new Error("_data/topics.yml must contain a list");
  }
  return parsed.map((item) => {
    if (!item || typeof item !== "object") {
      throw new Error("Each topic must be an object");
    }
    const topic = item as Record<string, unknown>;
    return {
      slug: text(topic.slug, "slug"),
      arxivCategory: text(topic.arxiv_category, "arxiv_category"),
      title: text(topic.title, "title"),
      english: text(topic.english, "english"),
      description: text(topic.description, "description"),
    };
  });
}
