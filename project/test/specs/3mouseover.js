const ActionPage = require('../pageobjects/action.page');


describe('mouseover', () => {
    it('move to element Why Github', async () => {
        await browser.url ('https://github.com/');
        $("//summary[contains(text(),'Why GitHub?')]").moveTo(30,60);
        await browser.pause(5000);
        let elem1 = await $('//a[contains(text(),"GitHub Sponsors")]');
        let isDisplayed = await elem1.isDisplayed();
        console.log(isDisplayed);
    
    });

    it('move to element  pricing', async () => {
        await browser.url ('https://github.com/');
        $("//summary[contains(text(),'Pricing')]").moveTo(30,60);
        await browser.pause(5000);
        let elem2 = await $('//a[contains(text(),"Compare plans")]');
        let isDisplayed = await elem2.isDisplayed();
        console.log(isDisplayed);
    
    });

    it('move to element Explore', async () => {
        await browser.url ('https://github.com/');
        $("//summary[contains(text(),'Explore')]").moveTo(30,60);
        await browser.pause(5000);
        let elem3 = await $('//a[contains(text(),"GitHub Stars program ")]');
        let isDisplayed = await elem3.isDisplayed();
        console.log(isDisplayed);
    
    });







     
});    

