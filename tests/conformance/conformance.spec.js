/**
 * Tailwind → SenangStart conformance suite.
 *
 * For every fixture, the original Tailwind markup (with Tailwind v4 CSS) and the
 * converted markup (exact mode, SenangStart CSS) are rendered in Chromium and the
 * computed styles of every `data-probe="name|prop,prop"` element are compared.
 */
import { test, expect } from '@playwright/test';
import { buildPages } from './build-pages.mjs';
import { readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const fixtures = readdirSync(join(here, 'fixtures')).filter((f) => f.endsWith('.html')).map((f) => f.replace(/\.html$/, ''));

test.beforeAll(async () => {
  const res = await buildPages();
  for (const r of res) {
    expect(r.errors, `${r.name}: converted markup must compile without diagnostics`).toEqual([]);
    expect(r.unknown, `${r.name}: every Tailwind class must convert`).toEqual([]);
  }
});

/**
 * Computed styles, normalised so that cosmetic differences between Tailwind v4 and
 * SenangStart output do not count as mismatches:
 *  - colours → sRGB hex via canvas (Tailwind v4 emits oklch(), SenangStart hex)
 *  - box-shadow → transparent ring/inset placeholder layers removed
 *  - radii ≥ 9000px → "round" (Tailwind v4 uses calc(infinity * 1px) for rounded-full)
 */
async function probe(page, url) {
  await page.goto(url);
  return page.evaluate(() => {
    const ctx = document.createElement('canvas').getContext('2d');
    const toHex = (c) => { ctx.fillStyle = '#000'; ctx.fillStyle = c; return ctx.fillStyle; };
    const COLOR_RE = /(oklch|oklab|rgba?|hsla?|color)\([^)]*\)|#[0-9a-f]{3,8}/gi;
    const norm = (prop, v) => {
      if (/color$/.test(prop)) return toHex(v);
      if (prop === 'box-shadow') {
        return v === 'none' ? v : v.split(/,(?![^(]*\))/).map((l) => l.trim())
          .filter((l) => !/^rgba\(0, 0, 0, 0\) 0px 0px 0px 0px$/.test(l))
          .map((l) => l.replace(COLOR_RE, (m) => toHex(m))).join(', ');
      }
      if (/radius$/.test(prop) && parseFloat(v) >= 9000) return 'round';
      return v;
    };
    const root = document.getElementById('root').getBoundingClientRect();
    const out = {};
    for (const el of document.querySelectorAll('[data-probe]')) {
      const [name, props] = el.getAttribute('data-probe').split('|');
      const cs = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      // @x/@y/@w/@h probe geometry (rounded to 0.5px) — useful where Tailwind v4 and
      // SenangStart reach the same layout through different properties (space-y, divide-y)
      const geo = { '@x': r.left - root.left, '@y': r.top - root.top, '@w': r.width, '@h': r.height };
      out[name] = Object.fromEntries(props.split(',').map((p) => {
        const k = p.trim();
        return [k, k in geo ? String(Math.round(geo[k] * 2) / 2) : norm(k, cs.getPropertyValue(k))];
      }));
    }
    return out;
  });
}

