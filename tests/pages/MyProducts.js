import { BasePage } from "./BasePage.js";

export class MyProductsPage extends BasePage {
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

    async navigateToAddProductPage() {
        await this.page.getByText('Add Product').click();
    }

    async checkAddProductNavigationSuccess() {
        const isAddProductVisible = await this.page.getByRole('heading', { name: 'ADD PRODUCT' }).isVisible();
        if (isAddProductVisible) {
            console.log("Navigated to 'Add Product' page successfully");
        } else {
            console.log("Couldn't navigate to 'Add Product' page");
        }
    }

    async createNewProduct(productName, productDescription, purchasePrice, rentPrice) {
        // product title
        await this.page.locator('input[name="title"]').fill(productName);
        
        // product category
        await this.page.getByRole('listbox').filter({ hasText: 'Sporting' }).click();
        await this.page.getByRole('option', { name: 'Electronics' }).click();

        // product description, purchase price, rent price
        await this.page.locator('textarea[name="description"]').fill(productDescription);
        await this.page.locator('input[name="purchase_price"]').fill(purchasePrice);
        await this.page.locator('input[name="rent_price"]').fill(rentPrice);

        // product rent terms
        await this.page.getByRole('listbox').filter({ hasText: 'DailyHourlyWeeklyMonthlyAnnually' }).click();
        await this.page.getByRole('option', { name: 'Daily' }).click();
        
        // Click on "Add Product" button
        await this.page.click('button:has-text("Add Product")');
    }

    // Verify product creation success
    async checkProductCreationSuccess() {
        const successMessage = await this.page.getByText('New Product added!').isVisible();
        if (successMessage) {
            console.log("Product was created successfully");
        } else {
            console.log("Product creation failed");
        }
    }

    // verify newly added product is visible in My Products list
    async viewNewlyAddedProduct(productName) {
        const isNewlyAddedProductVisible = await this.page.getByText(productName).first().isVisible();
        if (isNewlyAddedProductVisible) {
            console.log("Newly added product is clearly visible");
        } else {
            console.log("Newly added product is not visible");
        }
    }

    // View newly added product details
    async clickOnSpecificProduct(productName) {
        await this.page.getByText(productName).first().click();
    }

    async checkProductDetailsDisplayed(productName) {
        const isTitleVisible = await this.page.getByRole('heading', { name: 'EDIT PRODUCT' }).isVisible();
        const isProductNameVisible = await this.page.locator('input[name="title"]').inputValue() === productName;

        if (isTitleVisible && isProductNameVisible) {
            console.log("Product details are displayed");
        } else {
            console.log("Product details are not displayed");
        }
    }
}