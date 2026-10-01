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

// 0.4.0: styles live in a constructed CSSStyleSheet (adoptedStyleSheets); the
// runtime exposes the current CSS via window.SenangStart.css().
async function getJitStyle(page) {
  return page.evaluate(() => (window.SenangStart ? window.SenangStart.css() : null));
}

test.describe('JIT engine', () => {

  test('injects compiled CSS into <head> on load', async ({ page }) => {
    const consoleMessages = [];
    page.on('console', msg => consoleMessages.push(msg.text()));

    await page.goto('/tests/jit-browser/fixtures/basic.html');
    await page.waitForFunction(() => window.SenangStart && window.SenangStart.css());

    const css = await getJitStyle(page);
    expect(css).toBeTruthy();
    expect(css).toContain('[layout~="flex"]');
    expect(css).toContain('display: flex');
    expect(css).toContain('[space~="p:medium"]');
    expect(css).toContain('padding: var(--s-medium)');
    expect(css).toContain('[visual~="bg:primary"]');
    expect(css).toContain('background-color: var(--c-primary)');

    // The console banner is opt-in (config.debug); the public API signals readiness instead
    expect(await page.evaluate(() => typeof window.SenangStart.version)).toBe('string');
    expect(consoleMessages.some(m => /error/i.test(m))).toBe(false);
  });

  test('applies compiled styles to the page (computed style check)', async ({ page }) => {
    await page.goto('/tests/jit-browser/fixtures/basic.html');
    await page.waitForFunction(() => window.SenangStart && window.SenangStart.css());

    const display = await page.evaluate(() => getComputedStyle(document.getElementById('target')).display);
    expect(display).toBe('flex');
  });

  test('recompiles when DOM attributes change (MutationObserver)', async ({ page }) => {
    await page.goto('/tests/jit-browser/fixtures/basic.html');
    await page.waitForFunction(() => window.SenangStart && window.SenangStart.css());

    const cssBefore = await getJitStyle(page);
    expect(cssBefore).not.toContain('bg:red-500');

    await page.evaluate(() => {
      const el = document.createElement('div');
      el.id = 'dynamic';
      el.setAttribute('visual', 'bg:red-500');
      document.body.appendChild(el);
    });

    // Recompile happens in a microtask after the mutation batch
    await page.waitForFunction(() => window.SenangStart.css().includes('bg:red-500'), { timeout: 5000 });

    const cssAfter = await getJitStyle(page);
    expect(cssAfter).toContain('[visual~="bg:red-500"]');
    expect(cssAfter).toContain('--c-red-500');
  });

  test('does not recompile when the token set is unchanged', async ({ page }) => {
    await page.goto('/tests/jit-browser/fixtures/basic.html');
    await page.waitForFunction(() => window.SenangStart && window.SenangStart.css());

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
    await page.waitForFunction(() => window.SenangStart && window.SenangStart.css());

    const css = await getJitStyle(page);
    expect(css).toContain('--c-brand: #123456');
    expect(css).toContain('--s-huge: 96px');
    expect(css).toContain('background-color: var(--c-brand)');
    // Defaults still present alongside the custom theme
    expect(css).toContain('--c-primary');
  });

  test('falls back to defaults on invalid config JSON', async ({ page }) => {
    await page.goto('/tests/jit-browser/fixtures/invalid-config.html');
    await page.waitForFunction(() => window.SenangStart && window.SenangStart.css());

    const css = await getJitStyle(page);
    expect(css).toContain('[layout~="flex"]');
    expect(css).toContain('--c-primary');
  });

  test.describe('XSS sanitization', () => {
    test('neutralizes javascript: URLs, expression(), and event handlers', async ({ page }) => {
      await page.goto('/tests/jit-browser/fixtures/hostile.html');
      await page.waitForFunction(() => window.SenangStart && window.SenangStart.css());

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
      await page.waitForFunction(() => window.SenangStart && window.SenangStart.css());

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
      await page.waitForFunction(() => window.SenangStart && window.SenangStart.css());

      const css = await getJitStyle(page);
      expect(css).not.toMatch(/<script/i);
    });
  });
});

