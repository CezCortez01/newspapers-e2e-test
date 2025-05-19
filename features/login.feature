Feature: Login functionality for Newspapers.com

Scenario: User logs in with valid credentials (Manual CAPTCHA Solve)
    Given I am on the Newspapers.com login page
    When I submit valid login credentials
    And I manually solve the reCAPTCHA challenge
    And I click the Sign In button
    Then I should be successfully redirected to the homepage