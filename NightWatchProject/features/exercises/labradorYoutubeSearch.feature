Feature: Search for animals on Youtube and then go back and search for other animals
  
  @animals
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

  @singers
  Scenario: Search for Adele and click on the video with the most views from the first 5 videos
    Given the user accesses Youtube
    And the title of the website is "YouTube"
    When the user sets a value of "Adele" in the searchbar
    And the user presses the search button
    Then a list of videos will be generated
    And the user will click on the video with the most views
  
  @dark-mode
  Scenario: Change to dark mode
    Given the user accesses the website
    And the title is "Youtube"
    When the user clicks on the Settings button and then on Dark Theme: Off
    And the user clicks the toggle button
    Then the background becomes dark
