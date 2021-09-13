const Page = require('./page');
class CarPage extends Page {


    
    
    get OpenPButton () { return $('//div[@class="py-7 py-md-8 py-lg-9"]//p//a[contains(text(),"Open positions")]') }
    

    clickOpenPbutton() { 
        this.OpenPButton.click();
    }
}








module.exports = new CarPage();    