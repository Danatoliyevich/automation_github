const SearchPage = require('../pageobjects/search.page');
const ActionPage = require('../pageobjects/action.page');

const searchtext = 'webdriver'

describe('search 1 element task', () => {
    it('move to searchfield', async () => {
        await browser.url ('https://github.com/');
        ActionPage.search(searchtext);
        await browser.pause(10000);
        
        SearchPage.clickTSbutton();
        await browser.pause(3000);
        SearchPage.click1button();
        await browser.pause(3000);
        expect(browser).toHaveUrlContaining('webdriver');
        await browser.pause(3000);


    });
     
});    





