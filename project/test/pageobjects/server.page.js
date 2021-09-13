const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ServerPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUname () { return $("//input[@id='contact_request_name']") }
    get inputPhone () { return $("//input[@id='contact_request_phone']") }
    get inputWemail () { return $("//input[@id='contact_request_email']") }
    get inputCompany () { return $("//input[@id='contact_request_organization_name']") }
    get AWSButton () { return $("//input[@id='contact_request_instance_type_aws']") }
    get AcceptButton () { return $("//input[@id='contact_request_agreed_to_terms']") }
    get YesButton () { return $("//input[@id='questions_yes']") }
    get QuestionField () { return $("//input[@id='questions_yes']") }


    
    

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async loginServer (uname, Wemail, phonen, companyname, question) {
        await this.inputUname.setValue(uname);
        browser.pause(5000);
        await this.inputWemail.setValue(Wemail);
        browser.pause(5000);
        await this.inputCompany.setValue(companyname);
        browser.pause(5000);
        await this.inputPhone.setValue(phonen);
        this.AWSButton.click();
        this.AcceptButton.click();
        this.YesButton.click();
        await this.QuestionField.setValue(question);

    }
}

    module.exports = new ServerPage();
