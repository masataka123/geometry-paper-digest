function normalizedName(value) {
  return String(value).normalize("NFC").trim().replace(/\s+/gu, " ");
}

export function parseAuthorNames(value, override) {
  const source = normalizedName(value);
  // Repository front matter uses commas exclusively as separators; "family, given" needs an explicit parser override.
  const names = override ?? (source ? source.split(",") : []);
  const result = names.map(normalizedName);
  if (!result.length || result.some((name) => !name)) throw new Error(`Authors must contain one or more non-empty comma-separated names: ${JSON.stringify(value)}`);
  return result;
}

function hash(value) {
  let number = 2166136261;
  for (const character of value) {
    number ^= character.codePointAt(0);
    number = Math.imul(number, 16777619);
  }
  return (number >>> 0).toString(36);
}

function slug(name) {
  const result = name.normalize("NFKD").replace(/\p{Mark}/gu, "").toLowerCase()
    .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return result || `author-${hash(name)}`;
}

export function buildCanonicalAuthors(rawNames, aliases = {}, identityKeys = []) {
  const normalizedAliases = new Map(Object.entries(aliases).map(([from, to]) => [normalizedName(from), normalizedName(to)]));
  for (const [from, to] of normalizedAliases) {
    if (!to) throw new Error(`Author alias ${from} has an empty target`);
    if (normalizedAliases.has(to)) throw new Error(`Author alias target must be canonical (cycle or alias chain): ${from} -> ${to}`);
  }
  const observed = new Set(rawNames.map(normalizedName));
  for (const [from, to] of normalizedAliases) {
    if (!observed.has(from)) throw new Error(`Unknown author alias: ${from}`);
    if (!observed.has(to)) throw new Error(`Unknown canonical author target: ${to}`);
  }
  const canonicalFor = (name) => normalizedAliases.get(normalizedName(name)) ?? normalizedName(name);
  if (identityKeys.length && identityKeys.length !== rawNames.length) throw new Error("Author identity keys must match author occurrences");
  const identities = new Map();
  const occurrenceIdentityKeys = [];
  rawNames.forEach((name, index) => {
    const displayName = canonicalFor(name);
    const identityKey = normalizedName(identityKeys[index] || displayName);
    occurrenceIdentityKeys.push(identityKey);
    if (!identityKey) throw new Error("Author identity key must not be empty");
    const previous = identities.get(identityKey);
    if (previous && previous !== displayName) throw new Error(`Author identity key ${identityKey} has conflicting display names`);
    identities.set(identityKey, displayName);
  });
  const ids = new Map();
  for (const [identityKey, displayName] of identities) ids.set(identityKey, `${slug(displayName)}-${hash(identityKey)}`);
  const collided = new Set();
  const firstById = new Map();
  for (const [name, id] of ids) {
    if (firstById.has(id)) { collided.add(name); collided.add(firstById.get(id)); }
    else firstById.set(id, name);
  }
  for (const name of collided) ids.set(name, `${ids.get(name)}-${[...name].map((character) => character.codePointAt(0).toString(16)).join("-")}`);
  if ([...ids.values()].length !== new Set(ids.values()).size) throw new Error("Canonical author ID collision could not be resolved");
  return { canonicalFor, idFor: (name, identityKey) => ids.get(normalizedName(identityKey || canonicalFor(name))), occurrenceIdentityKeys, identities, ids };
}
