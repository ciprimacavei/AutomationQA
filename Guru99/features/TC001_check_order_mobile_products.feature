Feature: Verify items can be sorted by Name

    Scenario: Verify mobile items are sorted by name
    
        Given the user launches the website
        When the user clicks the mobile section
        And selects "Name" as the desired option from the Sort By list
        Then a list of products will be displayed sorted by name