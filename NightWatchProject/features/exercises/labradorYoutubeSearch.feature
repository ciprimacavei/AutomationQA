Feature: Search for Labradors on Youtube and then go back and search for Poodles

  Scenario: Search Labradors and Poodles
    Given user accesses Youtube
    Then the title should be "YouTube"
    When the user clicks on the searchbar
    And types in "labrador" 
    And presses the search button
    Then the user will be redirected to the page with labradors
    When the user goes back to the main page
    And clears the text from the searchbar 
    And writes "poodle" in searchbar
    And clicks on the search button
    Then the user will be redirected to the page with poodles
