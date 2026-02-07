---
description: Build distribution files and publish to npm
---

// turbo-all

# Build & Release Workflow

## Build Distribution Files

// turbo
1. Bundle JIT engine and TW converter:
```bash
npm run build:dist
```

This creates in `dist/`:
- `senangstart-css.js` - Unminified JIT engine
- `senangstart-css.min.js` - Minified JIT engine (~42KB)
- `senangstart-tw.js` - Unminified TW converter
- `senangstart-tw.min.js` - Minified TW converter

Also copies to `docs/public/assets/` for VitePress.

## Full Production Build

1. Build everything (dist + docs):
```bash
npm run build
```

Sequence:
1. `build:dist` - Bundle JS files
2. `docs:generate` - Generate reference docs
3. `vitepress build docs` - Build static site
4. `docs:llms` - Generate LLM context file

## Pre-publish Verification

// turbo
1. Run all tests before publishing:
```bash
npm test
```

2. Verify build succeeds:
```bash
npm run build:dist
```

3. Check package.json version is updated

## Publish to npm

1. Login to npm (if not already):
```bash
npm login
```

2. Publish the package:
```bash
npm publish
```

Note: `prepublishOnly` script auto-runs `build:dist` before publish.

## GitHub Pages Deployment

Deployment is automated via GitHub Actions (`.github/workflows/deploy-docs.yml`):

**Trigger**: Push to `master` branch or manual dispatch

**Steps**:
1. Checkout code
2. Setup Node.js 20
3. Install dependencies (`npm ci`)
4. Generate docs (`npm run docs:generate`)
5. Build with VitePress (`npm run build`)
6. Run tests (`npm test`)
7. Deploy to GitHub Pages

## Build Outputs

| File | Purpose | Size |
|------|---------|------|
| `dist/senangstart-css.min.js` | CDN distribution | ~42KB |
| `dist/senangstart-tw.min.js` | TW converter CDN | ~10KB |
| `docs/.vitepress/dist/` | Static docs site | - |

## Version Bumping

Before release, update version in:
1. `package.json` - Main version field
2. `scripts/build-dist.js` - Banner comments (optional)

Semantic versioning:
- PATCH (0.2.x) - Bug fixes
- MINOR (0.x.0) - New features, backward compatible
- MAJOR (x.0.0) - Breaking changes
