const Page = require('./page');
class ActionPage extends Page {


    
    get Whygit () { return $("//summary[contains(text(),'Why GitHub?')]") }
    get Whygitresult () { return $('//a[contains(text(),"GitHub Sponsors")]') }
    get searchfield () { return $('//input[@role="combobox"]') }
    get enterpriseButton () { return $("//a[@class='HeaderMenu-link no-underline py-3 d-block d-lg-inline-block'][normalize-space()='Enterprise']") }
    get careersButton () { return $('//div[@class="col-6 col-sm-3 col-lg-2 mb-6 mb-md-2 pr-3 pr-md-0 pl-md-4"]//li//a[contains(text(),"Careers")]') }

    async moveToElement(Whygit) {
        
        Whygit.moveTo();
    }

    async clickElement(Whygitresult){
        
        Whygitresult.click();
    }

    async search (searchtext) {
        this.searchfield.setValue(searchtext);
        await browser.pause(3000);
        
        browser.keys('Enter');
        await browser.pause(10000);


    }

    async clickEnterpriseButton(){
        
        this.enterpriseButton.click();
    }
    async ClickCareers(){
        
        
        this.careersButton.click();
    }






}

module.exports = new ActionPage();    