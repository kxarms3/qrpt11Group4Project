import { kendallsPage } from "./kendallPageObect";
const ken = new kendallsPage()
const fs = require('fs')
test('facebook test',async () => {
    await ken.navigate()
    await ken.driver.manage().window().maximize();
    await ken.driver.sleep(3000)
    await ken.click(ken.popUp);
    await ken.driver.sleep(3000)
    await ken.getElement(ken.instagramIcon)
    await ken.click(ken.instagramIcon)
    await ken.driver.sleep(3000)
    await ken.socialTabs()
    await ken.getElement(ken.tiktokIcon)
    await ken.click(ken.tiktokIcon)
    await ken.driver.sleep(3000)
    await ken.socialTabs()
    await ken.getElement(ken.youtubeIcon)
    await ken.click(ken.youtubeIcon)
    await ken.driver.sleep(3000)
    await ken.socialTabs()
    await ken.getElement(ken.facebookIcon)
    await ken.click(ken.facebookIcon)
    await ken.driver.sleep(3000)
    await ken.socialTabs()
    
})

test('build and price test',async () => {
    await ken.navigate()
    await ken.driver.sleep(3000)   
    await ken.getElement(ken.buildAndPrice)
    await ken.click(ken.buildAndPrice)
    await ken.getElement(ken.ascent2023)
    await ken.click(ken.ascent2023)
    await ken.click(ken.nextButton)
    await ken.click(ken.nextButton)
    await ken.click(ken.nextButton)
    await ken.click(ken.nextButton)
    await ken.driver.sleep(1500)
    fs.writeFile(`${__dirname}/build.png`,
    await ken.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.log(e);
        else console.log("Thats what makes a Subaru a Subaru")
    })

    await ken.driver.quit()
})