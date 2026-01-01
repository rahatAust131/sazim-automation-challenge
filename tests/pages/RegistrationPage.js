import { BasePage } from "./BasePage";

export class RegistrationPage extends BasePage {
    constructor(page) {
        super(page);
    }

    async navigateToSignUpPage() {
        await this.page.getByRole('link', { name: 'Sign Up' }).click();
    }

    async fillUpForm(firstName, lastName, address, email, phoneNumber, password, confirmPassword) {
        await this.page.fill('input[name="firstName"]', firstName);
        await this.page.fill('input[name="lastName"]', lastName);
        await this.page.fill('input[name="address"]', address);
        await this.page.fill('input[name="email"]', email);
        await this.page.fill('input[name="phoneNumber"]', phoneNumber);
        await this.page.fill('input[name="password"]', password);
        await this.page.fill('input[name="confirmPassword"]', confirmPassword);
        await this.page.click('button[type="submit"]');
    }

    async checkRegistrationSuccess() {
        if (await this.page.isVisible('text=Registration Successful')) {
            console.log('Registration successful');
        } else {
            console.log('Registration failed');
        }
    }
}