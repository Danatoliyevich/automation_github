const Page = require('./page');
class EnterprisePage extends Page {


    
    
    get startFButton () { return $('//div[@class="d-flex flex-items-center flex-justify-center flex-md-justify-between flex-wrap gutter-spacious position-relative"]//a[@class="btn-mktg btn-transparent"]') }
    

    clickStartbutton() { 
        this.startFButton.click();
    }
}








module.exports = new EnterprisePage();    