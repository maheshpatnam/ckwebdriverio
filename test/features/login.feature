
Feature: Login feature

  Scenario Outline: Verify that user can login with valid data
    Given I am on the login page
    When I enter valid <username> and <password>
    Then I should be redirected to the home page

    Examples: 
      | username                   | password     |
      | mahesh.patnam123@gmail.com | Test@7654321 |
  

  Scenario Outline: Verify that user could see specific errors when not enough information is
provided during login

    Given I am on the login page
    When I enter invalid <username> or <password>
    Then I should see an error <message>

    Examples: 
      | username                   | password      | message                                            |
      | abced                      | wrongpassword | Sorry, dit is geen geldig e-mailadres              |
      | mahesh.patnam123@gmail.com | ab            | Je wachtwoord moet tussen 5 en 20 tekens lang zijn |
 
  @login
Scenario Outline: Verify that logged in user can add a new address
    Given I am on the login page
    When I enter valid <username> and <password>
    Then I should be redirected to the home page
    When I add a new address with all personal details firstname <firstname> lastname <lastname> streetname <streetname> housenumber <housenumber> city <city> postalcode <postalcode> country <country> and billingaddress <billingaddress>
    Then I should see the new address in my address book with success message <message>

    Examples: 
      | username                   | password     | firstname | lastname | streetname            | housenumber | city     | postalcode | country   | billingaddress | message |
      | mahesh.patnam123@gmail.com | Test@7654321 | mahesh    | patnam   | prinses christinalaan |          96 | uithoorn |     1421 BN | Nederland | Factuuradres   | Nieuw adres toegevoegd |