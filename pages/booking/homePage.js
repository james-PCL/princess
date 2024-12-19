import { expect } from '@playwright/test';
import 'dotenv/config';

class HomePage {

    /**
   * @param {import('@playwright/test').Page} page
   */
    constructor(page) {
        this.page = page;
        this.findCruiseButton = this.page.locator(`(//a[normalize-space()='Find a Cruise'])[2]`);
        this.searchCruiseButton = this.page.locator(`(//a[normalize-space()='SEARCH CRUISES'])`);
        
    }

    async navigateToURL(){

        await this.page.goto(process.env.BASE_URL);
        await expect(this.findCruiseButton).toBeVisible();
        await this.acceptCookies(); 
    }

    async  acceptCookies() {
        try {
            if(this.cookies.isVisible()){
                await this.cookies.click(); 
            }
        } catch (error) {
            console.log('No cookie banner found.');
        }

      }
    
    async clickFindCruiseButton(){
        await this.findCruiseButton.click();
    }
    async clickSearchCruiseButton(){
        await this.searchCruiseButton.click();
    }

    async verifyLogin() {
        // Verify Username after login on homepage
    }

}

export default HomePage;