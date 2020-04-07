/* eslint-disable prettier/prettier */
/* eslint-disable indent */
/* eslint-disable prettier/prettier */
const { client } = require('nightwatch-api');
const { Given, When, Then } = require('cucumber');
const accountLoc = require('../../Guru99/helpers/locators/TC005_locators');
const accountVar = require('../../Guru99/helpers/variables/TC005_variables');

// Must change registration data for the TC to work as there is already a registered user with that info

Given(/^the user will launch the app$/, async () => {
    await client.url('http://live.demoguru99.com/');
    await client.assert.elementPresent(accountLoc.accountButton());
});
Given(/^clicks on my account link$/, async () => {
    await client.click(accountLoc.accountButton());
    await client.click(accountLoc.myAccountButton());
});
Given(/^clicks on Create Account link and enters valid credentials$/, async () => {
    await client.click(accountLoc.createAccount());
    await client.setValue(accountLoc.firstNameInput(), accountVar.firstName);
    await client.setValue(accountLoc.lastNameInput(), accountVar.lastName);
    await client.setValue(accountLoc.emailAddressInput(), accountVar.email);
    await client.setValue(accountLoc.passwordInput(), accountVar.pass);
    await client.setValue(accountLoc.confirmPassInput(), accountVar.confirmPass);
});
Given(/^clicks Register and verifies the registration is done$/, async () => {
    await client.click(accountLoc.registerButton());
    await client.pause(2000);
    await client.getText(accountLoc.registrationConfirmationMessage(), result => {
        console.log('The registration message is ------------>>', result.value);
    });
});
When(/^the user navigates to TV menu$/, async () => {
    await client.click(accountLoc.tvButton());
});
When(/^adds a product to the wishlist$/, async () => {
    await client.click(accountLoc.wishListCompareButton(1, 1));
});
When(/^clicks on Share wishlist$/, async () => {
    await client.click(accountLoc.shareWishlistButton());
});
When(/^in the next page the user enters an email and a message$/, async () => {
    await client.setValue(accountLoc.textEmailInput(), accountVar.emailToReceive);
    await client.setValue(accountLoc.textMessageInput(), accountVar.messageToReceive);
});
When(/^clicks Share wishlist$/, async () => {
    await client.click(accountLoc.shareWishListForEmails());
});
Then(/^the wishlist must be shared$/, async () => {
    await client.getText(accountLoc.sharedWishListMessage(), result => {
        console.log('The shared message is ------------->', result.value);
    });
    await client.assert.elementPresent(accountLoc.sharedWishListMessage());
});