/* eslint-disable prettier/prettier */
/* eslint-disable indent */
/* eslint-disable prettier/prettier */
const { client } = require('nightwatch-api');
const { Given, When, Then } = require('cucumber');
const mainLoc = require('../../Guru99/helpers/locators/mainPage');
const compareLoc = require('../../Guru99/helpers/locators/TC004_locators');
const compareVar = require('../../Guru99/helpers/variables/TC004_variables');

Given(/^the user will access the website$/, async () => {
    await client.url('http://live.demoguru99.com');
    await client.assert.elementPresent(mainLoc.mobileButton());
});
Given(/^the user will access the mobile section$/, async () => {
    await client.click(mainLoc.mobileButton());
});
When(/^the user will click Compare button for two different products$/, async () => {
    await client.click(compareLoc.compareButtonOfPhone(1));
    await client.click(compareLoc.compareButtonOfPhone(2));
});
When(/^click the compare button on the right of the screen$/, async () => {
    await client.click(compareLoc.compareButton());
});
Then(/^a pop-up of the compared products appears$/, async () => {
    await client.windowHandles(function (result) {
        let popup = result.value[1];
        this.switchWindow(popup);
        this.maximizeWindow();
    });
    let sony, iphone;
    await client.perform(() => {
        client.getText(compareLoc.sonyName(), function (result) {
            console.log('The value from first phone is ------->', result.value);
            sony = result.value;
            return sony;
        });
        client.getText(compareLoc.iPhoneName(), function (result) {
            console.log('The value for the second phone is -------->>', result.value);
            iphone = result.value;
            return iphone;
        });
    }).perform(() => {
        if (sony == compareVar.firstPhone && iphone == compareVar.secondPhone)
            return sony;
        console.log('The user checked the phones');
        console.log('The phones are -------->>', sony, 'and --------->>', iphone);
    });
});
Then(/^the user will close the pop-up windows$/, async () => {
    await client.click(compareLoc.closePopUp());
});