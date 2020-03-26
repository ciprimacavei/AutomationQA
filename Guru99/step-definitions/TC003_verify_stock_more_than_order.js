/* eslint-disable prettier/prettier */
/* eslint-disable indent */
const { client } = require('nightwatch-api');
const { Given, When, Then } = require('cucumber');
const mainPage = require('../../Guru99/helpers/locators/mainPage');
const mainVar = require('../../Guru99/helpers/variables/mainPage');
const sonyPhone = require('../../Guru99/helpers/locators/sonyXperia');

Given(/^the user enters the website$/, async () => {
    await client.init();
    console.log('The website has been launched ----------->>');
    await client.assert.elementPresent(mainPage.mobileButton());
    await client.assert.title(mainVar.mainTitle);
    console.log('The title is ----------> ', mainVar.mainTitle);
});
Given(/^clicks on the mobile section$/, async () => {
    await client.click(mainPage.mobileButton());
    console.log('The user clicked on the --------------->>', mainVar.mobileTitle, 'section');
    await client.assert.title(mainVar.mobileTitle);
});
When(/^the user clicks ADD TO CART for Sony Xperia$/, async () => {
    await client.click(sonyPhone.addToCartButton());
    console.log('The user clicked the Add to Cart button --------->>');
});
When(/^changes the quantity to "([^"]*)"$/, async qty => {
    await client.click(sonyPhone.editButton());
    console.log('The user clicked on the Edit button -------->>');
    await client.assert.elementPresent(sonyPhone.inputQuantity());
    await client.setValue(sonyPhone.inputQuantity(), qty);
    console.log('The user has offered input of 1000 pieces -------->>');
    await client.getText(sonyPhone.inputQuantity(), function(result){
        console.log('The input quantity is ------------->>> ', result.value);
    });
});
When(/^clicks Update button$/, async () => {
    await client.click(sonyPhone.updateCartButton());
    console.log('The user clicked the Update Cart button -------->>');
});
When(/^verified the error message$/, async () => {
    await client.assert.elementPresent(sonyPhone.errorQuantityMessage());
    console.log('The user saw the error message ----------->>');
    await client.getText(sonyPhone.errorQuantityMessage(), function (result) {
        console.log('The error quantity message is ---------------->>> ', result.value);
    });
});
Then(/the user empties the cart$/, async () => {
    await client.click(sonyPhone.emptyCartButton());
    console.log('The user emptied the cart -------->>>');
});
Then(/^verifies the cart is empty$/, async () => {
    await client.assert.elementPresent(sonyPhone.emptyCartMessage());
    await client.getText(sonyPhone.emptyCartMessage(), function (result) {
        console.log('The message is ---------------->>>', result.value);
    });
});