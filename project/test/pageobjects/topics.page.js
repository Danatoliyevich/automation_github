const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TopicPage extends Page {
    /**
     * define selectors using getter methods
     */
    get topicbutton () { return $('//a[normalize-space()="Topics"]') }
    

    clickTopbutton() { 
        this.topicbutton.click();
    }
}

module.exports = new TopicPage();
