export class BasePage {
    constructor(page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto("https://ehsanur-rahman-sazim.github.io/teebay-buggy/");
    }
}
