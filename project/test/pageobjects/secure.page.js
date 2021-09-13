const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get forgotpassb () { return $('.label-link') }
    

    clickFPbutton() { 
        this.forgotpassb.click();
    }
}

module.exports = new SecurePage();
