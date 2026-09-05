/**
 * SenangStart CSS - Build Exit Code Integration Tests (Phase 1, item 1.4)
 *
 * Verifies that invalid tokens FAIL the build (exit code 1) and that the
 * --ignore-invalid escape hatch keeps the exit code at 0. Watch mode
 * (options.watch) must never set the exit code so the dev server stays alive.
 */
import { describe, it, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, rmSync, writeFileSync, existsSync, readFileSync } from 'fs';
import { tmpdir } from 'os';
import { join } from 'path';
import { build } from '../../src/cli/commands/build.js';

const CONFIG_SOURCE = `export default {
  content: ['./**/*.html'],
  output: { css: './out.css', minify: false },
  preflight: false
};
`;

const CONFIG_IGNORE_INVALID = `export default {
  content: ['./**/*.html'],
  output: { css: './out.css', minify: false },
  preflight: false,
  build: { ignoreInvalid: true }
};
`;

const HTML_WITH_INVALID = '<div layout="flex invalid_layout_token" space="p:medium">Test</div>';
const HTML_VALID = '<div layout="flex" space="p:medium">Test</div>';

describe('Build Exit Code (invalid tokens fail the build)', () => {
  let tempDir;
  let originalCwd;
  let originalExitCode;

  beforeEach(() => {
    tempDir = mkdtempSync(join(tmpdir(), 'sscss-build-'));
    writeFileSync(join(tempDir, 'senangstart.config.js'), CONFIG_SOURCE);
    originalCwd = process.cwd();
    originalExitCode = process.exitCode;
    process.chdir(tempDir);
  });

  afterEach(() => {
    process.chdir(originalCwd);
    process.exitCode = originalExitCode;
    rmSync(tempDir, { recursive: true, force: true });
  });

  it('sets exit code 1 when invalid tokens are found', async () => {
    writeFileSync(join(tempDir, 'page.html'), HTML_WITH_INVALID);

    process.exitCode = 0;
    await build({ config: 'senangstart.config.js' });

    assert.equal(process.exitCode, 1, 'build must fail on invalid tokens');
    assert.ok(existsSync(join(tempDir, 'out.css')), 'CSS output is still written for dev workflows');
  });

  it('keeps exit code 0 with --ignore-invalid', async () => {
    writeFileSync(join(tempDir, 'page.html'), HTML_WITH_INVALID);

    process.exitCode = 0;
    await build({ config: 'senangstart.config.js', ignoreInvalid: true });

    assert.equal(process.exitCode, 0, '--ignore-invalid must keep exit code 0');
  });

  it('keeps exit code 0 with build.ignoreInvalid in config (mergeConfig must preserve build key)', async () => {
    // Regression: mergeConfig used to drop the build key, silently disabling
    // the documented config escape hatch
    writeFileSync(join(tempDir, 'senangstart.config.js'), CONFIG_IGNORE_INVALID);
    writeFileSync(join(tempDir, 'page.html'), HTML_WITH_INVALID);

    process.exitCode = 0;
    await build({ config: 'senangstart.config.js' });

    assert.equal(process.exitCode, 0, 'build.ignoreInvalid in config must keep exit code 0');
  });

  it('keeps exit code 0 for clean sources', async () => {
    writeFileSync(join(tempDir, 'page.html'), HTML_VALID);

    process.exitCode = 0;
    await build({ config: 'senangstart.config.js' });

    assert.equal(process.exitCode, 0);
  });

  it('does not set exit code in watch mode (dev stays alive)', async () => {
    writeFileSync(join(tempDir, 'page.html'), HTML_WITH_INVALID);

    process.exitCode = 0;
    await build({ config: 'senangstart.config.js', watch: true });

    assert.equal(process.exitCode, 0, 'watch mode must not set exit code');
  });

  it('still generates valid rules alongside invalid tokens', async () => {
    writeFileSync(join(tempDir, 'page.html'), HTML_WITH_INVALID);

    await build({ config: 'senangstart.config.js' });
    const css = readFileSync(join(tempDir, 'out.css'), 'utf-8');

    assert.ok(css.includes('display: flex'), 'valid layout token compiled');
    assert.ok(css.includes('padding'), 'valid space token compiled');
  });
});
