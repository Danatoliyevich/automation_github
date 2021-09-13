const Page = require('./page');
class PricingPage extends Page {


    
    
    get joinFButton () { return $('//a[contains(text(),"Join for free")]') }
    

    clickJbutton() { 
        this.joinFButton.click();
    }
}








module.exports = new PricingPage();    