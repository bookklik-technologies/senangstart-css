# SenangStart CSS 0.4.0 — Production-hardening report

Branch `feat/1.0-roadmap`, 15 commits on top of `master` (f36f9eb).
177 files changed (+29,877 / −3,057); `src/` +6,889 / −2,184.

## Verification (all green)

| Check | Result |
|---|---|
| `npm test` (Node 24; CI matrix 20/22/24) | **1,120 / 1,120 pass** (was 846, and `npm test` itself was broken on Node 22+) |
| `npm run golden` (declaration snapshot, 1,661 tokens) | 0 unexpected diffs |
| `npx eslint src/` · stylelint on dist | clean |
| `npm run typecheck` (strict tsc on React/Vue/Svelte/API fixtures) | clean |
| `npx size-limit` | JIT 69.3 KB / 70 KB gz · CSS 4.1 KB / 30 KB gz |
| `docs:sync-check` · `vitepress build docs` | in sync · builds |
| Vite + PostCSS plugin tests (real Vite/PostCSS builds) | pass |

Not run: Playwright visual/JIT browser suites (no browser binaries in the sandbox).

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

## Breaking changes (see CHANGELOG and docs/guide/cascade.md)
Layered output; deterministic ordering; dark selector string; `darkMode:'class'` fixed; unused palette variables pruned (`theme.exposeAll`); generated AI/TS files opt-in; config errors fail; Node ≥ 20; unknown tokens are errors; transforms use standalone properties.

## Remaining backlog (not done in this pass)
1. **JIT bundle size**: 69.3 KB gz, just under the 70 KB budget. Documentation text from `src/definitions` is bundled; build a slim definitions bundle for the runtime (target < 35 KB gz).
2. **JIT runtime**: still rescans the DOM and rewrites one `<style>` per mutation batch; no shadow-DOM style injection (audit M5).
3. **Tailwind converters**: two divergent copies remain (`scripts/convert-tailwind.js`, `src/cdn/tw-conversion-engine.js`); merge and parse HTML properly (M7).
4. **Parity gaps still open**: container queries (`@container`), arbitrary properties (`[prop:value]`), `!important` modifier, attribute prefix option, plugin API / custom utilities / `@apply`-style extraction, keyframes in config, radial/conic gradients, prose and forms presets, oklch palette.
5. Group selectors (`hoverable` parents) still have (0,4,0) specificity.
6. VS Code extension (data files are generated; extension not built).
7. Playwright visual + Tailwind computed-style conformance suite.

## Delivered
- `senangstart-css-0.4.0.zip`: full repository including `.git` (branch history), without `node_modules` or build caches.
- `senangstart-css-0.4.0-patches.zip`: `git format-patch` series of the 15 commits, apply with `git am` on `master`.
