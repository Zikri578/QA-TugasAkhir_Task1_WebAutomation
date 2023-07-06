export class addCart{
    addToCartBtn() {
    cy.wait(1000); // Tunggu 1 detik sebelum mengklik elemen
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    }
}

/**
 * maksud dari codingan diatas yaitu :
 *  
 *  Codingan di atas merupakan implementasi sebuah metode bernama addToCartBtn() yang terdapat dalam kelas addCart.
 *  Metode ini digunakan untuk mengklik tombol "Add to Cart" pada elemen dengan atribut data-test bernilai "add-to-cart-sauce-labs backpack".
 *  Pada awal metode, terdapat cy.wait(1000) yang berfungsi untuk memberikan jeda selama 1 detik sebelum melakukan tindakan selanjutnya, yaitu mengklik elemen.
 *  Ini bisa berguna dalam beberapa situasi, seperti menunggu animasi selesai atau menangani masalah kestabilan.
 *  Selanjutnya, cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click() digunakan untuk mencari elemen dengan atribut data-test yang sesuai dan melakukan klik pada elemen tersebut.
 *  Dengan demikian, ketika metode addToCartBtn() dipanggil, akan dilakukan penungguan selama 1 detik, kemudian akan mengklik elemen "Add to Cart" dengan atribut data-test yang sesuai.
 */ 
