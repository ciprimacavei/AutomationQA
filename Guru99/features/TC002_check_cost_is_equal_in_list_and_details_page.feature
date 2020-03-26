Feature: Verify the cost of the product 

    Scenario: Verify the cost of a product in the list page is equal with the cost in the details page

        Given the user accesses the website
        And the user clicks on the mobile section
        When the user clicks the Sony Xperia phone and is redirected to the details page
        Then the costs from details page must be the same as the one from the list page