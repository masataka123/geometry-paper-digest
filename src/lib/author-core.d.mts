export function parseAuthorNames(value: string, override?: string[]): string[];
export function buildCanonicalAuthors(rawNames: string[], aliases?: Record<string, string>, identityKeys?: string[]): {
  canonicalFor(name: string): string;
  idFor(name: string, identityKey?: string): string | undefined;
  occurrenceIdentityKeys: string[];
  identities: Map<string, string>;
  ids: Map<string, string>;
};
