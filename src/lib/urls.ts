const POST_FILENAME = /^(\d{4})-(\d{2})-(\d{2})-([a-z0-9]+(?:-[a-z0-9]+)*)\.md$/;

export interface PaperRoute {
  year: string;
  month: string;
  day: string;
  slug: string;
  pathname: string;
}

export function paperRouteFromFilename(filename: string): PaperRoute {
  const match = POST_FILENAME.exec(filename);
  if (!match) {
    throw new Error(`Invalid post filename: ${filename}`);
  }
  const [, year, month, day, slug] = match;
  return {
    year,
    month,
    day,
    slug,
    pathname: `/papers/${year}/${month}/${day}/${slug}/`,
  };
}

export function withBase(pathname: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${base}${path}`;
}

export function topicPath(slug: string): string {
  return `/topics/${slug}.html`;
}
