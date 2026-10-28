# Releasing SenangStart CSS

## Prepare a release

1. Choose the next semantic version. Update `package.json` and both root version entries in `package-lock.json`. Do not change dependency versions just to bump the package version.
2. Finalize the corresponding section in `CHANGELOG.md` with the version and release date.
3. Run the local release gate:

   ```bash
   npm run release:check
   ```

   This runs JavaScript lint, TypeScript validation, documentation synchronization, a dependency security audit (blocking high/critical findings), golden checks, a fresh distribution build, all Node tests (including packaging tests), and bundle-size checks. Building before testing ensures packaging tests use the release artifacts, not stale bundles. The audit needs registry access. `npm publish` runs this gate through `prepublishOnly` too.

4. Build the documentation and check the browser suites:

   ```bash
   npm run build
   npm run test:jit
   npm run test:conformance
   ```

   Browser suites require Playwright Chromium (`npx playwright install chromium --only-shell`). CI also checks desktop visual snapshots on Windows with `npx playwright test --project=chromium`.

5. Inspect and pack the npm artifact without publishing:

   ```bash
   npm pack --dry-run
   npm pack
   ```

   The package allowlist includes `dist`, `src`, `types`, `templates`, `schema`, the README, changelog, and license. Tests, examples, development scripts, and local release artifacts must not ship. For an isolated consumer smoke check, install the resulting `.tgz` into a temporary project and verify the ESM/CJS API, Node build API, converter, integration factories, and CLI.

6. Review the complete diff, including generated `dist/` files and `docs/public/assets/`. Distribution banners and the JIT runtime version are read from `package.json`; do not edit their generated versions manually. Preserve any unrelated working-tree changes.

Preparation does not create a commit, tag, GitHub release, or npm publication.

## Publish only when explicitly authorized

The automated release workflow is `.github/workflows/release.yml`. Pushing a `v<version>` tag triggers verification on Node 22 and 24, npm publication with provenance, and a GitHub release. The tag must match `package.json` exactly. Ensure the intended changes are committed before creating and pushing a tag.

The repository's `npm` environment must be configured with an `NPM_TOKEN` secret that can publish `@bookklik/senangstart-css`; the publishing job also needs `id-token: write` for provenance. Never commit or paste credentials into release files.

An explicitly authorized manual publication uses:

```bash
npm publish --access public
```

Use the GitHub workflow for provenance. Do not publish manually and then trigger the tag workflow for the same version: npm versions cannot be published twice.

Documentation deployment is separate: `.github/workflows/deploy-docs.yml` builds and deploys GitHub Pages on pushes to `master` or manual dispatch, using Node 24.
