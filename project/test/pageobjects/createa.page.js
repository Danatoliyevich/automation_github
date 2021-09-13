const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CreateaPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $("//input[@id='user_login']") }
    get inputemail () { return $("//input[@id='user_email']") }
    get inputPassword () { return $("//input[@id='user_password']") }
    
    

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async loginn (username,email, password) {
        await this.inputUsername.setValue(username);
        browser.pause(5000);
        await this.inputemail.setValue(email);
        browser.pause(5000);
        await this.inputPassword.setValue(password);
    }
}

    module.exports = new CreateaPage();

   