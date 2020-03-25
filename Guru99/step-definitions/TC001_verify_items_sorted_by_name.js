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
    await client.expect.element(mainPageLoc.logoButton()).to.be.present;
    await client.getTitle(function (title) {
        this.client.assert.ok(mainVar.mainTitle, title);
    });
    console.log('The title is ------->> ', mainVar.mainTitle);
});
When(/^the user clicks the mobile section$/, async () => {
    await client.click(mainPageLoc.mobileButton());
    await client.assert.title(mainVar.mobileTitle);
    console.log('Mobile page has been accessed ------------>>');
});
When(/^selects "([^"]*)" as the desired option from the Sort By list$/, async name => {
    name = mobPageLoc.sortByOption(2);
    await client.click(name);
    await client.pause(2000);
    console.log('Sort By Name option has been selected ----------->> ');
});
Then(/^a list of products will be displayed sorted by name$/, async () => {
    await client.assert.attributeContains(mobPageLoc.sortByAscDesc(), 'title', 'Set Descending Direction');
    await client.click(mobPageLoc.sortByAscDesc());
    console.log('Clicked on Ascending order ------------->>');
});

