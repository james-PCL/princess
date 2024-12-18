import { Given, When, Then } from '@cucumber/cucumber';

Given('I login successfully to stage as {string} with password {string}', async function (username, password) {
    await this.pageFactory.login.loginStageAs(username, password);
});

Given('I navigate successfully to production', async function () {
    await this.pageFactory.login.navigateToProduction();
});

When('I click the Find Cruise button', async function () {
    await this.pageFactory.login.clickFindCruiseButton();
});

Then('The cruise search page will be displayed successfully', async function () {    

    try {
        
    } catch (error) {
        
    }

    await this.pageFactory.cruiseSearch.cruiseTab.isVisible();
});
