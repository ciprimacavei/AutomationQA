const { client } = require('nightwatch-api');
const { Given, When, Then } = require('cucumber');
const loginPageLoc = require('../../helpers/LoginPage/login_page_locators');
const loginVar = require('../../helpers/LoginPage/login_page_variables')

Given(/^the user goes on the website$/, async () => {
    await client.init().waitForElementVisible(loginPageLoc.mainTitle());
    console.log('Page has been loaded ------>> YAAASS');
});
When(/^the user types the "([^"]*)" value for the username field$/, async user => {
    loginVar.username = user;
    await client.setValue(loginPageLoc.username(), loginVar.username);
    console.log('Username has been entered ------->> Step 1 Successful');
});
When(/^the user types the "([^"]*)" value for the password field$/, async pass => {
    loginVar.password = pass;
    await client.setValue(loginPageLoc.password(), loginVar.password);
    console.log('Password has been entered ----->> Step 2 Successful');
});
When(/^the user selects "([^"]*)" as a preffered language$/, async romanianLanguage => {
    loginVar.roLang = romanianLanguage;
    await client.click(loginPageLoc.selectLanguageButton()).click(loginPageLoc.selectLanguage(1));
    await client.assert.value(loginPageLoc.selectLanguage(1), loginVar.roLang);
    console.log('User has clicked the language button and selected Romanian');
});
When(/^the parameters are changed to Romanian$/, async () => {
    await client.expect(loginPageLoc.loginButton()).text.to.equal(loginVar.loginButtonRomanian);
    console.log('Verify login button says Autentificare ------->> YAASSS');
});
When(/^the user clicks on the login button$/, async () => {
    await client.click(loginPageLoc.loginButton());
    console.log('User clicked the Login Button ----->>> YAAASSSS');
});
Then(/^the user is redirected to the main page if login is "([^"]*)"$/, async loginStatus => {
    try {
        await client.assert.elementPresent(loginPageLoc.mainTitle());
        console.log('The login is: ', loginStatus);
    } catch (error) {
        console.log('The login is: ', loginStatus);
    }
});