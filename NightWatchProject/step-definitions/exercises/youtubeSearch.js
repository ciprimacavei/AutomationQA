const { client } = require('nightwatch-api');
const { Given, When, Then } = require('cucumber');
const youtubeLocator = require('../../helpers/exercises/youtubeSearchLocators/youtubeLocators');
const youtubeVariable = require('../../helpers/exercises/youtubeSearchVariables/youtubeVariables');


Given(/^user accesses Youtube$/, async () => {
    await client.url('https://www.youtube.com').waitForElementVisible(youtubeLocator.searchBar());
});
Then(/^the title should be "([^"]*)"$/, async title => {
    await client.getTitle(function (title) {
        this.assert.ok(title.includes(youtubeVariable.title));
        console.log('The title is -------> ', youtubeVariable.title);
    });
});
When(/^the user clicks on the searchbar$/, async () => {
    await client.click(youtubeLocator.searchBar());
});
When(/^types in "([^"]*)"$/, async labrador => {
    youtubeVariable.labradorSearch = labrador;
    await client.setValue(youtubeLocator.searchBar(), youtubeVariable.labradorSearch);
});
When(/^presses the search button$/, async () => {
    await client.click(youtubeLocator.searchButton());
    console.log('User pressed the Search Button -------->>> ');
});
Then(/^the user will be redirected to the page with labradors$/, async () => {
    await client.assert.urlContains(youtubeVariable.labradorSearch);
    console.log('The url contains --------> ', youtubeVariable.labradorSearch);
});
When(/^the user goes back to the main page$/, async () => {
    await client.back();
    console.log('User has pressed the back button from the browser ----->>> ');
    await client.pause(2000);
});
When(/^clears the text from the searchbar$/, async () => {
    await client.clearValue(youtubeLocator.searchBar());
    console.log('User has cleared the search bar ------>> ');
});
When(/^writes "([^"]*)" in searchbar$/, async poodle => {
    youtubeVariable.poodleSearch = poodle;
    await client.setValue(youtubeLocator.searchBar(), youtubeVariable.poodleSearch);
});
When(/^clicks on the search button$/, async () => {
    await client.click(youtubeLocator.searchButton());
});
Then(/^the user will be redirected to the page with poodles$/, async () => {
    await client.assert.urlContains(youtubeVariable.poodleSearch);
    console.log('The url contains -------> ', youtubeVariable.poodleSearch);
});