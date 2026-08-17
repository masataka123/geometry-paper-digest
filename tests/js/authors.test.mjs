import test from "node:test";
import assert from "node:assert/strict";
import { buildCanonicalAuthors, parseAuthorNames } from "../../src/lib/author-core.mjs";

test("parses one, two, and three comma-separated authors", () => {
  assert.deepEqual(parseAuthorNames("Alice"), ["Alice"]);
  assert.deepEqual(parseAuthorNames("Alice, Bob"), ["Alice", "Bob"]);
  assert.deepEqual(parseAuthorNames("Alice, Bob, Chloé"), ["Alice", "Bob", "Chloé"]);
});
test("normalizes Unicode and whitespace without resolving identity", () => {
  assert.deepEqual(parseAuthorNames("  Jose\u0301   García , 李  明 "), ["José García", "李 明"]);
});
test("IDs are deterministic, Unicode-safe, and collisions are resolved", () => {
  const one = buildCanonicalAuthors(["José", "Jose"]); const two = buildCanonicalAuthors(["Jose", "José"]);
  assert.equal(one.idFor("José"), two.idFor("José")); assert.notEqual(one.idFor("José"), one.idFor("Jose"));
  assert.match(one.idFor("José"), /^[a-z0-9-]+$/);
});
test("supports explicit aliases while ordinary new authors need none", () => {
  const index = buildCanonicalAuthors(["A. Person", "Alice Person", "New Author"], { "A. Person": "Alice Person" });
  assert.equal(index.idFor("A. Person"), index.idFor("Alice Person")); assert.ok(index.idFor("New Author"));
});
test("splits explicit homonyms by occurrence identity without affecting ordinary authors", () => {
  const index = buildCanonicalAuthors(["John Smith", "John Smith", "New Author"], {}, ["arxiv:1#1", "arxiv:2#1", "New Author"]);
  assert.notEqual(index.idFor("John Smith", "arxiv:1#1"), index.idFor("John Smith", "arxiv:2#1"));
  assert.ok(index.idFor("New Author"));
});
test("allows an explicit parser override for a name containing a comma", () => {
  assert.deepEqual(parseAuthorNames("Smith, John", ["Smith, John"]), ["Smith, John"]);
});
test("rejects empty parsing and invalid alias targets", () => {
  assert.throws(() => parseAuthorNames(""));
  assert.throws(() => buildCanonicalAuthors(["A"], { A: "Unknown" }));
});
