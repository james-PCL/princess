@bookingFilter
Feature: Find Cruise Filter Tests with Json

Scenario: Filter Cruises looping all data in json
    Given I navigate to the URL
    When I click the Find Cruise button
    And The cruise search page will be displayed successfully
    Then Filter and Verify

Scenario: Cruise Search from "Find a Cruise" button
    Given I navigate to the URL
    When I click the Find Cruise button
    And The cruise search page will be displayed successfully
    Then Filter and Verify '<Data>'
Examples:
| Data|
| data1 |
| data2 |
| data3 |









