export class removeCard{
    RemBtnShop() {
    cy.wait(1000); // Tunggu 1 detik sebelum mengklik elemen
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    }
}