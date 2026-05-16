# Changelog

All notable changes to SenangStart CSS will be documented in this file.

---

## [0.3.0] — 2026-05-16

### Fixed
- **CRITICAL:** Fixed uncaught `ReferenceError` in `src/utils/common.js` — `logger` imported without being required, causing runtime crashes on memory-limit batch processing.
- **Version sync:** `scripts/build-dist.js` and `src/cli/index.js` now read version dynamically from `package.json` (fixes banner showing `v0.2.0` and CLI showing `1.0.0` while actual version was `0.2.12`).
- **CLI build:** `findFiles()` now respects user's `config.content` glob patterns instead of ignoring them and walking the entire CWD with hardcoded extensions.
- **Build exit codes:** `senangstart build` now exits with code `1` on failure (no files found, all files fail, tokenization failure, CSS generation failure, write failures) so CI/CD pipelines correctly detect failures.
- **TW scale consolidation:** `src/compiler/generators/css.js` now imports Tailwind scales (`TW_SPACING`, `TW_RADIUS`, `TW_SHADOW`, `TW_FONT_SIZE`, `TW_LEADING`, `TW_FONT_WEIGHT`) from `src/core/constants.js` instead of hardcoding ~70 lines of duplicated data.

### Added
- **Source maps:** Enabled `sourcemap: true` on all esbuild dist bundles (`senangstart-css.js`, `senangstart-css.min.js`, `senangstart-tw.js`, `senangstart-tw.min.js`).
- **JIT engine debounce:** Added 200ms debounce on `MutationObserver` callback to prevent performance degradation on mutation-heavy pages (SPAs, React, live data).
- **Token caching:** JIT engine now caches the last DOM token set and skips recompilation when tokens haven't changed between mutations, avoiding redundant CSS generation.

---

## [0.2.12] — 2026-05-14

### Fixed
- Outline and ring utility bug fixes.

---

## [0.2.11] — 2026-05-13

### Changed
- Version bump.

### Added
- AGENTS.md with agent skills and workflows.
- Restructured test units.

---

## [0.2.10] — 2026-05-12

### Added
- Directional border radius utilities (`rounded-t`, `rounded-b`, `rounded-l`, `rounded-r`, `rounded-tl`, `rounded-tr`, `rounded-bl`, `rounded-br`).
- Fixed divide utilities.

### Changed
- Enhanced Tailwind converter with critical bug fixes and 44+ new utility mappings.
- Documentation sync pass — all definitions now match docs.

---

## [0.2.9] — 2026-05-10

### Fixed
- Critical bug fixes: Tailwind font scale compatibility in CSS generator.
- Removed redundant `border-style` from divide utilities.
- Added missing `--ss-divide-x-reverse` / `--ss-divide-y-reverse` CSS variables.
- Enhanced security sanitization in `src/utils/common.js`.
- Fixed parser regex for quoted attributes.

### Added
- Improved preflight with theme customization.
- Placeholder theme property with CSS variable support.
- Safe-area-inset utilities for modern devices.
- Gradient CSS variables for better flexibility.
- Scroll snap, field-sizing, and transform utility docs.

---

## [0.2.8] and earlier

### Added
- Natural Language engine (layout, space, visual tri-attribute syntax).
- JIT browser runtime with MutationObserver.
- CLI compiler (`senangstart init`, `build`, `dev`) with Commander.
- Complete Tailwind-compatible color palette (22 color families × 11 shades).
- The "Natural Object" spacing scale (none → vast-10x).
- Responsive breakpoints: `mob:`, `tab:`, `lap:`, `desk:`, `print:`.
- Dark mode support: `media` and `selector` strategies.
- State prefixes: `hover:`, `focus:`, `active:`, `disabled:`, `dark:`, `expanded:`, `selected:`.
- Group and peer interaction patterns (`interact` / `listens` attributes).
- Tailwind CSS to SenangStart conversion engine.
- Bilingual documentation (EN + MS) via VitePress.
- AI context generation (`.cursorrules`, `llms.txt`).
- TypeScript definition generation (`senang.d.ts`).
- Security: CSS injection sanitization, XSS vector blocking, path traversal protection.
- 630 automated tests (unit + integration + sync).
- CDN deployment support via unpkg.
