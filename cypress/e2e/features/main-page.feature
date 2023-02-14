Feature: Main Page

Scenario: Verify if two types of modes are available on the Main Page
    When I visit the Main Page
    Then I should see '2' types of modes

Scenario: Verify that Clicking on Offline Multiplayer should go to that particular mode
    When I visit the Main Page
    And I click on Offline Multiplayer
    Then I should go to particular mode

Scenario: Verify that the first move should always be for X
    When I visit the Main Page
    And I click on Offline Multiplayer
    Then I should see the first move is for X

Scenario: Verify that After the first move, only O can be clicked
    When I visit the Main Page
    And I click on Offline Multiplayer
    Then I should see the first move is for X
    Then after the first move, only O can be clicked

Scenario: Verify that one should not be able to click on an already marked cell again
    When I visit the Main Page
    And I click on Offline Multiplayer
    Then I should be able to click on any cell
    And I should not be able to click on an already marked cell again
    
Scenario: Verify that both X and O are visible in the UI once they are marked on the table
    When I visit the Main Page
    And I click on Offline Multiplayer
    Then I should see both X and O are visible in the UI once they are marked

Scenario: Verify that the first game is tied, the second is won by X and the last is won by O.
    When I visit the Main Page
    And I click on Offline Multiplayer
    Then I should see that the first game is tied
    And I should see that the second is won by X
    And I should see that the last is won by O

Scenario: Verify that you are able to see the 'Restart' game once the game is over
    When I visit the Main Page
    And I click on Offline Multiplayer
    Then I should see the 'Restart' game once the game is over