Feature: Company profile search

  As a user,
  I want to be able to provide the stock symbol of any company,
  so that I can retrieve and view all of that company’s profile information

  Scenario: Searching by stock symbol
    Given a stock symbol
    When I search using the stock symbol
    Then the company's profile information is retrieved

  Scenario: Identifying price information (currency)
    Given I have searched for a company's profile
    Then the price is displayed with a "$"

  Scenario: Identifying price change information (positive change)
    Given a company whose stock price has gone up
    And I have searched for the company's profile
    Then the "changes" field is highlighted in "green"
    And the "changesPercentage" field is highlighted in "green"

  Scenario: Identifying price change information (negative change)
    Given a company whose stock price has gone down
    And I have searched for the company's profile
    Then the "changes" field is highlighted in "red"
    And the "changesPercentage" field is highlighted in "red"

  Scenario: Visiting a company's website
    Given I have searched for a company's profile
    When  I click on their website link
    Then I am taken to the company's website
