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
    await client.waitForElementPresent(mainPage.mobileButton());
    await client.assert.title(mainVar.mainTitle);
    console.log('The title is ----------> ', mainVar.mainTitle);
});
Given(/^the user clicks on the mobile section$/, async () => {
    await client.click(mainPage.mobileButton());
    await client.assert.title(mainVar.mobileTitle);
    console.log('The user clicked on the mobile section --------------->>');
});
When(/^the user reads the "([^"]*)" of the "([^"]*)" phone from the list page$/, async (price, phoneType) => {
    price = mobileVar.sonyPhonePrice;
    phoneType = mobileVar.sonyType;
    await client.assert.containsText(mobileLoc.phoneType(1), phoneType);
    console.log('The selected phone is ----------->>>', phoneType);
    await client.assert.containsText(mobileLoc.sonyPrice(), price);
    console.log('Price of the phone in list of products is  -------------->>>', price);
});
When(/^the user clicks on the Sony Xperia phone$/, async () => {
    await client.click(mobileLoc.phoneType(1));
    console.log('The user selected Sony Xperia ------------>>>');
});
When(/^the user reads the "([^"]*)" of the "([^"]*)" phone from the details page$/, async (priceOfPhone, phoneType) => {
    priceOfPhone = mobileVar.sonyPhonePrice;
    phoneType = mobileLoc.phoneType(1);
    await client.assert.attributeContains(mobileLoc.sonyPrice(), '.price', priceOfPhone);
    await client.assert.attributeEquals(mobileLoc.sonyDetailName(),'.h1',phoneType);
    console.log('Price of the phone in detail list is ----------->', priceOfPhone);
    
});
Then(/^the costs must be the same$/, async () => {
    await client.getText(mobileLoc.sonyDetailName, function(result){
        this.assert.equals(result.value, mobileVar.sonyPhonePrice);
    });
});
