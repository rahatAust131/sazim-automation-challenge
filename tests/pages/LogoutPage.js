import { BasePage } from "./BasePage";

export class LogoutPage extends BasePage {
    constructor(page) {
        super(page);
    }

    async loginFirst() {
        // perform login
        await this.page.fill('input[name="email"]', 'testuser@teebay.com');
        await this.page.fill('input[name="password"]', '123456');
        await this.page.click('button:has-text("Sign In")');
    }

    async performLogout() {
        // perform logout
        await this.page.click('text=Logout');
        // confirm logout action
        await this.page.click('button:has-text("Yes I am sure!")');
    }

    async checkLogoutSuccess() {
        // verify logout success
        if(await this.page.isVisible('text=SIGN IN')) {
            console.log('Logout successful');
        } else {
            console.log('Logout failed');
        }
    }
}