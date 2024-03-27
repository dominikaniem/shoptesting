# Portfolio - Dominika Niemiec, tester automatyzujący
Kurs Cypress Dla Początkujących by Fabryka Testów
Testy Sklepu Internetowego TAPS SHOP - koszyk, proces zakupowy, page objects
Test procesu w całości w pliku shoptest.cy.js
CircleCi jako narzędzie do zdalnego uruchamiania testów



version: 2.1
orbs:
  cypress: cypress-io/cypress@3.1.1
workflows:
  build:
    jobs:
        - cypress/install
        - cypress/run:
            requires: 
              - cypress/install
            store_artifacts: true
            spec: cypress/e2e/login.cy.js
        - cypress/run:
            requires: 
              - cypress/install
            spec: cypress/e2e/basket.cy.js
        - cypress/run:
            requires: 
              - cypress/install
            spec: cypress/e2e/order.cy.js
        - cypress/run:
            requires: 
              - cypress/install
            spec: cypress/e2e/shoptest.cy.js
            parallel: true
            parallelism: 4