import {test} from "@playwright/test";
import { ProductDetailsPage } from "../pages/ProductDetailsPage";

test.describe('Product Details', () => {
    test('View Product Details', async ({ page }) => {
        const productDetailsPage = new ProductDetailsPage(page);
        await productDetailsPage.navigate();
        await productDetailsPage.loginFirst();
        await productDetailsPage.checkLoginSuccess();
        
        await productDetailsPage.navigateToproductDetailsPage();
        await productDetailsPage.checkNavigationSuccess();

        await productDetailsPage.clickOnSpecificProduct("Funshine bear");
        await productDetailsPage.checkProductDetailsDisplayed();
    });
});