import { test, expect } from '@playwright/test';
import { urlData } from '../data/url_data';

test.describe('Dynamic Content Comparison', () => {
  test('Compare Content', async ({ page }) => {
    await page.goto(urlData.dynamicUrl);
    const initialContents = await page.locator('.large-10').allTextContents();  // get initial content
    await page.getByRole('link', { name: 'click here' }).click(); //click to refresh
    const refreshedContents = await page.locator('.large-10').allTextContents(); // get current content

    // Compare initial vs current
    for (let i = 0; i < initialContents.length; i++) {
      console.log(`Block ${i + 1} initial: ${initialContents[i]}`);
      console.log(`Block ${i + 1} refreshed: ${refreshedContents[i]}`);

    await expect(refreshedContents[i]).not.toContainEqual(initialContents[i]); //validate content has changed
    }
  });
});
