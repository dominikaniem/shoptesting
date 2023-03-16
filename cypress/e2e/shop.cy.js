import HomePage from "../page-objects/homePage";
import AccountPage from "../page-objects/myAccountPage";

describe('Online Shop test automation', () => {
    const homePage = new HomePage();
    const accountPage = new AccountPage()
    
    before(function () {
    cy.fixture('users').as('userData')   //this odwołuje sie do danych  
    })



    it('should login to the application' , function () {
        homePage.visitPage()
        homePage.clickMyAccountHeaderButton()
        accountPage.fillUsernamefieldWithEmail(this.userData.email)
        accountPage.fillPasswordFieldWithPassword(this.userData.password)
        accountPage.clickLoginButton()
        })

    it('should not login to the application' , function () {

      })


})