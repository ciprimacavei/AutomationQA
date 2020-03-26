Feature: Verifying stock for products

    Scenario: Verify that you cannot add more product in cart than the product available in store

        Given the user enters the website
        And clicks on the mobile section
        When the user clicks ADD TO CART for Sony Xperia
        And changes the quantity to "1000"
        And clicks Update button
        And verified the error message
        Then the user empties the cart
        And verifies the cart is empty
