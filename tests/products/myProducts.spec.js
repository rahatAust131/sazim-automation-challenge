import {test} from "@playwright/test";
import { MyProductsPage } from "../pages/MyProducts";

test.describe('My Products Tests', () => {
    test('Valid My Products', async ({ page }) => {
        const myProductsPage = new MyProductsPage(page);
        await myProductsPage.navigate();
        await myProductsPage.loginFirst();
        await myProductsPage.checkLoginSuccess();

        await myProductsPage.navigateToMyProductsPage();
        await myProductsPage.checkMyProductsNavigationSuccess();
    });
});