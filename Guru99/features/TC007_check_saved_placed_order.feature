Feature: Verify pdf file

    Scenario: Verify that you will be able to save previously placed order as a pdf file

        Given the user will go to the main page
        And click on my account link
        And login with previously created credential
        When the user clicks on my orders
        And clicks on view order
        Then status is pending for the last order
        And the user clicks on the print order link
        And verify the order is saved as pdf