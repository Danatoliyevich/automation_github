

const CarPage = require('../pageobjects/careers.page');
const careersbt = ('//div[@class="col-6 col-sm-3 col-lg-2 mb-6 mb-md-2 pr-3 pr-md-0 pl-md-4"]//li//a[contains(text(),"Careers")]'); 



describe('work with career', () => {
    it('move to careers', async () => {
        await browser.url ('https://github.com/');
        $(careersbt).scrollIntoView();
        $(careersbt).click();
        await browser.pause(5000);

    });

    it('tasks in careers page', async () => {
        CarPage.clickOpenPbutton();
        await browser.pause(5000);


        const rows = await $$('//div[@class="pb-md-6"]//div[@class="Details js-details-container"]//button//h3');
        console.log(await rows [0].getText())
        console.log(await rows [1].getText())
        console.log(await rows [2].getText())
        console.log(await rows [3].getText())
        console.log(await rows [4].getText())
        console.log(await rows [5].getText())
        console.log(await rows [6].getText())
        console.log(await rows [7].getText())
        console.log(await rows [8].getText())
        console.log(await rows [9].getText())
        console.log(await rows [10].getText())
        console.log(await rows [11].getText())
        console.log(await rows [12].getText())
        console.log(await rows [13].getText())
        console.log(await rows [14].getText())
        console.log(await rows [15].getText())
        console.log(await rows [16].getText())
        console.log(await rows [17].getText())

        
        
           
        /**
        for( let i = 0; i<rows.lenght; i++)
            console.log(await rows[i].getText());
    */
        
        

    



    });


});    
