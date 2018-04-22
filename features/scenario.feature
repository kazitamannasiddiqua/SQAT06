Feature: Duck Duck Go
 I search duck duck go

  Scenario: search duck duck go
    Given I go to duck duck go
    When  I search for WebdriverIO
    Then  I should see the search results
