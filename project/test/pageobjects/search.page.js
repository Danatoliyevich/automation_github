const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {
    /**
     * define selectors using getter methods
     */
    get Typescriptbutton () { return $('//div[@class="col-12 col-md-3 float-left px-md-2"]//li[7]//a') }
    get Firstsearchbutton () { return $("//div[@class='px-2'][1]//ul//li[1]//a") }

    clickTSbutton() { 
        this.Typescriptbutton.waitForDisplayed();
        this.Typescriptbutton.click();
    }

    click1button() { 
         this.Firstsearchbutton.click();
    }
}

module.exports = new SearchPage();