import {test} from '@playwright/test';
import { RegistrationPage } from '../pages/RegistrationPage';

test.describe('User Registration Tests', () => {
    test('Valid User Registration', async ({ page }) => {
        const registrationPage = new RegistrationPage(page);
        await registrationPage.navigate();
        await registrationPage.navigateToSignUpPage();

        // valid registration details
        await registrationPage.fillUpForm('John', 'Doe', '123 Main St', 'testuser@teebay.com', '1234567890', '123456', '123456');
        await registrationPage.checkRegistrationSuccess();
    });
});