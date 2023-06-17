import {By} from 'selenium-webdriver';
import {BasePage} from './basePage';
export class kimsPageObject extends BasePage {
  
    popUpButton: By = By.xpath('(//button[@id="privacy-policy-close"])')
    //mediaContentArrow: By = By.xpath('//div[@class="media-content__arrow"]');
    //mediaContentArrow: By = By.xpath('//div[@title="next item (R)"]');
    ownerLink: By = By.xpath('(//a[@class="main-navigation__nav-group-link nav-primary"])[4]');
    
    // VEHICLE RESOURCES TEST VARIABLES
    //vehicleResourcesLink: By = By.xpath('(//span[@class= "cta__text"])[24]')
    vehicleResourcesLink: By = By.xpath('(//div[@class= "s-cta"])[31]')
    yearDropDown: By = By.xpath('(//select[@*])[1]')
    chooseYearOption: By = By.xpath('(//option[@value="2023"])[1]')
    modelDropDown: By = By.xpath('(//select[@*])[2]')
    //chooseModelOption: By = By.xpath('(//option[@*])[13]')
    chooseModelOption: By = By.xpath('(//option[@*])[18]')
    trimDropDown: By = By.xpath('(//select[@*])[3]')
    chooseTrimOption: By = By.xpath('(//option[@*])[22]')
    //viewResourcesButton: By = By.xpath('//button[@class="btn btn-button disabled cta cta--primary mb-3 horizontal-center cta--disabled"]');
    //viewResourcesButton: By = By.xpath('//span[text()="View Resources"]')[0];
    viewResourcesButton: By = By.xpath('//button[@class="btn btn-button cta cta--primary mb-3 horizontal-center"]')
    //viewResourcesButton: By = By.xpath('//div[@class="subaru-form__form-buttons"]');
    //viewResourcesButton: By = By.xpath('//button[@data-soa-analytics-link-name="View Resources"]')[0];
    //viewResourcesButton: By = By.xpath('//button[@data-id="View Resources"]')[0];
    //viewResourcesButton: By = By.xpath('(//button[@data-id="View Resources"])[position()=1][0]');
    //viewResourcesButton: By = By.xpath('(//button[@data-id="View Resources"])[position()=1]')[0];
    //viewResourcesButton: By = By.xpath('(//button[@data-id="View Resources"])[position()=1]'[0]);
    //viewResourcesButton: By = By.xpath('(//span[@class="cta__text"])[74]');
    crossTrek2023Result: By = By.xpath('//div[@class="vehicle_resources_hero__content--model-name"]');

    //PARTS AND ACCESSORIES TEST VARIABLES
    partsAndAccessoriesLink: By = By.xpath('//a[@data-soa-analytics-link-name="Parts & Accessories"]')[1]
    //partsAndAccessoriesLink: By = By.xpath('(//span[text()="Parts & Accessories"])[1]');
    // $x('(//span[text()="Parts & Accessories"])[1]') works in dev tools inspect
    zipCodeInputBox: By = By.xpath('//input[@class="form-input--field pac-target-input"]')[0];
    //zipCode: By=By.xpath('(//input[@class="form-input--field pac-target-input"])[1]');


    //BUILD AND PRICE TEST VARIABLES
    //buildAndPriceLink: By = By.xpath('//a[@class="main-navigation__nav-group-link nav-primary no-popup"]')[0];
    //buildAndPriceLink: By = By.xpath('//a[@data-soa-analytics-link-name="Build & Price"]')[0];
    //buildAndPriceLink: By = By.xpath('//a[@data-soa-analytics-link-type="navigation:text_link"]')[1];
    vinInputBox: By = By.xpath('(//input[@name="vin"])[1]');
    buildAndPriceLink: By = By.xpath('(//li[@class="main-navigation__nav-group-item"])[2]');
    selectCrosstrek: By = By.xpath('//div[@class="subaru-image vehicle-card__image vehicle-card__image--CTK"]');
    selectLimited: By = By.xpath('(//a[@class="btn btn-link cta cta--text-link cta--single-word trim-name detail-copy s-text-grey-text"])[4]');
    selectNextColor: By = By.xpath('(//button[@class="pages-footer__build-cta cta cta--primary-alt"])');
    selectRed: By = By.xpath('(//div[@class="color-chips__box"])[4]');
    notUsedSelectInterior: By = By.xpath('//div[@aria-label="Interior"]');
    selectCombinedView: By = By.xpath('(//div[@class="tabbed-navigationlink tabbed-navigationlink--font-bold"])[7]');
    selectNextPackages: By = By.xpath('(//button[@class="pages-footer__build-cta cta cta--primary-alt"])')
    selectOptionalPackage: By = By.xpath('//button[@data-id="Add Package"]')[3];
    selectNextAccessories: By = By.xpath('(//button[@class="pages-footer__build-cta cta cta--primary-alt"])')
    selectAccessoriesDropdown: By = By.xpath('//select[@title="Subaru Dropdown"]');
    //selectPetFriendlyOption: 
    selectPetFriendlyPaddedCargoOption: By = By.xpath('//button[@data-soa-analytics-link-name="subaru_905_build_and_price::CTK-RRF_Add_accessory_J501SFN270_Pet-friendly Padded Cargo Liner"]');
    selectNextSummary: By = By.xpath('//button[@data-soa-analytics-link-name="Next: Summary "]');
    verifyCorrectBuild: By = By.xpath('//h2[@class="s-text-midnight text-center"]');

constructor () {
    super ({url:"https://www.subaru.com/index.html"})
    }
}