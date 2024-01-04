import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".right_strelka",
    prevEl: ".left_strelka",
  },
});
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let left_strelka2 = document.querySelector('.left_strelka2')
let right_strelka2 = document.querySelector('.right_strelka2')
let product_cards2 = document.querySelector('.product_cards2')

left_strelka2.onclick = () => {
  product_cards2.scrollLeft -= 1200
}
right_strelka2.onclick = () => {
  product_cards2.scrollLeft += 1200
}

