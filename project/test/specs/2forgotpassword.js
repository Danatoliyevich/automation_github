const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const SpecppPage = require('../pageobjects/spec.page');
useremail1 = 'unitedascania@gmail.com'
useremail2 = Math.random().toString(36).slice(2)
useremail3 = ''
describe('forgot password', () => {
    it('should click forgot password', async () => {
        await browser.url ('https://github.com/login')
        await browser.pause(1000);
        SecurePage.clickFPbutton();
        await browser.pause(2000);
        
    
    });

    it('should write email', async () => {
        await SpecppPage.emails(useremail1);
        await browser.pause(2000);


    });


    it('should write email random', async () => {
        await SpecppPage.emails(useremail2);
        await browser.pause(2000);


    });


    it('should write empty email ', async () => {
        await SpecppPage.emails(useremail3);
        await browser.pause(2000);



    });







     
});    