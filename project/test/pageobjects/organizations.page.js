const Page = require('./page');
class OrgPage extends Page {


    
    
    get cloudButton () { return $("//h2[contains(text(),'Enterprise Cloud')]") }
    get serverButton () { return $("//h2[contains(text(),'Enterprise Server')]") }
    

    clickCloudbutton() { 
        this.cloudButton.click();
    }

    clickServerbutton() { 
        this.serverButton.click();
    }
}









module.exports = new OrgPage();    