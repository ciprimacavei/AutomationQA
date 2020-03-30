/* eslint-disable prettier/prettier */
/* eslint-disable indent */
/* eslint-disable prettier/prettier */
const account = {
    accountButton: () => 'div.skip-links > div > a > span.label',
    myAccountButton: () => '#header-account .links ul li a[title="My Account"]',
    createAccount: () => '.buttons-set a',
    firstNameInput: () => '#firstname',
    lastNameInput: () => '#lastname',
    emailAddressInput: () => '#email_address',
    passwordInput: () => '#password',
    confirmPassInput: () => '#confirmation',
    registerButton: () => 'button[type="submit"][title="Register"]',
    registrationConfirmationMessage: () => 'ul li ul li span',
    sharedWishListMessage: () => 'ul li ul li span',
    tvButton: () => 'li.level0.nav-2.last a',
    wishListCompareButton: (indexOfWishList, indexOfCompare) => {
        if(indexOfWishList==indexOfCompare=='1'){ 
            return `ul > li:nth-child(${indexOfWishList}) > div > div.actions > ul > li:nth-child(${indexOfCompare}) > a`;
        } // FirstWishList
        else if(indexOfWishList=='2'&&indexOfCompare=='1') {
            return `ul > li:nth-child(${indexOfWishList}) > div > div.actions > ul > li:nth-child(${indexOfCompare}) > a`;
        } //SecondWishList
        else if(indexOfWishList=='1'&&indexOfCompare=='2'){
            return `ul > li:nth-child(${indexOfWishList}) > div > div.actions > ul > li:nth-child(${indexOfCompare}) > a`;
        } //FirstCompare
        else {
            return 'ul > li:nth-child(2) > div > div.actions > ul > li:nth-child(2) > a';
        } //SecondCompare
    },
    shareWishlistButton: () => 'button[name="save_and_share"]',
    textEmailInput: () => 'textarea[name="emails"]',
    textMessageInput: () => 'textarea[name="message"]',
    shareWishListForEmails: () => 'button[title="Share Wishlist"]'
};

module.exports = account;