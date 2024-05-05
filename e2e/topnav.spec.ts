import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/#/home');
  await expect(page).toHaveTitle(/Welcome : weestoater/);
});

test('get about link', async ({ page }) => {
  await page.goto('http://localhost:5173/#/home');
  await page.getByRole('link', { name: 'About' }).click();
  await expect(page.getByRole('heading', { name: 'About' })).toBeVisible();
});

test('get A11y link', async ({ page }) => {
  await page.goto('http://localhost:5173/#/home');
  await page.getByRole('link', { name: 'A11y' }).click();
  await expect(page.getByRole('heading', { name: 'Accessibility (a11y)' })).toBeVisible();
});

test('get Agile link', async ({ page }) => {
  await page.goto('http://localhost:5173/#/home');
  await page.getByRole('link', { name: 'Agile' }).click();
  await expect(page.getByRole('heading', { name: 'Agile articles' })).toBeVisible();
});

test('get Football link', async ({ page }) => {
  await page.goto('http://localhost:5173/#/home');
  await page.getByRole('link', { name: 'Football' }).click();
  await expect(page.getByRole('heading', { name: 'Football' })).toBeVisible();
});

test('get React link', async ({ page }) => {
  await page.goto('http://localhost:5173/#/home');
  await page.getByRole('link', { name: 'React' }).click();
  await expect(page.getByRole('heading', { name: 'React articles' })).toBeVisible();
});