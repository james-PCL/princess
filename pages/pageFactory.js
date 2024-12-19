import Login from './booking/login.js';
import CruiseSearch from './booking/cruiseSearch.js';
import HomePage from './booking/homePage.js';

class PageFactory {
  constructor(page) {
    this.page = page;
    this.login = new Login(page);
    this.cruiseSearch = new CruiseSearch(page);
    this.homePage = new HomePage(page);
  }
}

export default PageFactory;