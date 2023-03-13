Feature: Login feature

  Scenario Outline: Verify that user could see specific errors when not enough information is
provided during login

    Given I am on the login page
    When I enter invalid <username> or <password>
    Then I should see an error <message>

    Examples: 
      | username                    | password  | message                                                             |
      | mahesh.patnam1231@gmail.com | wrongpass | Je gebruikersnaam en wachtwoord matchen niet. Probeer het nog eens. |

  Scenario Outline: Verify that user can login with valid data
    Given I am on the login page
    When I enter valid <username> and <password>
    Then I should be redirected to the home page

    Examples: 
      | username                   | password     |
      | mahesh.patnam123@gmail.com | Test@7654321 |
