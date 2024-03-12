import { Product } from "./homePage";
import { TopRated } from "./homePage";

const productName = '.product-name'
const removeItemButton = '.remove'
const emptyCartAlert = '.wc-block-components-notice-banner__content'
const goToPaymentsButton = '.wc-proceed-to-checkout'


class CartPage {

    checkThatAddedProductIsInCart() {
        cy.get(productName).contains(Product.HoodieWithZipper.Name).should('exist')
    }
    checkThatAddedTopProductIsInCart() {
        cy.get(productName).contains(TopRated.HoodieWithLogo.Name).should('exist')
    }
    removeItemFromCart() {
        cy.get(removeItemButton).click()
    }
    checkThatCartIsEmpty() {
        cy.get(emptyCartAlert).should('exist')
    }

    proceedToPayment() {
        cy.get(goToPaymentsButton).click()
    }
}

export default CartPage;