import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Tests', () => {
    test('Valid Login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();

        // valid login credentials
        await loginPage.login('testuser@teebay.com', '123456');
        await loginPage.checkLoginSuccess();
    });

    test('Invalid Login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();

        // valid login credentials
        await loginPage.login('test@test.com', '123456');
        await loginPage.checkLoginSuccess();
    });
});