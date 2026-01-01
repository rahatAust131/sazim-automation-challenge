import { ProductListPage } from "../pages/ProductListPage";
import { test } from "@playwright/test";

test.describe('Browse Products Tests', () => {
    test('Valid Browse Products', async ({ page }) => {
        const productListPage = new ProductListPage(page);
        await productListPage.navigate();
        await productListPage.loginFirst();
        await productListPage.checkLoginSuccess();
        
        await productListPage.navigateToProductListPage();
        await productListPage.checkNavigationSuccess();
    });
});