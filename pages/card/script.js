import { getData } from "../../modules/http";
let container = document.querySelector('.container')
let del_btn = document.querySelector('.delete_button')
let card = []
let total = 0
getData('/card/')
    .then(res => {
        roloadProductCard(res)
        console.log(res);
    })
    
function roloadProductCard(arr) {
    for(let item of arr){
        let cart_div = document.createElement('div')
        let div_boxes = []
        for (let i = 0; i < 4; i++) {
            let div_box = document.createElement('div')
            div_boxes.push(div_box)
        }
        let first_box = div_boxes[0]
        let second_box = div_boxes[1]
        let third_box = div_boxes[2]
        let fourth_box = div_boxes[3]

        let product_checkbox = document.createElement('input')
        let product_image = document.createElement('img')
        let product_name = document.createElement('h4')
        let amount_box = document.createElement('div')
        let amount = document.createElement('p')
        let minus_button = document.createElement('button')
        let plus_button = document.createElement('button')
        let delete_button = document.createElement('button')
        let delete_img = document.createElement('img')
        let new_price = document.createElement('h4')
        let old_price = document.createElement('h6')
        let plus_img = document.createElement('img')
        let minus_img = document.createElement('img')
        let prices = document.createElement('div')
        product_name.onclick = () => {
            location.assign(`/pages/product_page/product.html?id=${item.id}`);
          };

        cart_div.classList.add('cart_div')
        first_box.classList.add('box')
        second_box.classList.add('box')
        third_box.classList.add('box')
        fourth_box.classList.add('box')
        product_checkbox.type = 'checkbox'
        product_image.classList.add('product_image')
        product_image.src = item.media[0]
        product_image.alt = 'product'
        product_name.classList.add('product_name')
        amount_box.classList.add('amount_box')
        amount.classList.add('amount')
        minus_button.classList.add('minus_button')
        plus_button.classList.add('plus_button')
        delete_button.classList.add('delete_button')
        delete_img.classList.add('delete_img')
        delete_img.src = 'https://cdn-icons-png.flaticon.com/128/484/484611.png'
        new_price.classList.add('new_price')
        old_price.classList.add('old_price')
        plus_img.classList.add('plus_img')
        plus_img.src = 'https://cdn-icons-png.flaticon.com/128/1828/1828925.png'
        minus_img.classList.add('minus_img')
        minus_img.src = 'https://cdn-icons-png.flaticon.com/128/2801/2801932.png'
        prices.classList.add('prices')
        product_checkbox.checked = true
        let price = item.price

        product_name.innerHTML = item.title.length >= 20 ? item.title.slice(0, 20) : item.title
        amount.innerText = '1'
        delete_button.innerHTML = 'Удалить'
        old_price.innerHTML = item.price
        if (item.isBlackFriday === true) {
            new_price.innerHTML = Math.floor(price - (price / 100) * item.salePercentage)
            old_price.classList.add('active_price')
        }else{
            new_price.classList.remove('active_price')
        }

        container.append(cart_div)
        cart_div.append(first_box, second_box, third_box, fourth_box)
        first_box.append(product_checkbox)
        second_box.append(product_image)
        third_box.append(product_name, amount_box)
        amount_box.append(minus_button, amount, plus_button)
        plus_button.append(plus_img)
        minus_button.append(minus_img)
        fourth_box.append(delete_button, prices)
        delete_button.prepend(delete_img)
        prices.append(new_price, old_price)



        let updated_price = price

        plus_button.onclick = () => {
            amount.innerHTML++
            updated_price = updated_price + price
            old_price.innerHTML = updated_price
            if (item.isBlackFriday === true) {
                new_price.innerHTML = Math.floor(updated_price - (updated_price / 100) * item.salePercentage)
            }
          }
          minus_button.onclick = () => {
            amount.innerHTML--
            updated_price = updated_price - price
            old_price.innerHTML = updated_price
            if (item.isBlackFriday === true) {
              new_price.innerHTML = Math.floor(updated_price - (updated_price / 100) * item.salePercentage)
            }
          }
          if(product_checkbox.checked === true){
              total += updated_price
          }
    }
    let tov_h1 = document.querySelector('.tov_h1')
    let price_tov = document.querySelector('.price_tov')
    tov_h1.innerHTML = `Товары (${arr.length}):`
    price_tov.innerHTML = total    
}