import { BasePage } from "./BasePage";
import { LoginPage } from "./LoginPage";
import { expect } from "@playwright/test";

export class AccountSettingsPage extends BasePage {
    constructor(page) {
        super(page);
    }

    async loginFirst() {
        const loginPage = new LoginPage(this.page);
        await loginPage.login('testuser@teebay.com', '123456');
    }

    async navigateToAccountSettings() {
        await this.page.getByText('Account Settings').click();
    }

    async updateAccountDetails(newEmail, newPhoneNumber) {
        await this.page.fill('input[name="email"]', newEmail);
        await this.page.fill('input[name="phone_number"]', newPhoneNumber);
        await this.page.getByRole('button', { name: 'Update' }).click();
    }

    async checkUpdateSuccess() {
        const toast = this.page.getByRole('alert');

        // wait until toast appears
        await expect(toast).toBeVisible();

        // get the text content
        const toastText = await toast.textContent();

        // check and log
        if (toastText.includes('User updated')) {
            console.log('Update successful');
        } else {
            console.log('Update failed');
        }

    }
};