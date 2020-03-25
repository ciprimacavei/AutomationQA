/* eslint-disable prettier/prettier */
/* eslint-disable indent */
/* eslint-disable prettier/prettier */
const { client } = require('nightwatch-api');
const { Given, When, Then } = require('cucumber');
const mainPageLoc = require('../../Guru99/helpers/locators/mainPage');
const mainVar = require('../../Guru99/helpers/variables/mainPage');
const mobPageLoc = require('../../Guru99/helpers/locators/mobilePage');

Given(/^the user launches the website$/, async () => {
    await client.init();
    await client.assert.title(mainVar.mainTitle);
    await client.assert.elementPresent(mainPageLoc.mobileButton());
    console.log('The title is ------->> ', mainVar.mainTitle);
});
When(/^the user clicks the mobile section$/, async () => {
    await client.click(mainPageLoc.mobileButton());
    await client.assert.title(mainVar.mobileTitle);
    console.log('Mobile page has been accessed ------------>>', mainVar.mobileTitle);
});
When(/^selects Name as the desired option from the Sort By list$/, async () => {
    await client.click(mobPageLoc.sortByElement());
    await client.pause(2000);
    console.log('Dropdown list has been clicked ---------->>');
    await client.click(mobPageLoc.sortByOption(2));
    console.log('Sort By Name option has been selected ----------->> ');
});
Then(/^a list of products will be displayed sorted by name$/, async () => {
    await client.assert.attributeContains(mobPageLoc.sortByAscDesc(), 'title', 'Set Descending Direction');
    await client.click(mobPageLoc.sortByAscDesc());
    console.log('Clicked on Ascending order ------------->>');
});

