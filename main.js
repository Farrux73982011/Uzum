import { reloadProduct } from "./modules/card_reload";
import { getData } from "./modules/http"

let product_cards = document.querySelector('.product_cards')
let product_cards2 = document.querySelector('.product_cards2')

getData('/goods')
    .then(res => {
        reloadProduct(res, product_cards)
    })
getData('/goods')
    .then(res => {
        reloadProduct(res, product_cards2)
    })