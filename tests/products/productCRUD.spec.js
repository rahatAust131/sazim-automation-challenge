import { ProductListPage } from "../pages/ProductListPage";
import { test } from "@playwright/test";

test.describe('CRUD Tests', () => {
    test('Create, Read, Update, Delete Products', async ({ page }) => {
        const productListPage = new ProductListPage(page);
        await productListPage.navigate();
        await productListPage.loginFirst();
        await productListPage.checkLoginSuccess();
        
        await productListPage.navigateToProductListPage();
        await productListPage.checkNavigationSuccess();

        
    });
});