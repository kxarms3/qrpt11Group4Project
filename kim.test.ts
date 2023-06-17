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
        await kim.driver.sleep(2000);
        await kim.click(kim.vinInputBox);
        await kim.driver.sleep(2000);
        await kim.click(kim.viewResourcesButton);
        await kim.driver.sleep(2000);

        //expect (kim.crossTrek2023Result.toBe("2023 Crosstrek"));
        //expect (kim.crossTrek2023Result.include("2023 Crosstrek"));
        //expect (kim.crossTrek2023Result.contains("2023 Crosstrek"));
        let results = await kim.getText(kim.crossTrek2023Result);
        expect (results).toContain("2023 Solterra");
    })
    
   
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
        //await kim.driver.sleep(5000);
        //await kim.getElement(kim.selectRed);
        //await kim.click(kim.selectRed);
        //await kim.driver.sleep(5000);
        //await kim.getElement(kim.selectCombinedView);
        //await kim.click(kim.selectCombinedView);
        await kim.driver.sleep(3000);
        await kim.click(kim.selectNextColor);
        await kim.driver.sleep(2000);
        //await kim.click(kim.selectOptionalPackage);
        //await kim.driver.sleep(1000);
        await kim.click(kim.selectNextColor);
        await kim.driver.sleep(1500);
        //await kim.click(kim.selectAccessoriesDropdown);
        //await kim.driver.sleep(1000);
        //await kim.click(kim.selectPetFriendlyPaddedCargoOption);
        await kim.driver.sleep(1500);
        await kim.click(kim.selectNextColor);
        await kim.driver.sleep(4000);

        let resultsTestTwo = await kim.getText(kim.verifyCorrectBuild);
        expect (resultsTestTwo).toContain("$32,190");
    
        await kim.driver.quit();

    })
    
})
