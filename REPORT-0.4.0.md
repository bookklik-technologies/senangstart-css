# SenangStart CSS 0.4.0 — Production-hardening report

Branch `feat/1.0-roadmap`, 32 commits on top of `master` (f36f9eb).
177 files changed (+29,877 / −3,057); `src/` +6,889 / −2,184.

## Verification (all green)

| Check | Result |
|---|---|
| `npm test` (Node 24; CI matrix 20/22/24) | **1,187 / 1,187 pass** (was 846, and `npm test` itself was broken on Node 22+) |
| `npm run golden` (declaration snapshot, 1,661 tokens) | 0 unexpected diffs |
| `npx eslint src/` · stylelint on dist | clean |
| `npm run typecheck` (strict tsc on React/Vue/Svelte/API fixtures) | clean |
| `npx size-limit` | JIT **39.3 KB** / 40 KB gz · CSS 4.1 KB / 30 KB gz |
| `docs:sync-check` · `vitepress build docs` | in sync · builds |
| Vite + PostCSS plugin tests (real Vite/PostCSS builds) | pass |

| Playwright JIT browser suite (Chromium) | 14 / 14 pass (incl. shadow DOM, late attachShadow, first-frame styling) |
| Playwright visual regression vs committed snapshots (Chromium) | 6 / 6 pass |
| Tailwind → SenangStart conformance (Tailwind v4 CSS vs converted exact-mode markup, computed styles) | 2 / 2 fixtures pass in **strict colour mode** (oklch palette) |

Firefox/WebKit visual projects were not run locally (no binaries); CI runs them.

## Before → after

| | 0.3.1 | 0.4.0 |
|---|---|---|
| CSS injection via attribute values | **exploitable** (build + JIT) | closed; 18-payload regression suite |
| First build overwrites `.cursorrules` / `types/senang.d.ts` | yes | opt-in, marker-protected |
| Output depends on file order | yes | deterministic; tested with shuffled inputs |
| `@layer` | none | `senangstart.theme / base / utilities` (`layers: false` to opt out) |
| Breakpoint order | config-key order (`tw-sm` beat `desk`) | numeric; `max-*`, ranges, `print`, custom screens |
| Variant stacking | breakpoint + one state | any order/count (`tab:dark:hover:`) |
| Variant families | 15 states | + structural, pseudo-elements, aria-*, data-*, has-[], not-*, motion/contrast/orientation/pointer, rtl/ltr |
| `darkMode: 'class'` | dark styles always on (bug) | alias of `selector`; zero-specificity wrapper, hover still wins |
| Unknown tokens | silently dropped / undefined `var()` | `UNKNOWN_VARIANT/PROPERTY/VALUE` with did-you-mean, file:line, exit 1 |
| Transforms | each overrode the others | compose (standalone properties + `@property`) |
| CSS generator | 1,234-line file, 360-line if-chain | registry built from definitions; `css.js` ~830 lines of assembly only |
| Documented tokens producing no CSS | 84 | 0 of those 84 |
| Landing page (same markup) | 18.6 KB / 5.68 KB gz | **12.1 KB / 3.54 KB gz** (Tailwind 4.3.3: 15.1 / 3.63) |
| Template scanning | literal attributes only; JSX expressions broke the build | JSX/Vue/Svelte/Blade/PHP/Astro expressions, `clsx()`, `senang:` hints |
| Config errors | silently fell back to defaults, exit 0 | exit 1 with message; absolute/parent paths; schema validation |
| Build integrations | none | Vite plugin, PostCSS plugin, programmatic `build()`/`watch()` |
| TypeScript | README example failed `tsc --strict` | multi-token types for 6 frameworks, strict `ss()` helper, JSON schema, VS Code html-data |
| Browser JIT bundle | 340 KB / 63.8 KB gz | ~160 KB / **39.3 KB gz** (incl. presets) |
| Gradients | linear, 8 directions | + angles, radial, conic, stop positions |
| Palette | v3 hex only | hex default, opt-in Tailwind v4 oklch (`theme.palette`) |
| Typography / forms presets | none | opt-in `prose` (+sm/lg/invert) and `forms` presets |
| Tailwind converter | two divergent copies (30% similar, corrupted apostrophes/`data-class`) | one module + `sen convert`, quote-aware HTML rewriter, stacked variants, conformance-tested |
| `!important`, arbitrary properties, container queries, prefix option, plugin API | missing | `!p:big`, `[mask-type:luminance]`, `@tab:` / `@tab/name:`, `prefix: 'ss'`, `utilities` / `variants` / `plugins` config (docs/guide/plugins.md) |
| Browser JIT behaviour | full DOM rescan + `<style>` rewrite per mutation, 200 ms debounce, no shadow DOM | mutation-scoped scan, memoised rules, microtask recompile, constructed stylesheet shared with shadow roots, `window.SenangStart` API |

## Breaking changes (see CHANGELOG and docs/guide/cascade.md)
Layered output; deterministic ordering; dark selector string; `darkMode:'class'` fixed; unused palette variables pruned (`theme.exposeAll`); generated AI/TS files opt-in; config errors fail; Node ≥ 20; unknown tokens are errors; transforms use standalone properties.

## Remaining backlog (not done in this pass)
1. ~~JIT bundle size~~ — done (34.5 KB gz).
2. ~~JIT runtime~~ — done (incremental, shadow DOM).
3. ~~Tailwind converters~~ — merged, with a conformance suite.
4. ~~radial/conic gradients, prose and forms presets, oklch palette~~ — done. Still open: an `@apply`-style component extraction (the plugin API's keyword utilities cover the common case).
5. ~~Group selectors at (0,4,0)~~ — now (0,2,0) with Tailwind-order state variants.
6. VS Code extension (data files are generated; extension not built).
7. ~~Playwright visual + Tailwind computed-style conformance suite~~ — done (both run in CI).

## Delivered
- `senangstart-css-0.4.0.zip`: full repository including `.git` (branch history), without `node_modules` or build caches.
- `senangstart-css-0.4.0-patches.zip`: `git format-patch` series of the 32 commits, apply with `git am` on `master`.
