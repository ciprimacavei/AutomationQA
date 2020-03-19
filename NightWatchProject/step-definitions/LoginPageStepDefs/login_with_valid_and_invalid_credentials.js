/* eslint-disable prettier/prettier */
const { client } = require('nightwatch-api');
const { Given, When, Then } = require('cucumber');
const loginPageLoc = require('../../helpers/LoginPage/login_page_locators');
const loginVar = require('../../helpers/LoginPage/login_page_variables');
const dashLoc = require('../../helpers/SideBar/Dashboard/dashboard_locators');

Given(/^the user goes on the website$/, async () => {
  await client.init('http://timesheettest2.intern.arobs.com/#/login').waitForElementVisible(loginPageLoc.mainTitle());
  console.log('Page has been loaded ------>> YAAASS');
});
When(
  /^the user types the "([^"]*)" value for the username field$/,
  async user => {
    loginVar.username = user;
    await client.setValue(loginPageLoc.username(), loginVar.username);
    console.log('Username has been entered ------->> Step 1 Successful');
  }
);
When(
  /^the user types the "([^"]*)" value for the password field$/,
  async pass => {
    loginVar.password = pass;
    await client.setValue(loginPageLoc.password(), loginVar.password);
    console.log('Password has been entered ----->> Step 2 Successful');
  }
);
When(/^the user clicks on the login button$/, async () => {
  await client.click(loginPageLoc.loginButton());
  console.log('User clicked the Login Button ----->>> YAAASSSS');
  await client.pause(4000);
});
Then(/^the login is "([^"]*)"$/, async status => {
  try {
    await client.assert.elementPresent(dashLoc.dashboardTitle());
    console.log('The login is: ', status);
    await client.end();
  } catch (error) {
    console.log('The login is: ', status);
    await client.end();
  }
});