// ---- colour normalisation (Node side): oklch()/rgb()/#hex → [r,g,b] 0-255 ----
function oklchToRgb(L, C, H) {
  const h = (H * Math.PI) / 180;
  const a = C * Math.cos(h), b = C * Math.sin(h);
  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.2914855480 * b;
  const l = l_ ** 3, m = m_ ** 3, sv = s_ ** 3;
  const lin = [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * sv,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * sv,
    -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * sv
  ];
  return lin.map((c) => {
    const v = c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(Math.max(c, 0), 1 / 2.4) - 0.055;
    return Math.round(Math.min(1, Math.max(0, v)) * 255);
  });
}
function toRgb(str) {
  let m;
  if ((m = /^#([0-9a-f]{6})$/i.exec(str))) return [0, 2, 4].map((i) => parseInt(m[1].slice(i, i + 2), 16));
  if ((m = /^rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(str))) return [+m[1], +m[2], +m[3]];
  if ((m = /^oklch\(([\d.]+)%?\s+([\d.]+)\s+([\d.]+)/.exec(str))) return oklchToRgb(+m[1] > 1 ? +m[1] / 100 : +m[1], +m[2], +m[3]);
  return null;
}
const COLOR_TOKEN = /oklch\([^)]*\)|rgba?\([^)]*\)|#[0-9a-f]{6}/gi;

/** Colours within ±TOLERANCE per sRGB channel are equal (v3 hex vs v4 oklch palettes). */
const TOLERANCE = 3;
function same(a, b) {
  if (a === b) return true;
  const ra = toRgb(a), rb = toRgb(b);
  if (ra && rb) return ra.every((v, i) => Math.abs(v - rb[i]) <= TOLERANCE);
  // strings with embedded colours (shadows): compare structure, then each colour
  const ca = a.match(COLOR_TOKEN) || [], cb = b.match(COLOR_TOKEN) || [];
  if (ca.length && ca.length === cb.length && a.replace(COLOR_TOKEN, 'C') === b.replace(COLOR_TOKEN, 'C')) {
    return ca.every((c, i) => same(c, cb[i]));
  }
  const ha = /^#[0-9a-f]{6}$/i.test(a), hb = /^#[0-9a-f]{6}$/i.test(b);
  if (ha && hb) {
    for (let i = 1; i < 7; i += 2) if (Math.abs(parseInt(a.slice(i, i + 2), 16) - parseInt(b.slice(i, i + 2), 16)) > TOLERANCE) return false;
    return true;
  }
  // shadows: compare layer by layer with colour tolerance
  if (a.includes('px') && b.includes('px') && a.includes('#') && b.includes('#')) {
    const la = a.split(', '), lb = b.split(', ');
    if (la.length !== lb.length) return false;
    return la.every((l, i) => l.replace(/#[0-9a-f]{6}/i, 'C') === lb[i].replace(/#[0-9a-f]{6}/i, 'C') && same(l.match(/#[0-9a-f]{6}/i)?.[0] ?? '', lb[i].match(/#[0-9a-f]{6}/i)?.[0] ?? ''));
  }
  return false;
}

for (const name of fixtures) {
  test(`${name}: converted markup computes to the same styles as Tailwind`, async ({ page }) => {
    const tw = await probe(page, `/tests/conformance/.generated/${name}.tailwind.html`);
    const ss = await probe(page, `/tests/conformance/.generated/${name}.senang.html`);
    const mismatches = [];
    const paletteDeltas = [];
    for (const [el, props] of Object.entries(tw)) {
      for (const [prop, expected] of Object.entries(props)) {
        const actual = ss[el]?.[prop];
        if (same(actual, expected)) continue;
        // geometry: 1px tolerance (borders may sit on different siblings, e.g. divide-y)
        if (prop.startsWith('@') && Math.abs(parseFloat(actual) - parseFloat(expected)) <= 1) continue;
        // Palette-only difference? (same colour name, Tailwind v4 oklch vs SenangStart v3 hex)
        const ra = toRgb(actual), rb = toRgb(expected);
        if (ra && rb) {
          const delta = Math.max(...ra.map((v, i) => Math.abs(v - rb[i])));
          paletteDeltas.push({ where: `${el}.${prop}`, expected, actual, delta });
          continue;
        }
        mismatches.push(`${el}.${prop}: tailwind=${expected} senangstart=${actual}`);
      }
    }
    expect(mismatches, `\n${mismatches.join('\n')}`).toEqual([]);

    // Palette deltas are expected until SenangStart ships an oklch palette (backlog).
    // They must stay small; set CONFORMANCE_STRICT_COLORS=1 to make them fail.
    if (paletteDeltas.length) {
      console.log(`  palette deltas (v4 oklch vs v3 hex): ${paletteDeltas.map((d) => `${d.where} Δ${d.delta}`).join(', ')}`);
    }
    const PALETTE_MAX_DELTA = 40;
    for (const d of paletteDeltas) expect(d.delta, `${d.where}: ${d.expected} vs ${d.actual}`).toBeLessThanOrEqual(PALETTE_MAX_DELTA);
    if (process.env.CONFORMANCE_STRICT_COLORS) expect(paletteDeltas).toEqual([]);
  });
}
