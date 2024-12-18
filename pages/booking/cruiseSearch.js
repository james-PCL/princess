import { expect } from '@playwright/test';
import 'dotenv/config';
let timeoutMilliseconds = 45000;

class CruiseSearch {

    /**
   * @param {import('@playwright/test').Page} page
   */
    constructor(page) {
        this.page = page;
        this.cruiseTab = this.page.locator('#cruises-tab');
        this.filterDestinations = this.page.locator('#filters-tabs-destinations');
        this.filterDate = this.page.locator('#filters-tabs-date');
        this.filterPort = this.page.locator('#filters-tabs-port');
        this.filterShips = this.page.locator('#filters-tabs-ship');

        this.filterViewResults = this.page.locator('#filters-tabs-view-results');
        this.resetFilter = this.page.locator(`.plain-text-btn.col-xs-pad-5.invert-decoration`);
    }

    async FilterViewResults(expectedResult){
        await expect(this.filterViewResults).toBeVisible({ timeout: timeoutMilliseconds });
        await expect(this.filterViewResults).toContainText(expectedResult);
        await this.resetFilter.click();
    }

    async SearchByDestination(destinationName) {
        await expect(this.cruiseTab).toBeVisible({ timeout: timeoutMilliseconds });
        await this.filterDestinations.click();
        await expect(this.page.locator(`button[aria-label*='${destinationName}']`)).toBeVisible({ timeout: 10000 });
        await this.page.locator(`button[aria-label*='${destinationName}']`).click();
    }
    
    async SearchByLength(length) {
        await expect(this.cruiseTab).toBeVisible({ timeout: timeoutMilliseconds });
        await this.filterDate.click();
        await expect(this.page.locator(`button[aria-label*='${length}']`)).toBeVisible({ timeout: 10000 });
        await this.page.locator(`button[aria-label*='${length}']`).click();
    }

    async SearchByPort(portName) {
        await expect(this.cruiseTab).toBeVisible({ timeout: timeoutMilliseconds });
        await this.filterPort.click();
        await expect(this.page.locator(`button[aria-label*='${portName}']`)).toBeVisible({ timeout: 10000 });
        await this.page.locator(`button[aria-label*='${portName}']`).click();
    }

    async SearchByShip(shipName) {
        await expect(this.cruiseTab).toBeVisible({ timeout: timeoutMilliseconds });
        await this.filterShips.click();
        await expect(this.page.locator(`button[aria-label*='${shipName}']`)).toBeVisible({ timeout: 10000 });
        await this.page.locator(`button[aria-label*='${shipName}']`).click();
    }
}

export default CruiseSearch;