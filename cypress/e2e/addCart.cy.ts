import { LoginPage } from "./pages/login_pages.cy";
import {addCart} from "./pages/addCart_pages.cy";

let loginPage = new LoginPage();

let tambahCard = new addCart();
const URL = 'https://www.saucedemo.com/';

it('Test LOGIN', () => {
    loginPage.login(URL,'standard_user','secret_sauce') 
})

it('Test Add Card Product', () => {
    loginPage.login(URL, 'standard_user', 'secret_sauce')
    tambahCard.addToCartBtn()
})

/**
 * maksud dari codingan diatas :
 * 
 *  Pertama, diimpor modul LoginPage dan addCart dari file login_pages.cy dan addCart_pages.cy secara berurutan.
 *  Selanjutnya, dibuat instansi loginPage menggunakan kelas LoginPage.
 *  Kemudian, dibuat instansi tambahCard menggunakan kelas addCart.
 *  URL situs yang akan diuji disimpan dalam variabel URL.
 *  Pada blok pengujian pertama (it('Test LOGIN', () => {...})), dilakukan login dengan memanggil metode login dari loginPage dengan menggunakan URL, nama pengguna, dan kata sandi yang sesuai.
 *  Pada blok pengujian kedua (it('Test Add Card Product', () => {...})), kembali dilakukan login menggunakan metode loginPage.login() untuk memastikan pengguna sudah masuk. 
 *  Lalu, dilakukan tindakan memanggil metode addToCartBtn() dari tambahCard, yang akan menambahkan produk ke keranjang dengan mengklik tombol "Add to Cart".
 *  Seluruh pengujian dijalankan pada situs yang sesuai dengan URL yang didefinisikan sebelumnya.
*/
