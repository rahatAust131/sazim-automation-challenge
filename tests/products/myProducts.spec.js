import {test} from "@playwright/test";
import { ProductListPage } from "../pages/ProductListPage";

test.describe('My Products Tests', () => {
    test('Valid My Products', async ({ page }) => {
        const productListPage = new ProductListPage(page);
        await productListPage.navigate();
        await productListPage.loginFirst();
        await productListPage.checkLoginSuccess();
        
        await productListPage.navigateToMyProductsPage();
        await productListPage.checkMyProductsNavigationSuccess();
    });
});