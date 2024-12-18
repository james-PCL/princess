import { Given, When, Then } from '@cucumber/cucumber';
//import cruises from '../../data/cruises.json' with { type: 'json' };

Then('The cruise search page will be displayed successfully', async function () {    
    await this.pageFactory.cruiseSearch.cruiseTab.isVisible();
});

When('I search for a cruise by Destination {string}', async function (destinationName) {
    await this.pageFactory.cruiseSearch.SearchByDestination(destinationName);
});

When('I search for a cruise by Length {string}', async function (length) {
    await this.pageFactory.cruiseSearch.SearchByLength(length);
});

When('I search for a cruise by Port Name {string}', async function (portName) {
    await this.pageFactory.cruiseSearch.SearchByPort(portName);
});

When('I search for a cruise by Ship Name {string}', async function (shipName) {
    await this.pageFactory.cruiseSearch.SearchByShip(shipName);
});

Then('The filtered view results will return {string} cruises', async function (expectedResult) {
    await this.pageFactory.cruiseSearch.FilterViewResults(expectedResult);
});

//TODO: finish step to import file so only needs one login in feature
// Then('Each cruise filtered by Destination has the correct number of cruises returned', async function () {    
//     for (const cruise of cruises.Destination) {
//         await this.pageFactory.cruiseSearch.SearchByDestination(cruise.name);
//         await this.pageFactory.cruiseSearch.FilterViewResults(expectedResult);
//     }
// });