const PricingPage = require('../pageobjects/pricing.page');
const CreateaPage = require('../pageobjects/createa.page');
login = 'alphabet88'
password = Math.random().toString(36).slice(2)
email = 'yahoo@yahoo.com'


describe('pricing plan', () => {
    it('move to element  pricing', async () => {
        await browser.url ('https://github.com/');
        $("//summary[contains(text(),'Pricing')]").moveTo(30,60);
        await browser.pause(2000);

        let elem = await $("//a[@class='pb-2 lh-condensed-ultra d-block Link--primary no-underline h5 Bump-link--hover']");
        elem.click();
        
        PricingPage.clickJbutton();
        await browser.pause(10000);

        await CreateaPage.loginn(login, email, password);    
    });

});