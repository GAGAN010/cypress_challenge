Feature: Cart and Purchase

    Background:
        Given I open the site "index.html"
        When I click on the element "login"
        Then I expect that element "loginModal" does exist
        Then I expect that element "loginModalLabel" have the text "Log in"
        Then I enter "TestUser3011921121" to the inputfield "loginUserName"
        Then I enter "TestUser30119" to the inputfield "loginPassword"
        When I click on the element "loginButton"
        Then I expect that element "nameofUser" have the text "Welcome TestUser3011921121"

    Scenario: Add Items to Cart and Successful purchase
        Then I click on the element "samsungPhone"
        And I click on the element "addtoCartButton"
        Then I click on the element "cart"

    Scenario: Change Items from the cart
        Then I click on the element "cart"
        And I click on the element "deleteCartItem"
        And I click on the element "home"
        And I expect that element "categories" does exist
        And I click on the element "nokiaPhone"
        Then I click on the element "addtoCartButton"


    Scenario: Purchase item in the cart
        And  I click on the element "cart"
        Then I click on the element "placeOrder"
        And I enter "TestBuy" to the inputfield "placeOrderModalName"
        And I enter "Australia" to the inputfield "placeOrderModalcountry"
        And I enter "Melbourne" to the inputfield "placeOrderModalcity"
        And I enter "1232312312232323" to the inputfield "placeOrderModalcard"
        And I enter "02" to the inputfield "placeOrderModalmonth"
        And I enter "22" to the inputfield "placeOrderModalyear"
        Then I click on the element "purchasebutton"
        And I expect that element "alertModalMsg" have the text "Thank you for your purchase!"
        And I click on the element "purchaseModalConfimbutton"
