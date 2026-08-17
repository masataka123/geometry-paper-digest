import { readFile, readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";

import matter from "gray-matter";
import { load, JSON_SCHEMA } from "js-yaml";
import MarkdownIt from "markdown-it";

import { paperRouteFromFilename, type PaperRoute } from "./urls";

export interface PaperMetadata {
  layout: string;
  title: string;
  titleJa: string;
  authors: string;
  arxivPrimaryCategory: string;
  arxivCategories: string[];
  topic: string;
  arxivId: string;
  arxivUrl: string;
  arxivSubmitted: string;
  arxivUpdated: string;
  summary: string;
  abstractEn: string;
  summaryEn: string;
  abstractJa: string;
  abstractSourceUrl: string;
  licenseName: string;
  licenseUrl: string;
  articleMode: string;
  sourceScope: string;
  published: boolean;
  digestPdf: string;
}

export interface Paper {
  filename: string;
  route: PaperRoute;
  date: string;
  metadata: PaperMetadata;
  bodyMarkdown: string;
  bodyHtml: string;
}

const markdown = new MarkdownIt({
  html: true,
  linkify: false,
  typographer: false,
});

function stringValue(data: Record<string, unknown>, key: string): string {
  const value = data[key];
  if (value === null || value === undefined) return "";
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return typeof value === "string" ? value : String(value);
}

function stringList(data: Record<string, unknown>, key: string): string[] {
  const value = data[key];
  if (!Array.isArray(value)) return [];
  return value.map((item) => (item instanceof Date ? item.toISOString().slice(0, 10) : String(item)));
}

function normalizeMetadata(data: Record<string, unknown>): PaperMetadata {
  return {
    layout: stringValue(data, "layout"),
    title: stringValue(data, "title"),
    titleJa: stringValue(data, "title_ja"),
    authors: stringValue(data, "authors"),
    arxivPrimaryCategory: stringValue(data, "arxiv_primary_category"),
    arxivCategories: stringList(data, "arxiv_categories"),
    topic: stringValue(data, "topic"),
    arxivId: stringValue(data, "arxiv_id"),
    arxivUrl: stringValue(data, "arxiv_url"),
    arxivSubmitted: stringValue(data, "arxiv_submitted"),
    arxivUpdated: stringValue(data, "arxiv_updated"),
    summary: stringValue(data, "summary"),
    abstractEn: stringValue(data, "abstract_en"),
    summaryEn: stringValue(data, "summary_en"),
    abstractJa: stringValue(data, "abstract_ja"),
    abstractSourceUrl: stringValue(data, "abstract_source_url"),
    licenseName: stringValue(data, "license_name"),
    licenseUrl: stringValue(data, "license_url"),
    articleMode: stringValue(data, "article_mode"),
    sourceScope: stringValue(data, "source_scope"),
    published: data.published === true,
    digestPdf: stringValue(data, "digest_pdf"),
  };
}

async function readPaper(postsDirectory: string, filename: string): Promise<Paper> {
  const source = await readFile(`${postsDirectory}/${filename}`, "utf8");
  const parsed = matter(source, {
    engines: {
      yaml: (input) => load(input, { schema: JSON_SCHEMA }) as Record<string, unknown>,
    },
  });
  const route = paperRouteFromFilename(filename);
  return {
    filename,
    route,
    date: `${route.year}-${route.month}-${route.day}`,
    metadata: normalizeMetadata(parsed.data),
    bodyMarkdown: parsed.content,
    bodyHtml: markdown.render(parsed.content),
  };
}

let paperCache: Promise<Paper[]> | undefined;

export function getPapers(): Promise<Paper[]> {
  if (!paperCache) {
    paperCache = (async () => {
      const postsDirectory = fileURLToPath(new URL("../../_posts", import.meta.url));
      const filenames = (await readdir(postsDirectory))
        .filter((name) => name.endsWith(".md"))
        .sort();
      return Promise.all(filenames.map((filename) => readPaper(postsDirectory, filename)));
    })();
  }
  return paperCache;
}
