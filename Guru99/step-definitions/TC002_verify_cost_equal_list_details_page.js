/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable indent */
/* eslint-disable prettier/prettier */
const { client } = require('nightwatch-api');
const { Given, When, Then } = require('cucumber');
const mainPage = require('../../Guru99/helpers/locators/mainPage');
const mainVar = require('../../Guru99/helpers/variables/mainPage');
const mobileVar = require('../../Guru99/helpers/variables/mobilePage');
const mobileLoc = require('../../Guru99/helpers/locators/mobilePage');


Given(/^the user accesses the website$/, async () => {
    await client.init();
    await client.assert.elementPresent(mainPage.mobileButton());
    await client.assert.title(mainVar.mainTitle);
    console.log('The title is ----------> ', mainVar.mainTitle);
});
Given(/^the user clicks on the mobile section$/, async () => {
    await client.click(mainPage.mobileButton());
    await client.assert.title(mainVar.mobileTitle);
    console.log('The user clicked on the --------------->>', mainVar.mobileTitle, 'section');
});
When(/^the user clicks the Sony Xperia phone and is redirected to the details page$/, async () => {
    await client.click(mobileLoc.sonyPicture());
    console.log('The user selected Sony Xperia ------------>>>');
});
Then(/^the costs from details page must be the same as the one from the list page$/, async () => {
    
    const listPrice = await client.getText(mobileLoc.sonyListPrice(), function(result){
        console.log('The list price is ------->>', result.value);
        return result.value;
    });

    const detailPrice = await client.getText(mobileLoc.sonyDetailPrice(), function(result){
        console.log('The detail price is -------->>>', result.value);
        return result.value;
    });
    
        if (listPrice == detailPrice) {
            console.log('The price of List is ', listPrice, ' and matches the Detail price which is ', detailPrice);
        }
});