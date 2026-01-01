import {test} from "@playwright/test";
import { ProductDetailsPage } from "../pages/ProductDetailsPage";
const specificProductName = "Funshine bear";

test.describe('Product Rent/Buy Options', () => {
    test('View Product Rent/Buy Options', async ({ page }) => {
        const productDetailsPage = new ProductDetailsPage(page);
        await productDetailsPage.navigate();
        await productDetailsPage.loginFirst();
        
        await productDetailsPage.navigateToProductListPage();

        await productDetailsPage.clickOnSpecificProduct(specificProductName);
        await productDetailsPage.checkProductDetailsDisplayed(specificProductName);

        // Check Rent Option
        await productDetailsPage.chooseRentOptionAvailability();
        
        // If Rent option is available, proceed to test rent functionality
        await productDetailsPage.clickOnRentButton();
        await productDetailsPage.checkRentFormDisplayed();
        await productDetailsPage.fillUpRentInfo();
        await productDetailsPage.submitRentRequest();
        await productDetailsPage.checkRentRequestSuccess(specificProductName);

        // Check Buy Option
        await productDetailsPage.chooseBuyOptionAvailability();
        
        // If Buy option is available, proceed to test buy functionality
        await productDetailsPage.clickOnBuyButton();
        await productDetailsPage.confirmBuyAction();
        await productDetailsPage.checkBuyRequestSuccess(specificProductName);
    });
});