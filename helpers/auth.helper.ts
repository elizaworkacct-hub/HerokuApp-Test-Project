import { Page } from '@playwright/test';
import { loginCredentials } from '../data/user_data';
import { urlData } from '../data/url_data';

export async function login(page: Page) {
    await page.goto(urlData.loginUrl);
    
    await page.getByLabel('Username').fill(loginCredentials.validUsername);
    await page.getByLabel('Password').fill(loginCredentials.validPassword);

    await page.getByRole('button', { name: ' Login' }).click();

}

export async function invalidUsername(page: Page) {
    await page.goto(urlData.loginUrl);
    
    await page.getByLabel('Username').fill(loginCredentials.invalidUsername);
    await page.getByLabel('Password').fill(loginCredentials.validPassword);
    
    await page.getByRole('button', { name: ' Login' }).click();
}
   
export async function invalidPassword(page: Page) {
    await page.goto(urlData.loginUrl);
    
    await page.getByLabel('Username').fill(loginCredentials.validUsername);
    await page.getByLabel('Password').fill(loginCredentials.invalidPassword);
    
    await page.getByRole('button', { name: ' Login' }).click();
}
  