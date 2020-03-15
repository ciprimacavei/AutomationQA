Feature: Search for ladybugs on Google

    Scenario Outline: Scenario Outline name: Search ladybugs
        Given the user accesses the website
        When page is loaded and the title is "Google"
        Then the user will input <bugs> in the search bar and hit enter
        Examples:
            | bugs       |
            | "ladybugs" |
            | "2"        |

