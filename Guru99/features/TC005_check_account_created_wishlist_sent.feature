Feature: Created account and shared wishlist

    Scenario: Verify you can create account in E-commerce site and can share wishlist to other people using email

        Given the user will launch the app
        And clicks on my account link
        And clicks on Create Account link and enters valid credentials
        And clicks Register and verifies the registration is done
        When the user navigates to TV menu
        And adds a product to the wishlist
        And clicks on Share wishlist
        And in the next page the user enters an email and a message
        And clicks Share wishlist
        Then the wishlist must be shared