Feature: Verify popup window

    Scenario: Verify that you are able to compare two products

        Given the user will access the website
        And the user will access the mobile section
        When the user will click Compare button for two different products
        And the products appear in the pop-up window
        Then the user will close the pop-up windows