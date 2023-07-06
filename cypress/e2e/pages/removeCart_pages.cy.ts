export class removeCard{
    RemBtnShop() {
    cy.wait(1000); // Tunggu 1 detik sebelum mengklik elemen
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    }
}

/**
 * maksud dari codingan diatas yaitu : 
 * 
 *  Codingan di atas adalah kelas removeCard yang berisi metode RemBtnShop().
 *  Metode ini digunakan untuk mengklik tombol "Remove" pada suatu produk di keranjang di situs web yang sedang diuji menggunakan Cypress.
 *  Di dalam metode RemBtnShop(), terdapat penggunaan cy.wait(1000) untuk menunggu selama 1 detik sebelum melakukan tindakan berikutnya.
 *  Hal ini dapat digunakan untuk memastikan kesiapan elemen yang akan diklik.
 *  Setelah itu, menggunakan cy.get('[data-test="remove-sauce-labs-backpack"]') untuk mengambil elemen dengan atribut data-test yang bernilai remove-sauce-labs-backpack. 
 *  Atribut ini digunakan untuk mengidentifikasi tombol "Remove" pada produk tertentu di keranjang.
 *  Selanjutnya, digunakan click() untuk melakukan tindakan mengklik elemen tersebut, sehingga produk akan dihapus dari keranjang.
 *  Dengan menggunakan kelas removeCard dan metode RemBtnShop(), kita dapat melakukan tindakan penghapusan produk dari keranjang pada situs yang sedang diuji.
*/
