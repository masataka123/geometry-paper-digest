import assert from "node:assert/strict";
import test from "node:test";

import { validateBaselineAssignments, validatePostTags, validateTaxonomy } from "../../scripts/tag-validation.mjs";

const taxonomy = [
  { id: "alpha", name: "Alpha", name_ja: "アルファ", description: "Alpha description" },
  { id: "beta", name: "Beta", name_ja: "ベータ", description: "Beta description" },
  { id: "gamma", name: "Gamma", name_ja: "ガンマ", description: "Gamma description" },
  { id: "delta", name: "Delta", name_ja: "デルタ", description: "Delta description" },
  { id: "epsilon", name: "Epsilon", name_ja: "イプシロン", description: "Epsilon description" },
];
const known = new Set(validateTaxonomy(taxonomy));

test("future papers need no baseline registry entry and accept zero through five controlled tags", () => {
  assert.deepEqual(validatePostTags({ tags: [] }, known, "new-empty"), []);
  assert.deepEqual(validatePostTags({ tags: ["alpha"] }, known, "new-one"), ["alpha"]);
  assert.deepEqual(validatePostTags({ tags: ["alpha", "beta", "gamma", "delta", "epsilon"] }, known, "new-five"), ["alpha", "beta", "gamma", "delta", "epsilon"]);
});

test("future papers reject unknown, duplicate, six, scalar, and missing tags", () => {
  assert.throws(() => validatePostTags({ tags: ["unknown"] }, known), /unknown tag/);
  assert.throws(() => validatePostTags({ tags: ["alpha", "alpha"] }, known), /duplicate tags/);
  assert.throws(() => validatePostTags({ tags: ["alpha", "beta", "gamma", "delta", "epsilon", "alpha-2"] }, new Set([...known, "alpha-2"])), /more than five/);
  assert.throws(() => validatePostTags({ tags: "alpha" }, known), /must be an array/);
  assert.throws(() => validatePostTags({}, known), /field is missing/);
});

test("taxonomy validation rejects duplicate IDs and incomplete metadata", () => {
  assert.throws(() => validateTaxonomy([...taxonomy, taxonomy[0]]), /unique/);
  assert.throws(() => validateTaxonomy([{ id: "alpha", name: "", name_ja: "A", description: "A" }]), /name is required/);
});

test("Phase 5 baseline protects approved sets but permits unregistered future papers", () => {
  const baseline = [{ filename: "existing.md", tags: ["alpha", "beta"] }];
  assert.doesNotThrow(() => validateBaselineAssignments(baseline, new Map([
    ["existing.md", ["beta", "alpha"]],
    ["future.md", ["gamma"]],
    ["future-empty.md", []],
  ])));
  assert.throws(() => validateBaselineAssignments(baseline, new Map([["existing.md", ["alpha"]]])), /approved Phase 5 tags changed/);
  assert.throws(() => validateBaselineAssignments(baseline, new Map([["future.md", ["gamma"]]])), /missing Phase 5 baseline papers/);
});
