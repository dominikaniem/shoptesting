import HomePage from "../page-objects/homePage";
import CartPage from "../page-objects/cartPage";

describe('it should test basket', () => {
const homePage = new HomePage();
const cartPage = new CartPage();

    it('should add product to cart and delete from new', function () {
        homePage.visitPage(),
        homePage.addProductToCart(),
        homePage.clickGoToCartFromProductButton(),
        cartPage.checkThatAddedProductIsInCart(),
        cartPage.removeItemFromCart(),
        cartPage.checkThatCartIsEmpty()
    })

    it('should add product to cart and delete from top', function () {
        homePage.visitPage(),
        homePage.addTopProductToCart(),
        homePage.clickGoToCartFromTopRated(),
        cartPage.checkThatAddedTopProductIsInCart(),
        cartPage.removeItemFromCart(),
        cartPage.checkThatCartIsEmpty()
    })
})