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