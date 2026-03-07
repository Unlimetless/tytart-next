import { test, expect } from '@playwright/test';

test('Anasayfa testi - Navigasyon ve Hero kontrolü', async ({ page }) => {
    await page.goto('/');

    // Navigasyon kontrolü
    await expect(page.getByText('TytArt')).toBeVisible();
    await expect(page.getByText('Hizmetler')).toBeVisible();

    // Hero bölümü kontrolü
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Hayallerinizi');

    // Mobil menü testi (Viewport küçükken)
    await page.setViewportSize({ width: 375, height: 667 });
    await page.locator('button').filter({ has: page.locator('svg.lucide-menu') }).click();
    await expect(page.getByText('Anasayfa')).toBeVisible();
});

test('Performans testi - Navigasyon akıcılığı', async ({ page }) => {
    await page.goto('/');
    const startTime = Date.now();
    await page.click('text=Hizmetler');
    const endTime = Date.now();
    expect(endTime - startTime).toBeLessThan(500); // 500ms'den hızlı olmalı
});
