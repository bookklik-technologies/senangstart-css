---
description: Prepare, validate, and explicitly publish SenangStart CSS releases
---

# Build & Release Workflow

## Preparation

Follow [RELEASING.md](../../RELEASING.md) for the complete release checklist. Preparation alone must not publish, push a tag, create a release, or commit changes.

1. Update `package.json`, both root version entries in `package-lock.json`, and the version/date in `CHANGELOG.md`.
2. Run the release gate (ask before running unit tests unless already authorized):

   ```bash
   npm run release:check
   ```

   This runs lint, typecheck, documentation sync, a dependency audit blocking high/critical findings, golden checks, a fresh dist build, Node tests including packaging tests, and bundle-size limits. The audit needs registry access. `prepublishOnly` invokes the same gate.

3. Build the full production docs and distribution:

   ```bash
   npm run build
   ```

   Sequence: `build:dist` → `docs:generate` → VitePress build → `docs:llms`.

4. Run browser verification with Playwright Chromium installed:

   ```bash
   npm run test:jit
   npm run test:conformance
   ```

5. Inspect and pack the release without publishing:

   ```bash
   npm pack --dry-run
   npm pack
   ```

6. Review generated artifacts and smoke-test the tarball in an isolated consumer project.

## Build Outputs

| File | Purpose |
|------|---------|
| `dist/senangstart-css.js`, `dist/senangstart-css.min.js` | Browser JIT runtime |
| `dist/senangstart-css.cjs`, `dist/senangstart-css.mjs` | CommonJS and ESM compiler APIs |
| `dist/senangstart-tw.js`, `dist/senangstart-tw.min.js` | Browser Tailwind converter |
| `dist/senangstart.css`, `dist/senangstart.min.css` | Standalone preflight and theme variables |
| `docs/public/assets/` | Copied browser runtime and standalone stylesheets |
| `docs/.vitepress/dist/` | Production documentation site |

All version banners are generated from `package.json`. Use `npm run size` for current compressed sizes instead of maintaining estimates here.

## Publishing

Only publish or push a release tag after explicit user authorization. The `release.yml` workflow verifies tags on Node 22/24, publishes to npm with provenance using the configured `npm` environment, then creates a GitHub release. See `RELEASING.md` for prerequisites and manual publication guidance.

## Documentation Deployment

`deploy-docs.yml` uses Node 24 and deploys GitHub Pages on a push to `master` or manual dispatch. This does not publish an npm package.
