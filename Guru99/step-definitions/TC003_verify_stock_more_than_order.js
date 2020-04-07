/* eslint-disable prettier/prettier */
/* eslint-disable indent */
const { client } = require('nightwatch-api');
const { Given, When, Then } = require('cucumber');
const mainPage = require('../../Guru99/helpers/locators/mainPage');
const mainVar = require('../../Guru99/helpers/variables/mainPage');
const sonyPhone = require('../../Guru99/helpers/locators/sonyXperia');

Given(/^the user enters the website$/, async () => {
    await client.init();
    await client.assert.elementPresent(mainPage.mobileButton());
    await client.assert.title(mainVar.mainTitle);
    console.log('The title is ----------> ', mainVar.mainTitle);
});
Given(/^clicks on the mobile section$/, async () => {
    await client.click(mainPage.mobileButton());
    await client.assert.title(mainVar.mobileTitle);
});
When(/^the user clicks ADD TO CART for Sony Xperia$/, async () => {
    await client.click(sonyPhone.addToCartButton());
});
When(/^changes the quantity to "([^"]*)"$/, async qty => {
    await client.click(sonyPhone.editButton());
    await client.assert.elementPresent(sonyPhone.inputQuantity());
    await client.setValue(sonyPhone.inputQuantity(), qty);
    await client.getText(sonyPhone.inputQuantity(), function(result){
        console.log('The input quantity is ------------->>> ', result.value);
    });
});
When(/^clicks Update button$/, async () => {
    await client.click(sonyPhone.updateCartButton());
});
When(/^verified the error message$/, async () => {
    await client.assert.elementPresent(sonyPhone.errorQuantityMessage());
    await client.getText(sonyPhone.errorQuantityMessage(), function (result) {
        console.log('The error quantity message is ---------------->>> ', result.value);
    });
});
Then(/the user empties the cart$/, async () => {
    await client.click(sonyPhone.emptyCartButton());
});
Then(/^verifies the cart is empty$/, async () => {
    await client.assert.elementPresent(sonyPhone.emptyCartMessage());
    await client.getText(sonyPhone.emptyCartMessage(), function (result) {
        console.log('The message is ---------------->>>', result.value);
    });
});