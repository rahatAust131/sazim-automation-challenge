import {test} from '@playwright/test';
import { AccountSettingsPage } from '../pages/AccountSettingsPage';

test.describe('User Update Tests', () => {
    test('Valid User Update', async ({ page }) => {
        const accountSettingsPage = new AccountSettingsPage(page);
        await accountSettingsPage.navigate();
        await accountSettingsPage.loginFirst();
        await accountSettingsPage.navigateToAccountSettings();

        // valid account update details
        await accountSettingsPage.updateAccountDetails('newemail@teebay.com', '120987654321');
        await accountSettingsPage.checkUpdateSuccess();
    });
});