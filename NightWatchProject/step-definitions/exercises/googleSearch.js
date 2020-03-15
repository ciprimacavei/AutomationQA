const { client } = require('nightwatch-api');
const { Given, When, Then } = require('cucumber');
const googleSearch = require('../../helpers/exercises/googleSearchLocators/googleSearchLocatorLibrary');
const variables = require('../../helpers/exercises/googleSearchVariables/googleVariables');


Given(/^the user accesses the website$/, async () => {
    await client.url('https://www.google.com');
});
When(/^page is loaded and the title is "([^"]*)"$/, async title => {
    await client.waitForElementVisible(googleSearch.body());
    await client.assert.title(title);
    await client.getTitle(title => {
        variables.pageTitle = title;
        console.log('Title -----> ', variables.pageTitle);
    })
});
Then(/^the user will input "([^"]*)" in the search bar and hit enter$/, async inputSearchValue => {
    await client.setValue(googleSearchPage.input(), inputSearchValue);
    await client.pause(3000);
    await client.click(googleSearchPage.submitButton());
});