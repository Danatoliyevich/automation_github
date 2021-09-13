const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class L2oginPage extends Page {
    /**
     * define selectors using getter methods
     */

    get searchfield () { return $('//input[@role="combobox"]') }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async search (searchtext) {
        this.searchfield.setValue(searchtext);
        await browser.pause(3000);
        
        browser.keys('Enter');
        await browser.pause(10000);


    }

}

module.exports = new L2oginPage();
