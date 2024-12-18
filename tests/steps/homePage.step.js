import { Given, When, Then } from '@cucumber/cucumber';

Given('I navigate to the URL', async function () {
    await this.pageFactory.homePage.navigateToURL();       
});

When('I click the Find Cruise button', async function () {
    await this.pageFactory.homePage.clickFindCruiseButton();
});

When('I click the Search Cruises button', async function () {
    await this.pageFactory.homePage.clickSearchCruiseButton();
});