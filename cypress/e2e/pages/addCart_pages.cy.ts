export class addCart{
    addToCartBtn() {
    cy.wait(1000); // Tunggu 1 detik sebelum mengklik elemen
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    }
}