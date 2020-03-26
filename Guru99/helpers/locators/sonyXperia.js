/* eslint-disable prettier/prettier */
const sony = {
  addToCartButton: () => 'li:nth-child(1) > div > div.actions > button',
  editButton: () => 'tr td:nth-child(4) .cart-links li a',
  inputQuantity: () => 'input[type="text"]',
  updateCartButton: () => 'button[type="button"]',
  errorQuantityMessage: () => 'ul > li > span',
  emptyCartButton: () => 'td button[title="Empty Cart"][name="update_cart_action"]',
  emptyCartMessage: () => '.cart-empty p:first-child'
};

module.exports = sony;
