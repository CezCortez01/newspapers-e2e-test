Feature: Login functionality for Newspapers.com

  Scenario: User logs in with valid credentials
    Given I am on the login page
    When I enter valid credentials
    And I click on the login button
    Then I should be redirected to the homepage
