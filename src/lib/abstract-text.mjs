/** Recognize simple arXiv prose emphasis, preserving TeX math and all source text. */
export function abstractTextParts(text) {
  const parts = [];
  // Consume math first so emphasis commands inside it remain MathJax's responsibility.
  const tokens = /\$\$[\s\S]*?\$\$|\$[^\n$]*?\$|\\emph\{([^{}]*)\}/g;
  let start = 0;
  for (const match of text.matchAll(tokens)) {
    if (match[1] === undefined) continue;
    if (match.index > start) parts.push({ text: text.slice(start, match.index), emphasis: false });
    parts.push({ text: match[1], emphasis: true });
    start = match.index + match[0].length;
  }
  if (start < text.length) parts.push({ text: text.slice(start), emphasis: false });
  return parts;
}
