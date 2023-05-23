import HomePage from "../page-objects/homePage";
import AccountPage from "../page-objects/myAccountPage";
import CartPage from "../page-objects/cartPage";
import OrderPage from "../page-objects/orderPage";
import { faker } from '@faker-js/faker';

describe('Online Shop test automation', () => {
    const homePage = new HomePage();
    const accountPage = new AccountPage();
    const cartPage = new CartPage();
    const orderPage = new OrderPage();


    beforeEach(function () {
        cy.fixture("users").as("userData")
        cy.fixture("products").as("productsData")
        cy.fixture("toprated").as("topratedData")
    })

    it('should not login to the application', function () {
        homePage.visitPage()
        homePage.clickMyAccountHeaderButton()
        accountPage.fillUsernamefieldWithEmail(faker.internet.email())
        accountPage.fillPasswordFieldWithPassword(faker.internet.password())
        accountPage.clickLoginButton()
        accountPage.checkVisibilityOfLoginError()
    });

    it('should login to the application', function () {
        homePage.visitPage()
        homePage.clickMyAccountHeaderButton()
        accountPage.fillUsernamefieldWithEmail(this.userData.email)
        accountPage.fillPasswordFieldWithPassword(this.userData.password)
        accountPage.clickLoginButton()
        accountPage.checkVisibilityOfMyNavigation();
    })

    it('should add product to the cart and delete', function () {
        homePage.visitPage()
        homePage.addProductToCart(this.productsData.HoodieWithZipper.Locator)
        homePage.clickGoToCartFromProductButton()
        cartPage.checkThatAddedProductIsInCart(this.productsData.HoodieWithZipper.Name)
        cartPage.removeItemFromCart()
        cartPage.checkThatCartIsEmpty()
    })

    it('should order a product from top-rated', function () {
        homePage.visitPage()
        homePage.addTopProductToCart(this.topratedData.HoodieWithLogo.Locator)
        homePage.clickGoToCartFromTopRated(),
        cartPage.checkThatAddedTopProductIsInCart(this.topratedData.HoodieWithLogo.Name)
        cartPage.proceedToPayment()
        orderPage.fillAllRequiredFields()
        orderPage.finishOrder()
        orderPage.checkOrderFinished()
    })
})
