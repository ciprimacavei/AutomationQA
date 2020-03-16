Feature: Check Login functionality

    Scenario Outline: Try Login with valid or invalid credentials
        Given the user goes on the website
        When the user types the <username> value for the username field
        And the user types the <password> value for the password field
        And the user selects "romanian" as a preffered language
        And the parameters are changed to Romanian
        And the user clicks on the login button
        Then the user is redirected to the main page if login is <status>

        Examples:
            | username          | password               | status      |
            | "ciprian.macavei" | "correct pass"         | successfull |
            | "ciprian.macavei" | "cipri.incorrect.pass" | failed      |
            | "cipri.macavei"   | "correct pass"         | failed      |
            | "cipri"           | "cipri.incorrect.pass" | failed      |
            | ""                | "CipriQA1919"          | failed      |
            | "ciprian.macavei" | ""                     | failed      |
            | ""                | ""                     | failed      |