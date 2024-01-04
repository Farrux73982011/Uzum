import '/modules/card_style.scss'

export function reloadProduct(arr, place) {
  for (let item of arr) {
    let price = item.price;

    let div = document.createElement("div");
    let img = document.createElement("img");
    let title = document.createElement("h1");
    let div_down = document.createElement('div')
    let div_price = document.createElement('div')
    let razdel_price = document.createElement('h1')
    let original_price = document.createElement("h1");
    let sale_price = document.createElement("h1");
    let rate_div = document.createElement("div");
    let rate_h1 = document.createElement("h1");
    let rate_img = document.createElement("img");
    let heart = document.createElement('img')
    let add_card_btn = document.createElement('img')

    div.classList.add("product");
    img.classList.add("product_img");
    title.classList.add("product_title");
    rate_div.classList.add("rate_div");
    rate_h1.classList.add("rate_h1");
    rate_img.classList.add("rate_img");
    original_price.classList.add("product_original_price");
    sale_price.classList.add("product_sale_price");
    heart.classList.add('heart')
    razdel_price.classList.add('razdel_price')
    add_card_btn.classList.add('add_card_btn')
    div_down.classList.add('div_down')
    div_price.classList.add('div_price')

    img.src = item.media[0];
    rate_h1.innerHTML = item.rating;
    rate_img.src = "/public/icon/star.png";
    title.innerHTML = `${item.title.slice(0, 40)}...`;
    original_price.innerHTML = price;
    if (item.isBlackFriday === true) {
      original_price.classList.add("price_sale");
      sale_price.innerHTML = Math.floor(
        price - (price / 100) * item.salePercentage
      );
    }
    razdel_price.innerHTML = `${Math.floor(item.price / 12)} мес`
    heart.src = '/public/icon/heart.png'
    add_card_btn.src = '/public/icon/market.svg'

    place.append(div);
    div.append(heart, img, title, rate_div, razdel_price, div_down);
    div_down.append(div_price, add_card_btn)
    div_price.append(original_price, sale_price)
    rate_div.append(rate_h1, rate_h1);

    div.onclick = () => {
      location.assign(`/pages/product_page/product.html?id=${item.id}`);
    };
    heart.onclick = () => {
      if (heart.src === '/public/icon/heart.png') {
        heart.src = '/public/icon/like.svg'
      }else{
        heart.src = '/public/icon/heart.png'
      }
    }
  }
  let imgs_div = document.querySelectorAll('.big_img')
  let big_img = document.querySelector('.big_img')

  big_img.src = arr.media[0]
}
