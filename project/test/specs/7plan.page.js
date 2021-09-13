
const ActionPage = require('../pageobjects/action.page');
const EnterprisePage = require('../pageobjects/enterprise.page');
const OrgPage = require('../pageobjects/organizations.page');
const CreateaPage = require('../pageobjects/createa.page');
const ServerPage = require('../pageobjects/server.page');
login = 'alphabet88'
password = Math.random().toString(36).slice(2)
email = 'yahoo@yahoo.com'
uname = 'Yolkin Ivan'
Wemail = 'yolk@gmail.com' 
phonen = '+380631112233'
question = 'Do you wright code?'
companyname = 'coding solutions'
describe('work with plan menue', () => {
    it('move to enterprise cloud', async () => {
        await browser.url ('https://github.com/');
        ActionPage.clickEnterpriseButton();
        await browser.pause(5000);
        EnterprisePage.clickStartbutton();
        await browser.pause(5000);

    });
    it('click to cloud button', async () => {
        OrgPage.clickCloudbutton();
        await browser.pause(5000);
        CreateaPage.loginn(login, email, password);
        await browser.pause(5000);



    });

    it('move to enterprise cloud', async () => {
        browser.back()
        OrgPage.clickServerbutton();
        await browser.pause(5000);
        ServerPage.loginServer (uname, Wemail, phonen, companyname, question);
        await browser.pause(5000);


    });


     
});    

