import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright config for browser-level JIT engine tests (Phase 3, item 3.1).
 * Chromium-only to keep the suite fast; visual snapshot tests live in
 * playwright.config.js. Serves the repo root so fixtures can reference
 * /dist/senangstart-css.min.js directly.
 */
export default defineConfig({
  testDir: './tests/jit-browser',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL: 'http://localhost:5174',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'npx http-server . -p 5174 -c-1 --silent',
    port: 5174,
    reuseExistingServer: !process.env.CI,
  },
});
