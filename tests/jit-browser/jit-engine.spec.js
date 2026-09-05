/**
 * SenangStart CSS - JIT Engine Browser Tests (Phase 3, item 3.1)
 *
 * DOM-level tests for src/cdn/senangstart-engine.js (bundled to
 * dist/senangstart-css.min.js), which previously had no direct test coverage:
 *   - style injection into <head>
 *   - MutationObserver-driven recompilation
 *   - <script type="senangstart/config"> merging (valid + invalid JSON)
 *   - attribute sanitization against XSS vectors
 */
import { test, expect } from '@playwright/test';

async function getJitStyle(page) {
  return page.evaluate(() => {
    const el = document.getElementById('senangstart-jit');
    return el ? el.textContent : null;
  });
}

test.describe('JIT engine', () => {

  test('injects compiled CSS into <head> on load', async ({ page }) => {
    const consoleMessages = [];
    page.on('console', msg => consoleMessages.push(msg.text()));

    await page.goto('/tests/jit-browser/fixtures/basic.html');
    await page.waitForFunction(() => document.getElementById('senangstart-jit'));

    const css = await getJitStyle(page);
    expect(css).toBeTruthy();
    expect(css).toContain('[layout~="flex"]');
    expect(css).toContain('display: flex');
    expect(css).toContain('[space~="p:medium"]');
    expect(css).toContain('padding: var(--s-medium)');
    expect(css).toContain('[visual~="bg:primary"]');
    expect(css).toContain('background-color: var(--c-primary)');

    expect(consoleMessages.some(m => m.includes('Just-in-Time runtime initialized'))).toBe(true);
  });

  test('applies compiled styles to the page (computed style check)', async ({ page }) => {
    await page.goto('/tests/jit-browser/fixtures/basic.html');
    await page.waitForFunction(() => document.getElementById('senangstart-jit'));

    const display = await page.evaluate(() => getComputedStyle(document.getElementById('target')).display);
    expect(display).toBe('flex');
  });

  test('recompiles when DOM attributes change (MutationObserver)', async ({ page }) => {
    await page.goto('/tests/jit-browser/fixtures/basic.html');
    await page.waitForFunction(() => document.getElementById('senangstart-jit'));

    const cssBefore = await getJitStyle(page);
    expect(cssBefore).not.toContain('bg:red-500');

    await page.evaluate(() => {
      const el = document.createElement('div');
      el.id = 'dynamic';
      el.setAttribute('visual', 'bg:red-500');
      document.body.appendChild(el);
    });

    // Wait past the 200ms MutationObserver debounce
    await page.waitForFunction(() => {
      const el = document.getElementById('senangstart-jit');
      return el && el.textContent.includes('bg:red-500');
    }, { timeout: 5000 });

    const cssAfter = await getJitStyle(page);
    expect(cssAfter).toContain('[visual~="bg:red-500"]');
    expect(cssAfter).toContain('--c-red-500');
  });

  test('does not recompile when the token set is unchanged', async ({ page }) => {
    await page.goto('/tests/jit-browser/fixtures/basic.html');
    await page.waitForFunction(() => document.getElementById('senangstart-jit'));

    const cssBefore = await getJitStyle(page);

    // Re-set the same attribute value — token set identical, no recompile expected
    await page.evaluate(() => {
      document.getElementById('target').setAttribute('layout', 'flex col center');
    });
    await page.waitForTimeout(500);

    const cssAfter = await getJitStyle(page);
    expect(cssAfter).toBe(cssBefore);
  });

  test('merges <script type="senangstart/config"> theme with defaults', async ({ page }) => {
    await page.goto('/tests/jit-browser/fixtures/config.html');
    await page.waitForFunction(() => document.getElementById('senangstart-jit'));

    const css = await getJitStyle(page);
    expect(css).toContain('--c-brand: #123456');
    expect(css).toContain('--s-huge: 96px');
    expect(css).toContain('background-color: var(--c-brand)');
    // Defaults still present alongside the custom theme
    expect(css).toContain('--c-primary');
  });

  test('falls back to defaults on invalid config JSON', async ({ page }) => {
    await page.goto('/tests/jit-browser/fixtures/invalid-config.html');
    await page.waitForFunction(() => document.getElementById('senangstart-jit'));

    const css = await getJitStyle(page);
    expect(css).toContain('[layout~="flex"]');
    expect(css).toContain('--c-primary');
  });

  test.describe('XSS sanitization', () => {
    test('neutralizes javascript: URLs, expression(), and event handlers', async ({ page }) => {
      await page.goto('/tests/jit-browser/fixtures/hostile.html');
      await page.waitForFunction(() => document.getElementById('senangstart-jit'));

      const css = await getJitStyle(page);
      expect(css).toBeTruthy();

      // Dangerous payloads must never reach the stylesheet
      expect(css).not.toContain('javascript:');
      expect(css).not.toContain('alert(');
      expect(css).not.toContain('expression(');
      expect(css).not.toContain('document.cookie');

      // Semicolons must be defused (statement injection)
      expect(css).not.toContain('bg:red;');
    });

    test('keeps the runtime functional alongside hostile attributes', async ({ page }) => {
      await page.goto('/tests/jit-browser/fixtures/hostile.html');
      await page.waitForFunction(() => document.getElementById('senangstart-jit'));

      const css = await getJitStyle(page);
      expect(css).toContain('[visual~="bg:white"]');
      expect(css).toContain('[layout~="flex"]');

      // No failure banner
      const bannerCount = await page.evaluate(() =>
        document.body.querySelectorAll('div[style*="background:#fef2f2"]').length
      );
      expect(bannerCount).toBe(0);
    });

    test('strips script tags from any generated output', async ({ page }) => {
      await page.goto('/tests/jit-browser/fixtures/hostile.html');
      await page.waitForFunction(() => document.getElementById('senangstart-jit'));

      const css = await getJitStyle(page);
      expect(css).not.toMatch(/<script/i);
    });
  });
});
