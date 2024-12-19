import { expect } from '@playwright/test';
import 'dotenv/config';
let timeoutMilliseconds = 60000;

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
        this.resultsFound = this.page.locator('//span[@class=\'white gotham-xn-book\']');
        this.resetFilter = this.page.locator(`.plain-text-btn.col-xs-pad-5.invert-decoration`);
    }

    async FilterViewResults(expectedResult){
        await expect(this.filterViewResults).toBeVisible({ timeout: timeoutMilliseconds });
        await expect(this.filterViewResults).toContainText(expectedResult);
    }

    async ResetFilter(){
        await this.resetFilter.click();
        await this.waitForFilterRefresh();
        //await expect(this.resultsFound).toBeVisible({ timeout: timeoutMilliseconds });
    }

    async ClickOnDestinationFilter() {
        await expect(this.cruiseTab).toBeVisible({ timeout: timeoutMilliseconds });
        await this.filterDestinations.click();
    }
    async ClickOnPortFilter() {
        await expect(this.cruiseTab).toBeVisible({ timeout: timeoutMilliseconds });
        await this.filterPort.click();
    }
    async ClickOnShipFilter() {
        await expect(this.cruiseTab).toBeVisible({ timeout: timeoutMilliseconds });
        await this.filterShips.click();
    }

    async ClickOnLengthFilter() {
        await expect(this.cruiseTab).toBeVisible({ timeout: timeoutMilliseconds });
        await this.filterDate.click();
    }

    async waitForFilterRefresh(){
        await expect(this.resultsFound).toBeVisible({ timeout: timeoutMilliseconds });
    }
    

    async SearchByDestination(destinationName) {
        await expect(this.page.locator(`button[aria-label*='${destinationName}']`)).toBeVisible({ timeout: 10000 });
        await this.page.locator(`button[aria-label*='${destinationName}']`).click();
    }

    async SearchByLength(length) {
        await expect(this.page.locator(`button[aria-label*='${length}']`)).toBeVisible({ timeout: 10000 });
        await this.page.locator(`button[aria-label*='${length}']`).click();
    }

    async SearchByPort(portName) {
        await expect(this.page.locator(`button[aria-label*='${portName}']`)).toBeVisible({ timeout: 10000 });
        await this.page.locator(`button[aria-label*='${portName}']`).click();
    }

    async SearchByShip(shipName) {
        await expect(this.page.locator(`button[aria-label*='${shipName}']`)).toBeVisible({ timeout: 10000 });
        await this.page.locator(`button[aria-label*='${shipName}']`).click();
    }

    async FilterAndVerify(cruises){
        let result=true;
        let e="";
        for (const cruise of cruises.data) {
            try{
                this.Filter(cruise);   
                await this.FilterViewResults(cruise.ExpectedCruises);
            }catch(error){
                result=false;
                e=e+error.toString();  
                console.log(error);                    
            }
            await this.ResetFilter();
            
        }
        await expect(e.toString()).toStrictEqual("");

    }

    async FilterAndVerifyWithData(cruises,data){
           
            this.Filter(cruises[data])
            await this.FilterViewResults(cruises[data].ExpectedCruises);
            await this.ResetFilter();
        }

        async Filter(cruise){

            if(cruise.hasOwnProperty("Destination")){  
                    await this.ClickOnDestinationFilter();          
                    if(Array.isArray(cruise.Destination)){
                        for(let dest of cruise.Destination){
                            await this.SearchByDestination(dest);
    
                        }
                    }
                    else
                    await this.SearchByDestination(cruise.Destination);
                }
                if(cruise.hasOwnProperty("Port")){  
                        await this.ClickOnPortFilter();          
                        if(Array.isArray(cruise.Port)){
                            for(let port of cruise.Port){
                                await this.SearchByPort(port);    
                            }
                        }
                        else
                        await this.SearchByPort(cruise.Port);
                }       
                if(cruise.hasOwnProperty("Length")){  
                    await this.ClickOnLengthFilter();          
                    if(Array.isArray(cruise.Length)){
                        for(let len of cruise.Length){
                            await this.SearchByLength(len);
                        }
                    }
                    else
                    await this.SearchByLength(cruise.Length);
                } 
                if(cruise.hasOwnProperty("Ship")){  
                    await this.ClickOnShipFilter();          
                    if(Array.isArray(cruise.Ship)){
                        for(let ship of cruise.Ship){
                            await this.SearchByShip(ship);
                        }
                    }
                    else
                    await this.SearchByShip(cruise.Ship);
                }      
            }
    
}

export default CruiseSearch;