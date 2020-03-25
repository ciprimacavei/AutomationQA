Feature: Verify the cost of the product 

    Scenario: Verify the cost of a product in the list page is equal with the cost in the details page

        Given the user accesses the website
        And the user clicks on the mobile section
        When the user reads the "price" of the "Sony Experia" phone from the list page
        And the user clicks on the Sony Experia phone
        And the user reads the "price" of the "Sony Experia" phone from the details page
        Then the costs must be the same