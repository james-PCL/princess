import { Given, When, Then } from '@cucumber/cucumber';
//import cruises from '../../data/cruiseSearchMultiSelect.json' with { type: 'json' };

Then('The cruise search page will be displayed successfully', async function () {    
    //await this.pageFactory.cruiseSearch.cruiseTab.isVisible();
    await this.pageFactory.cruiseSearch.waitForFilterRefresh();
});

When('I search for a cruise by Destination {string}', async function (destinationName) {
    await this.pageFactory.cruiseSearch.ClickOnDestinationFilter();
    await this.pageFactory.cruiseSearch.SearchByDestination(destinationName);
});

When('I search for a cruise by Length {string}', async function (length) {
    await this.pageFactory.cruiseSearch.waitForFilterRefresh();
    await this.pageFactory.cruiseSearch.ClickOnLengthFilter();
    await this.pageFactory.cruiseSearch.SearchByLength(length);
});

When('I search for a cruise by Port Name {string}', async function (portName) {
    await this.pageFactory.cruiseSearch.ClickOnPortFilter();
    await this.pageFactory.cruiseSearch.SearchByPort(portName);
});

When('I search for a cruise by Ship Name {string}', async function (shipName) {
    await this.pageFactory.cruiseSearch.ClickOnShipFilter();
    await this.pageFactory.cruiseSearch.SearchByShip(shipName);
});

Then('The filtered view results will return {string} cruises', async function (expectedResult) {
    await this.pageFactory.cruiseSearch.FilterViewResults(expectedResult);
});

//TODO: finish step to import file so only needs one login in feature
Then('Filter and Verify', {timeout: 5000*60*1000}, async function () {
    const { default: cruises } = await import(process.env.TEST_DATA+'cruiseSearch.json', { with: { type: "json" } });
    await this.pageFactory.cruiseSearch.FilterAndVerify(cruises);    
});

//TODO: finish step to import file so only needs one login in feature
Then('Filter and Verify {string}', {timeout: 5000*60*1000}, async function (data) {
    const { default: cruises } = await import(process.env.TEST_DATA+'cruiseSearchMultiSelectTest.json', { with: { type: "json" } });
    await this.pageFactory.cruiseSearch.FilterAndVerifyWithData(cruises,data);    
});