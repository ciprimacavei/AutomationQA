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





Given(/^the user accesses Youtube$/, async () => {
    await client.url('https://www.youtube.com')
        .waitForElementVisible(youtubeLocator.searchBar());
});
Given(/^the title of the website is "([^"]*)"$/, async mainTitle => {
    await client.getTitle(function (mainTitle) {
        this.assert.ok(mainTitle.includes(youtubeVariable.title))
    });
    console.log('The title really is ----->> ', youtubeVariable.title);
});
When(/^the user sets a value of "([^"]*)" in the searchbar$/, async singerInput => {
    youtubeVariable.singerSearch = singerInput;
    await client.setValue(youtubeLocator.searchBar(), youtubeVariable.singerSearch);
});
When(/^the user presses the search button$/, async () => {
    await client.click(youtubeLocator.searchButton());
});
Then(/^a list of videos will be generated$/, async () => {
    await client.assert.urlContains(youtubeVariable.singerSearch);
    console.log('The url contains ---> ', youtubeVariable.singerSearch);
});
Then(/^the user will click on the video with the most views$/, async () => {
    let i = 0;
    await client.elements('css selector', youtubeLocator.views(), function (result) {
        for (res of result.value) {
            client.elementIdText(res.ELEMENT);
            i++;
            if (i == 5) break;
        }
    });
});



Given(/^the user accesses the website$/, async () => {
    await client.url('https://www.youtube.com');
});
Given(/^the title is "([^"]*)"$/, async titlulPrincipal => {
    await client.waitForElementVisible(youtubeLocator.topBarButtons(3));
    await client.getTitle(function (titlul) {
        this.assert.ok(titlul.includes(youtubeVariable.title))
    });
});
When(/^the user clicks on the Settings button and then on Dark Theme: Off$/, async() =>{
    await client.click(youtubeLocator.topBarButtons(3));
    await client.click(youtubeLocator.settingsButton(1));
});
When(/^the user clicks the toggle button$/, async () => {
    await client.click(youtubeLocator.toggleBar());
});
Then(/^the background becomes dark$/, async () =>{
    await client.assert.attributeEquals(youtubeLocator.backgroundThemeColor(), 'aria-pressed', 'true');
    console.log('The theme is Dark');
})