/* eslint-disable prettier/prettier */
/* eslint-disable indent */
/* eslint-disable prettier/prettier */
const { client } = require('nightwatch-api');
const { Given, When, Then } = require('cucumber');
const mainLoc = require('../../Guru99/helpers/locators/mainPage');
const loginLoc = require('../../Guru99/helpers/locators/TC006_locators');
const loginVar = require('../../Guru99/helpers/variables/TC005_variables');
const path = require('path');

Given(/^the user will go to the main page$/, async () => {
    await client.init();
    await client.getTitle(title => {
        console.log('The title of the page is ------->', title);
    });
});
Given(/^click on my account link$/, async () => {
    await client.click(mainLoc.accountButton());
});
Given(/^login with previously created credential$/, async () => {
    await client.click(loginLoc.loginLink());
    await client.setValue(loginLoc.loginEmail(), loginVar.email);
    await client.setValue(loginLoc.loginPass(), loginVar.pass);
    await client.click(loginLoc.loginButton());
});
When(/^the user clicks on my orders$/, async () => {
    await client.click(loginLoc.myOrdersLink());
});
When(/^clicks on view order$/, async () => {
    await client.click(loginLoc.viewOrderLink());
    await client.back();
});
Then(/^status is pending for the last order$/, async () => {
    let orderMessage;
    await client.perform(() => {
        client.getText(loginLoc.orderStatus(), result => {
            orderMessage = result.value;
            return orderMessage;
        });
    }).perform(() => {
        if (orderMessage == loginVar.order) {
            console.log('The status of the order is --->', orderMessage);
            return orderMessage;
        }
        else {
            console.log('The status is incorrect');
        }
    });
});
Then(/^the user clicks on the print order link$/, async () => {
    await client.forward();
    await client.assert.elementPresent(loginLoc.printOrder());
    await client.click(loginLoc.printOrder());
});
Then(/^verify the order is saved as pdf$/, async () => {
    const ext = path.extname(loginVar.filePath);
    if (ext == '.pdf') {
        console.log('The extension is ----------->>', ext);
    }
    else {
        console.log('Wrong extension --------------------->>>');
    }
});