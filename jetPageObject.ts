import {By} from 'selenium-webdriver';
import {BasePage} from './basePage';
export class jetsPageObject extends BasePage {
    dearSubaru: By=By.xpath('(//span[text()="Dear Subaru"])[3]');
    findRetailer: By=By.xpath('(//a[@class="main-navigation__nav-group-link nav-primary no-popup"])[2]');
    zipCode: By=By.xpath('(//input[@class="form-input--field pac-target-input"])[2]');
    preferRetailer: By=By.xpath('(//a[@class="btn btn-link cta cta--text-link"])[1]');
    contactAndServices: By=By.xpath('(//span[@class="structure_504_accordion__button__plus-icon_section__plus-icon plus-icon"])[1]');
    hybridRetailer: By=By.xpath('(//span[@class="form-checkbox--checkmark"])[14]');
    preOwnedRetailer: By=By.xpath('(//span[@class="form-checkbox--checkmark"])[15]');
    onlineSchedule: By=By.xpath('(//span[@class="form-checkbox--checkmark"])[16]');
    serviceDept: By=By.xpath('(//span[@class="form-checkbox--checkmark"])[17]');
    allServices: By=By.xpath('(//span[@class="form-checkbox--checkmark"])[13]');
    findRetailerResult: By=By.xpath('//div[@class="findretailer__results"]');
    subieGear: By=By.xpath('//a[@data-id="Subaru Gear"]');
    searchBar: By=By.xpath('(//input[@class="typeahead tt-input"])[1]');
    techCloth: By=By.xpath('//img[@alt="SMSUSA Tech Cleaning Cloth"]');
    addToCart: By=By.xpath('//button[@data-test-selector="btnAddToCart"]');
    cartIcon: By=By.xpath('(//span[@class="icon-shopping-cart"])[1]');
    checkout: By=By.xpath('(//a[@data-test-selector="btnCheckout"])[1]');
    storyAdventure: By=By.xpath('//span[@data-soa-analytics-link-name="908_dear_subaru:category-filter_adventure_id::adventure"]')
    popUp: By=By.xpath('(//button[@id="privacy-policy-close"])'); 
    subieDrive: By=By.xpath('//a[@data-id="Subaru Drive"]');
constructor () {
    super ({url:"https://www.subaru.com/"})


}
async subaruTabs(){
    let subieTabs = await this.driver.getAllWindowHandles();
    await this.driver.switchTo().window(subieTabs[1]);
    await this.driver.sleep(1500);
    await this.driver.close();
    await this.driver.switchTo().window(subieTabs[0]);


}
}
