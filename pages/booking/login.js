import { expect } from '@playwright/test';
import 'dotenv/config';

class Login {

    /**
   * @param {import('@playwright/test').Page} page
   */
    constructor(page) {
        this.page = page;
        this.findCruiseButton = this.page.locator(`(//a[normalize-space()='Find a Cruise'])[2]`);
        this.cookies = this.page.locator("//button[text()='Accept All Cookies']");
    }
    
    // async loginStageAs(username, password) {
    //     await this.page.goto(`https://${username}:${password}@stagewww.princess.com/`);
    //     await expect(this.findCruiseButton).toBeVisible();     
    // }    

    

    async getLoginErrorMessage(expectedError) {
        // return await expect(this.loginErrorMessage).toContainText(expectedError);
    }

    
      

}

export default Login;