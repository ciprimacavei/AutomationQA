/* eslint-disable prettier/prettier */
/* eslint-disable indent */
/* eslint-disable prettier/prettier */
const TC006 = {
    loginLink: () => 'a[title="Log In"]',
    loginEmail: () => '#email',
    loginPass: () => '#pass',
    loginButton:()=> '#send2',
    myWishlistTitle: () => '.my-wishlist h1',
    myWishlistLink: () => 'ul > li:nth-child(8) > a',
    addToCartButton: () => 'button[type="button"][title="Add to Cart"]',
    addedToShoppingCartMessage: () => 'ul > li > span',
    countryField: () => 'select[id="country"] option[value="RO"]',
   // romaniaLocation:() => 'option[value="RO"]',
    regionField: () => 'select[id="region_id"] option[value="291"]',
   // countyLocation: () => 'option[value="291"]',
    postCodeField: () => '#postcode',
    estimateLink: () => '.buttons-set span span',
    estimatedCost: () => 'dd > ul > li > label span',
    flatRate: () => '.radio',
    updateTotal: () => 'button[name="do"]',
    priceBeforeFixedCost: () => 'td:nth-child(2) > strong > span',
    totalCost: () => 'label .price',
    proceedToCheckoout: () => '.cart-totals ul li button[title="Proceed to Checkout"]',
    billingInfoContinueButton: () => '#billing-buttons-container > button',
    shippingMethodContinuebutton: () => '#shipping-method-buttons-container > button',
    selectMethodOfCheckAsPayment: () => '#p_method_checkmo',
    checkOrMoneyContinueButton: () => '#payment-buttons-container > button',
    placeOrder: () => '#review-buttons-container > button',
    confirmationOrder: () => '.page-title h1',
    orderNumber: () => 'p:nth-child(3) > a'
};

module.exports=TC006;