import { expect } from '@playwright/test';
import 'dotenv/config';

class Login {

    /**
   * @param {import('@playwright/test').Page} page
   */
    constructor(page) {
        this.page = page;
        this.findCruiseButton = this.page.locator(`(//a[normalize-space()='Find a Cruise'])[2]`);
    }
    
    async loginStageAs(username, password) {
        await this.page.goto(`https://${username}:${password}@stagewww.princess.com/`);
        await expect(this.findCruiseButton).toBeVisible();     
    }    

    async navigateToUat() {
        await this.page.goto(`https://uatwww.princess.com/en-us`);
        await expect(this.findCruiseButton).toBeVisible();     
    }

    async navigateToProduction() {
        await this.page.goto(`https://www.princess.com/`);
        await expect(this.findCruiseButton).toBeVisible();     
    }

    async clickFindCruiseButton(){
        await this.findCruiseButton.click();
    }

    async getLoginErrorMessage(expectedError) {
        // return await expect(this.loginErrorMessage).toContainText(expectedError);
    }
}

export default Login;