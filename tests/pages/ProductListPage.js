import { BasePage } from "./BasePage";

export class ProductListPage extends BasePage {
    constructor(page) {
        super(page);
    }

    async loginFirst() {
        // perform login
        await this.page.fill('input[name="email"]', 'testuser@teebay.com');
        await this.page.fill('input[name="password"]', '123456');
        await this.page.click('button:has-text("Sign In")');
    }

    async checkLoginSuccess() {
        // verify login success
        if(await this.page.isVisible('text=Logout')) {
            console.log('Login successful');
        } else {
            console.log('Login failed');
        }
    }

    async navigateToProductListPage() {
        await this.page.getByText('Browse Products').click();
    }

    async checkNavigationSuccess() {
        const products = await this.page.getByText('SEARCH').isVisible();
        if (products) {
            console.log("Navigated to 'Browse Products' page successfully");
        } else {
            console.log("Couldn't navigate to 'Browse Products' page");
        }
    }

    async navigateToMyProductsPage() {
        await this.page.getByText('My Products').click();
    }

    async checkMyProductsNavigationSuccess() {
        const myProducts = await this.page.getByText('MY PRODUCTS').isVisible();
        if (myProducts) {
            console.log("Navigated to 'My Products' page successfully");
        } else {
            console.log("Couldn't navigate to 'My Products' page");
        }
    }
}