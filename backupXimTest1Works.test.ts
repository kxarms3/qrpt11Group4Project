import {kimsPageObject} from './kimsPageObject';
const kim = new kimsPageObject();
const fs = require('fs');

describe("Testing the Subaru Website", () => {
   
    test ("test Vehicle Resources by year, model, trim", async () => {
        await kim.navigate();
        await kim.driver.manage().window().maximize();
        //await kim.driver.sleep(1000);
        //await kim.click(kim.mediaContentArrow);
        await kim.click(kim.popUpButton);
        await kim.click(kim.ownerLink);
        await kim.driver.sleep(2000);  
        await kim.click(kim.vehicleResourcesLink);
        await kim.driver.sleep(1000);
        await kim.click(kim.yearDropDown);
        await kim.driver.sleep(1000);
        await kim.click(kim.chooseYearOption);
        await kim.driver.sleep(1000);
        await kim.click(kim.modelDropDown);
        await kim.driver.sleep(1000);
        await kim.click(kim.chooseModelOption);
        await kim.driver.sleep(1000);
        await kim.click(kim.trimDropDown);
        await kim.driver.sleep(1000);
        await kim.click(kim.chooseTrimOption);
        await kim.driver.sleep(3000);
        await kim.click(kim.vinInputBox);
        await kim.driver.sleep(1000);
        await kim.click(kim.viewResourcesButton);

        //expect statement
        
    })
    

    /*
    test ("Zip code in Parts & Accessories", async () => {
        await kim.navigate();
        await kim.driver.sleep(1000);
        await kim.click(kim.ownerLink);
        await kim.driver.sleep(1000);
        console.log(`"kim.partsAndAccessroiesLink before click: ",${kim.partsAndAccessoriesLink}`);
        await kim.click(kim.partsAndAccessoriesLink);
        await kim.driver.sleep(1000);
        await kim.click(kim.zipCodeInputBox);
        //await kim.setInput(kim.zipCodeInputBox,"00000\n");

        //expect statement
        //await kim.driver.quit();
   
    }) 
    */
   
    test ("Build and Price", async () => {
        await kim.navigate();
        await kim.driver.manage().window().maximize();
        await kim.driver.sleep(1000);
        await kim.click(kim.buildAndPriceLink);
        await kim.driver.sleep(2000);  
        await kim.click(kim.selectCrosstrek);
        await kim.driver.sleep(2000);
        await kim.click(kim.selectLimited);
        await kim.driver.sleep(2000);
        await kim.click(kim.selectNextColor);
        await kim.driver.sleep(5000);
        //await kim.getElement(kim.selectRed);
        //await kim.click(kim.selectRed);
        //await kim.driver.sleep(5000);
        //await kim.getElement(kim.selectCombinedView);
        //await kim.click(kim.selectCombinedView);
        await kim.driver.sleep(3000);
        await kim.click(kim.selectNextColor);
        await kim.driver.sleep(1000);
        //await kim.click(kim.selectOptionalPackage);
        //await kim.driver.sleep(1000);
        await kim.click(kim.selectNextColor);
        await kim.driver.sleep(1000);
        //await kim.click(kim.selectAccessoriesDropdown);
        //await kim.driver.sleep(1000);
        //await kim.click(kim.selectPetFriendlyPaddedCargoOption);
        await kim.driver.sleep(1000);
        await kim.click(kim.selectNextColor);
        await kim.driver.sleep(3000);

        // expect what? to be present
    
        await kim.driver.quit();

    })
    
})
