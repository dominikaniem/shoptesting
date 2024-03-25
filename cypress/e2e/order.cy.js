import HomePage from "../page-objects/homePage";
import OrderPage from "../page-objects/orderPage";
import CartPage from "../page-objects/cartPage";
import { faker } from '@faker-js/faker';

describe('it should test order', () => {

    const homePage = new HomePage();
    const cartPage = new CartPage();
    const orderPage = new OrderPage();

    it('should order a product', function () {
        homePage.visitPage()
        homePage.addProductToCart()
        homePage.addOtherProductToCart()
        homePage.clickGoToCartFromProductButton()
        cartPage.checkThatAddedProductIsInCart()
        cartPage.proceedToPayment()
        orderPage.fillAllRequiredFields()
        orderPage.finishOrder()
        orderPage.checkOrderFinished()
    })

})