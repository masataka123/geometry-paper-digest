export const TAG_ID_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function validateTaxonomy(taxonomy) {
  if (!Array.isArray(taxonomy)) throw new Error("taxonomy must be a YAML list");
  const ids = taxonomy.map((tag) => tag?.id);
  if (new Set(ids).size !== ids.length) throw new Error("taxonomy IDs must be unique");
  for (const tag of taxonomy) {
    if (!tag || typeof tag !== "object") throw new Error("each taxonomy entry must be an object");
    if (typeof tag.id !== "string" || !TAG_ID_PATTERN.test(tag.id)) throw new Error(`invalid tag ID: ${tag.id}`);
    for (const field of ["name", "name_ja", "description"]) {
      if (typeof tag[field] !== "string" || !tag[field].trim()) throw new Error(`${tag.id}: ${field} is required`);
    }
  }
  return ids;
}

export function validatePostTags(metadata, knownIds, label = "paper") {
  if (!metadata || typeof metadata !== "object" || !Object.hasOwn(metadata, "tags")) throw new Error(`${label}: tags field is missing`);
  if (!Array.isArray(metadata.tags)) throw new Error(`${label}: tags must be an array`);
  if (metadata.tags.length > 5) throw new Error(`${label}: more than five tags`);
  if (new Set(metadata.tags).size !== metadata.tags.length) throw new Error(`${label}: duplicate tags`);
  for (const id of metadata.tags) {
    if (typeof id !== "string") throw new Error(`${label}: tag IDs must be strings`);
    if (!knownIds.has(id)) throw new Error(`${label}: unknown tag ${id}`);
  }
  return metadata.tags;
}

export function validateBaselineAssignments(baselineArticles, currentByFilename) {
  const pending = new Map(baselineArticles.map((article) => [article.filename, article.tags]));
  if (pending.size !== baselineArticles.length) throw new Error("Phase 5 baseline contains duplicate filenames");
  for (const [filename, tags] of currentByFilename) {
    const approved = pending.get(filename);
    if (!approved) continue; // Ordinary post-baseline additions require no registry update.
    const actualSet = [...tags].sort();
    const approvedSet = [...approved].sort();
    if (JSON.stringify(actualSet) !== JSON.stringify(approvedSet)) throw new Error(`${filename}: approved Phase 5 tags changed`);
    pending.delete(filename);
  }
  if (pending.size) throw new Error(`missing Phase 5 baseline papers: ${[...pending.keys()].join(", ")}`);
}