test.describe('JIT engine — incremental + shadow DOM (0.4.0)', () => {
  test('styles elements inside a declarative shadow root', async ({ page }) => {
    await page.goto('/tests/jit-browser/fixtures/shadow.html');
    await page.waitForFunction(() => window.SenangStart && window.SenangStart.css().includes('bg:blue-500'));
    const padding = await page.evaluate(() => {
      const inner = document.getElementById('declarative').shadowRoot.getElementById('inner');
      return getComputedStyle(inner).paddingTop;
    });
    expect(padding).toBe('48px'); // --s-big
  });

  test('styles a shadow root attached after load, and content added to it', async ({ page }) => {
    await page.goto('/tests/jit-browser/fixtures/shadow.html');
    await page.waitForFunction(() => window.SenangStart && window.SenangStart.css());
    await page.evaluate(() => {
      const host = document.getElementById('late');
      const root = host.attachShadow({ mode: 'open' });
      root.innerHTML = '<span id="deep" space="m:giant" visual="text:red-500">late</span>';
    });
    await page.waitForFunction(() => window.SenangStart.css().includes('m:giant'), { timeout: 3000 });
    const [margin, color] = await page.evaluate(() => {
      const el = document.getElementById('late').shadowRoot.getElementById('deep');
      const cs = getComputedStyle(el);
      return [cs.marginTop, cs.color];
    });
    expect(margin).toBe('96px'); // --s-giant
    expect(color).toBe('rgb(239, 68, 68)');
  });

  test('a newly inserted element is styled before the next frame (no debounce)', async ({ page }) => {
    await page.goto('/tests/jit-browser/fixtures/basic.html');
    await page.waitForFunction(() => window.SenangStart && window.SenangStart.css());
    const paddingAtFirstFrame = await page.evaluate(() => new Promise((resolve) => {
      const el = document.createElement('div');
      el.setAttribute('space', 'p:giant');
      document.body.appendChild(el);
      requestAnimationFrame(() => resolve(getComputedStyle(el).paddingTop));
    }));
    expect(paddingAtFirstFrame).toBe('96px');
  });

  test('recompiles are cheap: 300 insertions of known tokens do not grow the stylesheet or stall', async ({ page }) => {
    await page.goto('/tests/jit-browser/fixtures/basic.html');
    await page.waitForFunction(() => window.SenangStart && window.SenangStart.css());
    const { before, after, ms } = await page.evaluate(async () => {
      const before = window.SenangStart.css().length;
      const t = performance.now();
      for (let i = 0; i < 300; i++) {
        const el = document.createElement('div');
        el.setAttribute('space', 'p:medium');
        el.setAttribute('visual', 'bg:primary');
        document.body.appendChild(el);
        await Promise.resolve();
      }
      return { before, after: window.SenangStart.css().length, ms: performance.now() - t };
    });
    expect(after).toBe(before);
    expect(ms).toBeLessThan(1500);
  });
});

test.describe('JIT engine — group specificity (0.4.0)', () => {
  test('a disabled child keeps its disabled: style while its hoverable parent is hovered', async ({ page }) => {
    await page.goto('/tests/jit-browser/fixtures/basic.html');
    await page.waitForFunction(() => window.SenangStart && window.SenangStart.css());
    await page.evaluate(() => {
      document.body.insertAdjacentHTML('beforeend',
        '<div id="card" layout="hoverable" space="p:big"><button id="btn" disabled visual="hover:text:white disabled:text:gray-400 bg:primary">Buy</button><span id="live" visual="hover:text:white">live</span></div>');
    });
    await page.waitForFunction(() => window.SenangStart.css().includes('disabled:text:gray-400'));
    await page.hover('#card');
    const [btn, live] = await page.evaluate(() => [getComputedStyle(document.getElementById('btn')).color, getComputedStyle(document.getElementById('live')).color]);
    expect(btn).toBe('rgb(156, 163, 175)');   // gray-400: disabled wins
    expect(live).toBe('rgb(255, 255, 255)');  // group hover still applies to enabled children
  });
});
