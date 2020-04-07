/* eslint-disable prettier/prettier */
/* eslint-disable indent */
/* eslint-disable prettier/prettier */
const { client } = require('nightwatch-api');
const { Given, When, Then } = require('cucumber');
const mainPageLoc = require('../../Guru99/helpers/locators/mainPage');
const mobPageLoc = require('../../Guru99/helpers/locators/mobilePage');

Given(/^the user launches the website$/, async () => {
    await client.init();
    await client.getTitle(title => {
        console.log('The title of the page is ------>', title);
    });
    await client.assert.elementPresent(mainPageLoc.mobileButton());
});
When(/^the user clicks the mobile section$/, async () => {
    await client.click(mainPageLoc.mobileButton());
    await client.getTitle(title => {
        console.log('The title of the page is ---------->>', title);
    });
});
When(/^selects Name as the desired option from the Sort By list$/, async () => {
    await client.click(mobPageLoc.sortByElement());
    await client.pause(2000);
    await client.click(mobPageLoc.sortByOption(2));
});
Then(/^a list of products will be displayed sorted by name$/, async () => {
    await client.assert.attributeContains(mobPageLoc.sortByAscDesc(), 'title', 'Set Descending Direction');
    await client.click(mobPageLoc.sortByAscDesc());
});

