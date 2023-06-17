import {By} from 'selenium-webdriver';
import {BasePage} from './basePage';

export class kendallsPage extends BasePage {
    //selectors
    facebookIcon: By=By.xpath('(//img[@*])[54]')
    instagramIcon: By=By.xpath('(//img[@*])[55]')
    tiktokIcon: By=By.xpath('(//img[@*])[56]')
    youtubeIcon: By=By.xpath('(//img[@*])[57]')
    buildAndPrice: By=By.xpath('(//li[@class="main-navigation__nav-group-item"])[2]')
    ascent2023: By=By.xpath('(//p[@class="vehicle-card__name vehicle-name horizontal-text-center"])[4]')
    nextButton: By=By.xpath('//button[@class="pages-footer__build-cta cta cta--primary-alt"]')
    popUp: By=By.xpath('(//button[@id="privacy-policy-close"])'); 





    //selectors
    //constructor
    constructor () {
        super ({url:"https://www.subaru.com/"})
    }
    //methods
    async socialTabs(){
        let kendallTabs = await this.driver.getAllWindowHandles();
        await this.driver.switchTo().window(kendallTabs[1])
        await this.driver.sleep(1500)
        await this.driver.close()
        await this.driver.switchTo().window(kendallTabs[0])
    }
}
