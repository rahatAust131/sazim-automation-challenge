import { MyProductsPage } from "../pages/MyProducts";
import { test } from "@playwright/test";

test.describe('CRUD Tests', () => {
    test('Create, Read, Update, Delete Products', async ({ page }) => {
        const myProductsPage = new MyProductsPage(page);
        await myProductsPage.navigate();
        await myProductsPage.loginFirst();
        await myProductsPage.checkLoginSuccess();

        await myProductsPage.navigateToMyProductsPage();
        await myProductsPage.checkMyProductsNavigationSuccess();
        
        // Navigate to Add Product Page
        await myProductsPage.navigateToAddProductPage();
        await myProductsPage.checkAddProductNavigationSuccess();

        // Create a new product
        await myProductsPage.createNewProduct("Test Product", "This is a test product", "19.99", "9.99");
        await myProductsPage.checkProductCreationSuccess();

        // Read product Card
        await myProductsPage.viewNewlyAddedProduct("Test Product");

        // Read product details
        await myProductsPage.clickOnSpecificProduct("Test Product");
        await myProductsPage.checkProductDetailsDisplayed("Test Product");
    });
});