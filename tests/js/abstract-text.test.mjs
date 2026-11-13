import test from 'node:test';
import assert from 'node:assert/strict';
import { abstractTextParts } from '../../src/lib/abstract-text.mjs';

test('arXiv prose emphasis can contain inline mathematics without altering it', () => {
  const source = String.raw`We find \emph{exotic} components and \emph{$α$-bundles}.`;
  const parts = abstractTextParts(source);
  assert.equal(parts.map(p => p.text).join(''), 'We find exotic components and $α$-bundles.');
  assert.deepEqual(parts.filter(p => p.emphasis).map(p => p.text), ['exotic', '$α$-bundles']);
  assert.ok(source.includes(String.raw`\emph{exotic}`));
});
test('math and unsupported nested or unfinished prose commands remain unchanged', () => {
  for (const source of [String.raw`$\emph{x}$`, String.raw`$$\emph{x}$$`, String.raw`\emph{a{b}}`, String.raw`\emph{unfinished`]) {
    const parts = abstractTextParts(source);
    assert.equal(parts.map(p => p.text).join(''), source);
    assert.ok(parts.every(p => !p.emphasis));
  }
});
test('external markup remains plain text for Astro to escape', () => {
  const parts = abstractTextParts(String.raw`\emph{<img src=x onerror=alert(1)>} & outside`);
  assert.deepEqual(parts, [{text:'<img src=x onerror=alert(1)>',emphasis:true},{text:' & outside',emphasis:false}]);
});
