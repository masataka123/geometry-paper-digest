import { defineConfig } from "astro/config";
import legacyTopicFiles from "./src/integrations/legacy-topic-files.mjs";

export default defineConfig({
  site: "https://masataka123.github.io",
  base: "/geometry-paper-digest",
  output: "static",
  trailingSlash: "always",
  integrations: [legacyTopicFiles()],
});
