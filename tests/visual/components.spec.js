import { test, expect } from '@playwright/test';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const fixtureHTML = readFileSync(join(__dirname, 'fixture.html'), 'utf-8');

test.describe('SenangStart CSS Visual Regression', () => {

  test('card component renders correctly', async ({ page }) => {
    await page.setContent(fixtureHTML);
    const card = page.locator('[space~="max-w:[400px]"]').first();
    await expect(card).toBeVisible();
    await expect(card).toHaveScreenshot('card-component.png', {
      maxDiffPixelRatio: 0.05,
    });
  });

  test('grid component renders correctly', async ({ page }) => {
    await page.setContent(fixtureHTML);
    const grid = page.locator('[layout~="grid"]').first();
    await expect(grid).toBeVisible();
    await expect(grid).toHaveScreenshot('grid-component.png', {
      maxDiffPixelRatio: 0.05,
    });
  });

  test('navigation bar renders correctly', async ({ page }) => {
    await page.setContent(fixtureHTML);
    const nav = page.locator('nav').first();
    await expect(nav).toBeVisible();
    await expect(nav).toHaveScreenshot('nav-component.png', {
      maxDiffPixelRatio: 0.05,
    });
  });

  test('form component renders correctly', async ({ page }) => {
    await page.setContent(fixtureHTML);
    const form = page.locator('form').first();
    await expect(form).toBeVisible();
    await expect(form).toHaveScreenshot('form-component.png', {
      maxDiffPixelRatio: 0.05,
    });
  });

  test('color badges render correctly', async ({ page }) => {
    await page.setContent(fixtureHTML);
    const badges = page.locator('[space~="max-w:[800px]"]').last();
    await expect(badges).toBeVisible();
    await expect(badges).toHaveScreenshot('badges-component.png', {
      maxDiffPixelRatio: 0.05,
    });
  });

  test('full page layout', async ({ page }) => {
    await page.setContent(fixtureHTML);
    await expect(page).toHaveScreenshot('full-page.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.05,
    });
  });

});
