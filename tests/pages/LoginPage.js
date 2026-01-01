import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
    constructor(page) {
        super(page);
    }

    async login(email, password) {
        await this.page.fill('input[name="email"]', email);
        await this.page.fill('input[name="password"]', password);
        await this.page.click('button[type="submit"]');
    }

    async checkLoginSuccess() {
        if(await this.page.isVisible('text=Logout')) {
            console.log('Login successful');
        } else {
            console.log('Login failed');
        }
    }
}
