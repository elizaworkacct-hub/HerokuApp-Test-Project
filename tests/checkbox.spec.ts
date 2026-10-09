import { test, expect } from '@playwright/test';
import { urlData } from '../data/url_data';

test.describe('Checkbox', () => {
    test.only('checkbox interaction', async ({ page }) => {
      await page.goto(urlData.checkboxUrl); //verify that 2nd checkbox is checked
      await page.getByRole('checkbox').nth(1).uncheck(); //uncheck the 2nd checkbox
      await page.getByRole('checkbox').first().check(); //check the 1st checkbox
      await page.getByRole('checkbox').nth(1).check(); //return 2nd checkbox to initial state

      });
    })
