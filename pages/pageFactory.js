import Login from './booking/login.js';
import CruiseSearch from './booking/cruiseSearch.js';

class PageFactory {
  constructor(page) {
    this.page = page;
    this.login = new Login(page);
    this.cruiseSearch = new CruiseSearch(page);
  }
}

export default PageFactory;