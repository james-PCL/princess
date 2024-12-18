import HomePage from './booking/homePage.js';
import CruiseSearch from './booking/cruiseSearch.js';

class PageFactory {
  constructor(page) {
    this.page = page;
    this.homePage = new HomePage(page);
    this.cruiseSearch = new CruiseSearch(page);
  }
}

export default PageFactory;