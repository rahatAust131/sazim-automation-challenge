import {test} from "@playwright/test";
import { ProductDetailsPage } from "../pages/ProductDetailsPage";
const specificProductName = "Funshine bear";

test.describe('Product Details', () => {
    test('View Product Details', async ({ page }) => {
        const productDetailsPage = new ProductDetailsPage(page);
        await productDetailsPage.navigate();
        await productDetailsPage.loginFirst();

        await productDetailsPage.navigateToProductListPage();
        await productDetailsPage.clickOnSpecificProduct(specificProductName);
        await productDetailsPage.checkProductDetailsDisplayed(specificProductName);
    });
});