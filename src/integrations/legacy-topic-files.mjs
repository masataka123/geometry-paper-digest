import { readdir, rename, rm } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

/**
 * Astro's directory-format builder treats a route ending in `.html` as a
 * directory. Jekyll's public contract requires literal topic `.html` files,
 * while paper routes require directory indexes. Topic routes are generated
 * from `_data/topics.yml` by the topic page; discover those generated routes
 * here instead of maintaining a second list of topic slugs. The separately
 * generated complex-geometry compatibility route follows the same convention.
 */
export default function legacyTopicFiles() {
  return {
    name: "geometry-paper-digest-legacy-topic-files",
    hooks: {
      "astro:build:done": async ({ dir }) => {
        const outputDirectory = fileURLToPath(dir);
        const topicsDirectory = join(outputDirectory, "topics");
        const topicRoutes = (await readdir(topicsDirectory, { withFileTypes: true }))
          .filter((entry) => entry.isDirectory() && entry.name.endsWith(".html"))
          .map((entry) => entry.name);
        await Promise.all(
          topicRoutes.map(async (routeName) => {
            const routeDirectory = join(topicsDirectory, routeName);
            const temporaryFile = join(topicsDirectory, `${routeName}.tmp`);
            await rename(join(routeDirectory, "index.html"), temporaryFile);
            await rm(routeDirectory, { recursive: true });
            await rename(temporaryFile, join(topicsDirectory, routeName));
          }),
        );
      },
    },
  };
}
