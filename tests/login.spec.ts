import { test, expect } from '@playwright/test';
import { loginCredentials } from '../data/user_data';
import { urlData } from '../data/url_data';
import { invalidPassword, invalidUsername, login } from '../helpers/auth.helper';


test.describe('Login Tests', () => {
    test('open login page', async ({ page }) => {
      await page.goto(urlData.loginUrl);
      await expect(page).toHaveURL(/login/);
     });
    })

     test('valid login credentials', async ({ page }) => {
      await login(page);
      await expect(page).toHaveURL(/secure/); //validate successful login
    });   

    test('invalid username', async ({ page }) => {
        await invalidUsername(page);
        await page.getByText('Your username is invalid! ×').click(); //validate username is invalid
      });

    test('invalid password', async ({ page }) => {
        await invalidPassword(page);
        await page.getByText('Your password is invalid! ×').click();//validate password is invalid
      });

    test('empty credentials', async ({ page }) => {
        await page.goto(urlData.loginUrl);
        await page.getByRole('button', { name: ' Login' }).click();//click login with empty credentials
        await page.getByText('Your username is invalid! ×').click();//validation on empty credentials
      });


