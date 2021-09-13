
const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
login = Math.random().toString(36).slice(2)
password = Math.random().toString(36).slice(2)

describe('My Login application', () => {

    it('should login with invalid credentials', async () => {
        await LoginPage.open();
        browser.pause(40000)

        await LoginPage.login(login, password);
        
        
const elem = $('.tagline')
expect(elem).toHaveTextContaining('Incorrect username or password')



     

    });

    it('forgot password empty', async () => {
        await LoginPage.open();

        await LoginPage.login("userqweasd", "123456789@Qweasd");
        await browser.pause(5000);
        
        
        const elem = $('.tagline');
        expect(elem).toHaveTextContaining('Create your first project');
        expect(browser).toHaveUrl('https://github.com/join')

     });



     
});

