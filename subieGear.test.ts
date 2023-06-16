import {jetsPageObject} from './jetPageObject';
const jet = new jetsPageObject();
const fs = require('fs');

describe("Testing Subaru Gear, Subaru Drive & Preferred Retailer", () => {
    test ("Subaru Gear", async () => {
        await jet.navigate();
        await jet.click(jet.popUp);
        //this closes the cookies pop-up window in order to help it see the footer 
        await jet.driver.manage().window().maximize();
        await jet.click(jet.subieGear);
        await jet.driver.sleep(3000)
        await jet.subaruTabs();
          //the above closes the tab and goes back to the first tab

        /*
        await jet.setInput(jet.searchBar,"tech cloth\n")
        await jet.driver.sleep(3000)
        await jet.click(jet.techCloth);
        await jet.click(jet.addToCart);
        await jet.click(jet.cartIcon);
        await jet.click(jet.checkout);
        await jet.subaruTabs();*/
      
    });
    test ("Subary Drive", async () => {
        await jet.navigate();
        await jet.driver.manage().window().maximize();
        //this will help scroll or see the footer
        await jet.getElement(jet.subieDrive);
        await jet.driver.sleep(3000)
        await jet.click(jet.subieDrive);
        await jet.driver.sleep(3000)
        await jet.subaruTabs();
        //this closes the tab it opened and go back to the main page
       
    })
    test ("Preferred Retailer", async () => {
        await jet.navigate();
        await jet.click(jet.findRetailer);
        await jet.setInput(jet.zipCode,"34235\n")
        await jet.driver.sleep(3000)
        await jet.getElement(jet.preferRetailer);
        await jet.click(jet.preferRetailer);

/*Below will select the hybrid retailer to then show that the preferred retailer 
appears to offer hybrid but it's not an authorized hybrid retailer*/
        await jet.click(jet.hybridRetailer);
        await jet.driver.sleep(3000)
        await jet.click(jet.contactAndServices);
        await jet.driver.quit()
});

});