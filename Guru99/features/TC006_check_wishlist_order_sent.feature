Feature: Check purchase functionality

    Scenario: Verify user is able to purchase product using registered email

        Given user will launch the application
        And click on My Account link and login with an already created accoount
        And click on My Wishlist link if user is not on the Wishlist page
        When the user will click Add to Cart link for the product in the wishlist
        And enter shipping country, state/province and zip for the cost estimate of shipping
        And click Estimate
        And verify the shipping cost is generated
        And select the shipping cost and update the total and verify the shipping cost is added to total
        Then the user will click Proceed to Checkout
        And enter billing information and click continue
        And click continue for Shipping Method
        And select Check/Money order option for Payment Information and click continue
        And click Place Order and verify check order has been placed and note the order number