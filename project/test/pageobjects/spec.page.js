const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SpecppPage extends Page {
    /**
     * define selectors using getter methods
     */
    
    get InputUseremail () { return $('#email_field') }

    async emails (useremail1, useremail2, useremail3 ) {
        this.InputUseremail.setValue(useremail1);
        this.InputUseremail.setValue(useremail2);
        this.InputUseremail.setValue(useremail3);
    }
}

module.exports = new SpecppPage();
