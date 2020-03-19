Feature: Check Login functionality

    Scenario Outline: Try Login with valid or invalid credentials
        Given the user goes on the website
        When the user types the <username> value for the username field
        And the user types the <password> value for the password field
        And the user clicks on the login button
        Then the login is <status>

        Examples:
            | username          | password               | status        |
            | "ciprian.macavei" | "MacaveiQA1919"        | "successfull" |
            | "ciprian.macavei" | "cipri.incorrect.pass" | "failed"      |
            | "cipri.macavei"   | "MacaveiQA1919"        | "failed"      |
            | "cipri"           | "cipri.incorrect.pass" | "failed"      |
            | ""                | "MacaveiQA1919"        | "failed"      |
            | "ciprian.macavei" | ""                     | "failed"      |
            | ""                | ""                     | "failed"      |