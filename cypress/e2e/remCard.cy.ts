import { LoginPage } from "./pages/login_pages.cy";
import {addCart} from "./pages/addCart_pages.cy";
import { removeCard } from "./pages/removeCart_pages.cy";


let loginPage = new LoginPage();
let tambahCard = new addCart();
let hapusCard = new removeCard();

const URL = 'https://www.saucedemo.com/';

it('Test LOGIN', () => {
    loginPage.login(URL,'standard_user','secret_sauce') 
})

it('Test Add Card Product', () => {
    loginPage.login(URL, 'standard_user', 'secret_sauce')
    tambahCard.addToCartBtn()
})

it('Test Remove Card Product', ()=>{
    loginPage.login(URL, 'standard_user', 'secret_sauce')
    tambahCard.addToCartBtn()
    hapusCard.RemBtnShop();
})

/**
 * maksud dari codingan diatas yaitu : 
 *  
 *  Codingan di atas merupakan penggunaan beberapa kelas dan metode yang terkait dengan tindakan login, menambahkan produk ke keranjang, 
 *  dan menghapus produk dari keranjang di situs web yang sedang diuji menggunakan Cypress.
 *  Pertama, diinisialisasi instance dari kelas LoginPage, addCart, dan removeCard dengan menyimpannya dalam variabel loginPage, tambahCard, dan hapusCard.
 *  Kemudian, diinisialisasi konstanta URL yang berisi URL situs yang akan diuji.
 *  Di dalam blok pengujian Test LOGIN, dilakukan tindakan login dengan menggunakan metode login() dari loginPage untuk masuk ke situs dengan kredensial pengguna yang diberikan.
 *  Di dalam blok pengujian Test Add Card Product, dilakukan tindakan login terlebih dahulu, kemudian menggunakan metode addToCartBtn() dari tambahCard untuk menambahkan produk ke keranjang.
 *  Di dalam blok pengujian Test Remove Card Product, dilakukan tindakan login dan penambahan produk ke keranjang terlebih dahulu, kemudian menggunakan metode RemBtnShop() dari hapusCard untuk menghapus produk dari keranjang.
 *  Dengan menggunakan pengaturan ini, dilakukan pengujian secara berurutan terkait tindakan login, penambahan produk ke keranjang, dan penghapusan produk dari keranjang pada situs yang sedang diuji menggunakan Cypress
 */
