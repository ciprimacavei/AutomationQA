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
    console.log('The user has launched the website ------>>');
});
Given(/^the user will access the mobile section$/, async () => {
    await client.click(mainLoc.mobileButton());
    console.log('The user has accessed the Mobile section ----------->>');
});
When(/^the user will click Compare button for two different products$/, async () => {
    await client.click(compareLoc.compareButtonOfPhone(1));
    console.log('The user clicked the Add to compare button of the first phone ----------->>');
    await client.click(compareLoc.compareButtonOfPhone(2));
    console.log('The user clicked the Add to compare button of the second phone ------------>>');
});
When(/^click the compare button on the right of the screen$/, async () => {
    await client.click(compareLoc.compareButton());
    console.log('The user clicked the Compare button ---------->>');
});
Then(/^a pop-up of the compared products appears$/, async () => {
    await client.windowHandles(function (result) {
        let popup = result.value[1];
        this.switchWindow(popup);
        console.log('The user switched to the popup ----->>>>');
        this.maximizeWindow();
        console.log('The user maximized the popup ------------->>');
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
            console.log('The user checked the phones');
            console.log('The phones are -------->>', sony, 'and --------->>', iphone);
    });
});
Then(/^the user will close the pop-up windows$/, async () => {
    await client.click(compareLoc.closePopUp());
    console.log('The popup has been closed ----------->>>');
});