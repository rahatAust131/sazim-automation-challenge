import { BasePage } from "./BasePage";
import {test} from "@playwright/test";

export class ProductDetailsPage extends BasePage {
    constructor(page) {
        super(page);
    }

    async loginFirst() {
        // perform login
        await this.page.fill('input[name="email"]', 'testuser@teebay.com');
        await this.page.fill('input[name="password"]', '123456');
        await this.page.click('button:has-text("Sign In")');
    }

    async navigateToProductListPage() {
        await this.page.getByText('Browse Products').click();
    }

    async clickOnSpecificProduct(productName) {
        await this.page.getByText(productName).click();
    }

    async checkProductDetailsDisplayed() {
        const productDetails = await this.page.getByText('Product Details').isVisible();
        if (productDetails) {
            console.log("Product details are displayed");
        } else {
            console.log("Product details are not displayed");
        }
    }
};