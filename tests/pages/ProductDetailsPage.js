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

    async checkProductDetailsDisplayed(productName) {
        const isTitleVisible = await this.page.getByText('Product Details').isVisible();
        const isProductNameVisible = await this.page.getByText(productName).isVisible();
        if (isTitleVisible && isProductNameVisible) {
            console.log("Product details are displayed");
        } else {
            console.log("Product details are not displayed");
        }
    }

    // Rent option visibility and functionality
    async chooseRentOptionAvailability() {
        const isRentButtonVisible = await this.page.getByRole('button', { name: 'Rent' }).isVisible();
        isRentButtonVisible ? console.log("Rent option is available") : console.log("Rent option is not available");
    }

    async clickOnRentButton() {
        await this.page.getByRole('button', { name: 'Rent' }).click();
    }

    async checkRentFormDisplayed() {
        const isModalVisible = await this.page.getByText("Start date").isVisible();
        isModalVisible ? console.log("Rent form is displayed") : console.log("Rent form is not displayed");
    }

    async fillUpRentInfo() {
        await this.page.locator('input[name="start_date"]').fill('2024-07-01');
        await this.page.locator('input[name="end_date"]').fill('2024-07-10');
    }

    async submitRentRequest() {
        await this.page.getByRole('button', { name: 'Book rent' }).click();
    }

    async checkRentRequestSuccess(productName) {
        const isProductNameVisible = await this.page.getByText(productName).isVisible();
        const rentHistoryText = await this.page.getByText('Rent History: (Aug 1st 2024 - Aug 10th 2024)').isVisible();
        if (isProductNameVisible && rentHistoryText) {
            console.log("Rent request successful");
        } else {
            console.log("Rent request failed");
        }
    }


    // Buy option visibility and functionality
    async chooseBuyOptionAvailability() {
        const isBuyButtonVisible = await this.page.getByRole('button', { name: 'Buy' }).isVisible();
        isBuyButtonVisible ? console.log("Buy option is available") : console.log("Buy option is not available");
    }

    async clickOnBuyButton() {
        await this.page.getByRole('button', { name: 'Buy' }).click();
    }

    async confirmBuyAction() {
        await this.page.getByRole('button', { name: 'Yes!' }).click();
    }

    async checkBuyRequestSuccess(productName) {
        const isProductNameVisible = await this.page.getByText(productName).isVisible();
        const isTitleVisible = await this.page.getByRole('heading', { name: 'PRODUCT DETAILS' }).isVisible();
        const isBuyButtonVisible = await this.page.getByRole('button', { name: 'Buy' }).isVisible();
        
        if (isTitleVisible) {
            if (isProductNameVisible && !isBuyButtonVisible) {
                console.log("Buy request successful");
            } else {
                console.log("Buy request failed");
            }
        }
    }
};