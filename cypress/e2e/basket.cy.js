import HomePage from "../page-objects/homePage";
import CartPage from "../page-objects/cartPage";

describe('it should test basket', () => {
    const homePage = new HomePage();
    const cartPage = new CartPage();

it('should add product to cart and delete from there' , function(){
    homePage.visitPage(),
    homePage.addProductToCart(),
    homePage.clickGoToCartFromProductButton(),
    cartPage.checkThatAddedProductIsInCart(),
    cartPage.removeItemFromCart(),
    cartPage.checkThatCartIsEmpty()
    })
})