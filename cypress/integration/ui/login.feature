Feature: Login Feature

    Scenario Outline: SignUp test
        Given I open the site "index.html"
        When I click on the element "signUp"
        Then I expect that element "signUpModal" does exist
        Then I expect that element "signUpModalLabel" have the text "Sign up"
        Then I enter "<USER_NAME>" to the inputfield "signUpuserName"
        Then I enter "<PASSWORD>" to the inputfield "signPassword"
        When I click on the element "signUpButton"
        Then I expect that window alert have the text "<ALERT_MSG>"
        Examples:
            | USER_NAME           | PASSWORD      | ALERT_MSG                |
            | TestUser30119211132 | TestUser30119 | This user already exist. |
            | TestUser3011921121  | TestUser30119 | Sign up successful.      |

    Scenario: Login Test - Success
        Given I open the site "index.html"
        When I click on the element "login"
        Then I expect that element "loginModal" does exist
        Then I expect that element "loginModalLabel" have the text "Log in"
        Then I enter "TestUser3011921121" to the inputfield "loginUserName"
        Then I enter "TestUser30119" to the inputfield "loginPassword"
        When I click on the element "loginButton"
        Then I expect that element "nameofUser" have the text "Welcome TestUser3011921121"
