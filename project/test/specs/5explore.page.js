const TopicPage = require('../pageobjects/topics.page');


describe('from explore to topic', () => {






    it('move to element Explore', async () => {
        await browser.url ('https://github.com/');
        $("//summary[contains(text(),'Explore')]").moveTo(30,60);
        await browser.pause(5000);
       $('//a[contains(text(),"Explore GitHub ")]').click();
        
    });
    it('click topic ', async () => {
        await browser.pause(5000);
        TopicPage.clickTopbutton();
        await browser.pause(2000);
        let elemn = await $('//h1[contains(text(),"Topics")]');
        let isDisplayed = await elemn.isDisplayed();
        console.log(isDisplayed);

    });
});





