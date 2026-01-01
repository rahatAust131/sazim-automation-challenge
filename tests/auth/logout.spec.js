import {test} from '@playwright/test';
import { LogoutPage } from '../pages/LogoutPage';

test.describe('Valid login and Logout', () => {
    test('Valid Login and Logout', async ({ page }) => {
        const logoutPage = new LogoutPage(page);
        await logoutPage.navigate();

        await logoutPage.loginFirst();
        await logoutPage.performLogout();
        await logoutPage.checkLogoutSuccess();
    });
});