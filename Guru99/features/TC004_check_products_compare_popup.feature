Feature: Verify popup window

    Scenario: Verify that you are able to compare two products

        Given the user will access the website
        And the user will access the mobile section
        When the user will click Compare button for two different products
        And click the compare button on the right of the screen
        Then a pop-up of the compared products appears
        And the user will close the pop-up windows