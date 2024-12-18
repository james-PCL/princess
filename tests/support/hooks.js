import { Before, After, setWorldConstructor, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, firefox, webkit, devices } from '@playwright/test';
import PageFactory from '../../pages/pageFactory.js';
import Screenshots from './screenshots.js';
import 'dotenv/config';

class CustomWorld {
  constructor({ attach }) {
    this.attach = attach;
    this.screenshots = new Screenshots();
  }
}

setDefaultTimeout(65000);
setWorldConstructor(CustomWorld);

Before(async function (scenario) {
     
  //Enable when running locally
  //this.screenshots.deleteScreenshots();
    
    switch (process.env.BROWSER) {
        case 'firefox':
            this.browser = await firefox.launch({ headless: false });
            this.page = await this.browser.newPage(); 
            break;
        case 'webkit':
            this.browser = await webkit.launch({ headless: false });
            this.page = await this.browser.newPage(); 
            break;
        default:
          this.browser = await chromium.launch({ headless: false });
          this.page = await this.browser.newPage();
          break;
    }   
    return this.pageFactory = new PageFactory(this.page);

});

After(async function (scenario) {

    await this.screenshots.createScreenshotOnFailure(scenario, this);
    await this.page.close();
    await this.browser.close();
  
});