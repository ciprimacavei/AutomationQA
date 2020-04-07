/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable indent */
const { client } = require('nightwatch-api');
const { Given, When, Then } = require('cucumber');
const mainVar = require('../../Guru99/helpers/variables/mainPage');
const account = require('../../Guru99/helpers/locators/TC005_locators');
const loginVar = require('../../Guru99/helpers/variables/TC005_variables');
const purchaseLoc = require('../../Guru99/helpers/locators/TC006_locators');
const purchaseVar = require('../../Guru99/helpers/variables/TC006_variables');

Given(/^user will launch the application$/, async () => {
    await client.init();
    await client.expect.element(account.accountButton()).to.be.present;
    await client.getTitle(function (title) {
        this.assert.equal(title, mainVar.mainTitle);
        console.log('The main Title is ----------->>', title);
    });
});
Given(/^click on My Account link and login with an already created accoount$/, async () => {
    await client.click(account.accountButton());
    await client.click(purchaseLoc.loginLink());
    await client.setValue(purchaseLoc.loginEmail(), loginVar.email);
    await client.setValue(purchaseLoc.loginPass(), loginVar.pass);
    await client.click(purchaseLoc.loginButton());
});
Given(/^click on My Wishlist link if user is not on the Wishlist page$/, async () => {
    let pageTitle;
    await client.perform(() => {
        client.getText(purchaseLoc.myWishlistTitle(), result => {
            pageTitle = result.value;
            console.log('The page title is ---------->>', pageTitle);
            return pageTitle;
        });
    }).perform(() => {
        if (pageTitle == purchaseVar.myWishlistTitle) {
            console.log('The user is on the', pageTitle, 'page');
        }
        else {
            client.click(purchaseLoc.myWishlistLink());
        }
    });
});
When(/^the user will click Add to Cart link for the product in the wishlist$/, async () => {
    await client.waitForElementVisible(purchaseLoc.addToCartButton(), 2000, false);
    await client.click(purchaseLoc.addToCartButton());
    await client.getText(purchaseLoc.addedToShoppingCartMessage(), result => {
        console.log('The message for adding the product in the cart is:', result.value);
    });
});
When(/^enter shipping country, state\/province and zip for the cost estimate of shipping$/, async () => {
    await client.click(purchaseLoc.countryField());
    await client.click(purchaseLoc.regionField());
    await client.setValue(purchaseLoc.postCodeField(), purchaseVar.postCode);
});
When(/^click Estimate$/, async () => {
    await client.click(purchaseLoc.estimateLink());
});
When(/^verify the shipping cost is generated$/, async () => {
    await client.assert.elementPresent(purchaseLoc.estimatedCost());
    await client.getText(purchaseLoc.estimatedCost(), result => {
        console.log('The fixed cost is generated -------------->>', result.value);
    });
});
When(/^select the shipping cost and update the total and verify the shipping cost is added to total$/, async () => {
    await client.click(purchaseLoc.flatRate());
    await client.click(purchaseLoc.updateTotal());
    await client.pause(2000);
});
Then(/^the user will click Proceed to Checkout$/, async () => {
    await client.click(purchaseLoc.proceedToCheckoout());
});
Then(/^enter billing information and click continue$/, async () => {
    await client.getTitle(function (title) {
        console.log('The title of the page is -------------->>', title);
        this.assert.equal(title, purchaseVar.checkoutTitle);
    });
    await client.click(purchaseLoc.billingInfoContinueButton());
});
Then(/^click continue for Shipping Method$/, async () => {
    await client.expect.element(purchaseLoc.shippingMethodContinuebutton()).to.be.present;
    await client.click(purchaseLoc.shippingMethodContinuebutton());
    console.log('The user agreed with the rate for the shipping method ---------------->>');

});
Then(/^select Check\/Money order option for Payment Information and click continue$/, async () => {
    await client.expect.element(purchaseLoc.selectMethodOfCheckAsPayment()).to.be.present;
    await client.click(purchaseLoc.selectMethodOfCheckAsPayment());
    console.log('The user has selected to pay with money ------------->>');
    await client.click(purchaseLoc.checkOrMoneyContinueButton());
});
Then(/^click Place Order and verify check order has been placed and note the order number$/, async () => {
    await client.click(purchaseLoc.placeOrder());
    await client.getText(purchaseLoc.confirmationOrder(), result => {
        console.log('The message for the order is ------>', result.value);
    });
    await client.getText(purchaseLoc.orderNumber(), result => {
        console.log('The order number is -------------->>', result.value);
    });
});