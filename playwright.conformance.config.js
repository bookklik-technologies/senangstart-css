// Tailwind → SenangStart conformance: converted markup must compute to the same styles.
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/conformance',
  testMatch: /.*\.spec\.js/,
  timeout: 30000,
  fullyParallel: false,
  retries: 0,
  reporter: [['list']],
  use: { baseURL: 'http://localhost:5175', headless: true },
  projects: [{ name: 'chromium', use: { browserName: 'chromium' } }],
  webServer: {
    command: 'npx http-server . -p 5175 -c-1 --silent',
    url: 'http://localhost:5175/package.json',
    reuseExistingServer: true,
    timeout: 20000
  }
});
