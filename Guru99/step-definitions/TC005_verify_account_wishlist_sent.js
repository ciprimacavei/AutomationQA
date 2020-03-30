/* eslint-disable prettier/prettier */
/* eslint-disable indent */
/* eslint-disable prettier/prettier */
const { client } = require('nightwatch-api');
const { Given, When, Then } = require('cucumber');
const accountLoc = require('../../Guru99/helpers/locators/TC005_locators');
const accountVar = require('../../Guru99/helpers/variables/TC005_variables');

Given(/^the user will launch the app$/, async () => {
    await client.url('http://live.demoguru99.com/');
    await client.assert.elementPresent(accountLoc.accountButton());
    console.log('User has launched the app --------------->>');
});
Given(/^clicks on my account link$/, async () => {
    await client.click(accountLoc.accountButton());
    console.log('The user has clicked on Account Button ---------->>');
    await client.click(accountLoc.myAccountButton());
    console.log('The user has clicked my Account link ---------->>>');
});
Given(/^clicks on Create Account link and enters valid credentials$/, async () => {
    await client.click(accountLoc.createAccount());
    console.log('User has clicked Create Account button ------------->>>');

    await client.setValue(accountLoc.firstNameInput(), accountVar.firstName);
    console.log('The inputed firstname --------->>', accountVar.firstName);

    await client.setValue(accountLoc.lastNameInput(), accountVar.lastName);
    console.log('The inputed lastname --------->>', accountVar.lastName);

    await client.setValue(accountLoc.emailAddressInput(), accountVar.email);
    console.log('The inputed email --------->>', accountVar.email);

    await client.setValue(accountLoc.passwordInput(), accountVar.pass);
    console.log('The inputed password --------->>', accountVar.pass);

    await client.setValue(accountLoc.confirmPassInput(), accountVar.confirmPass);
    console.log('The inputed confpassword ---------->>', accountVar.confirmPass);
    await client.pause(1000);

});
Given(/^clicks Register and verifies the registration is done$/, async () => {
    await client.click(accountLoc.registerButton());
    console.log('The user has clicked the register Button ------------>>');
    await client.pause(2000);
    await client.getText(accountLoc.registrationConfirmationMessage(), result => {
        console.log('The registration message is ------------>>', result.value);
    });
});
When(/^the user navigates to TV menu$/, async () => {
    await client.click(accountLoc.tvButton());
    console.log('The user clicked the TV button -------------->>');
});
When(/^adds a product to the wishlist$/, async () => {
    await client.click(accountLoc.wishListCompareButton(1, 1));
    console.log('The user added the first product to the wishlist ----------------->>');
});
When(/^clicks on Share wishlist$/, async () => {
    await client.click(accountLoc.shareWishlistButton());
    console.log('The user shared the wishlist ------------------>>');
});
When(/^in the next page the user enters an email and a message$/, async () => {
    await client.setValue(accountLoc.textEmailInput(), accountVar.emailToReceive);
    await client.setValue(accountLoc.textMessageInput(), accountVar.messageToReceive);
    console.log('The user entered an email and a message ---------------->>>');
});
When(/^clicks Share wishlist$/, async () => {
    await client.click(accountLoc.shareWishListForEmails());
    console.log('The user shared its wishlist with the email -------------->>>');
});
Then(/^the wishlist must be shared$/, async () => {
    await client.getText(accountLoc.sharedWishListMessage(), result => {
        console.log('The shared message is ------------->', result.value);
    });
    await client.assert.elementPresent(accountLoc.sharedWishListMessage());
});