import Urls from "./urls";
const usernameEmailField = "#username"
const passwordField = "#password"
const loginButton = 'button[name=login]'

class AccountPage{

    fillUsernamefieldWithEmail(email) {
    cy.get(usernameEmailField).type(email)
    }

    fillPasswordFieldWithPassword(password){
    cy.get(passwordField).type(password)
    }

    clickLoginButton(){
    cy.get(loginButton).click()
    }
    
    visitPage(){
    const urls = new Urls
    urls.visytMyAccountPage
    }
}

export default AccountPage