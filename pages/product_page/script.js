import { getData, postData } from "../../modules/http";
let id = location.search.split('=').at(-1)
let thumbs_slider = document.querySelector('#thumbs-slider .slider-container')
let title = document.querySelector('title')
let container = document.querySelector('.container')
let swiper_container = document.querySelector('.slider-container')
let add_card = document.querySelector('.add_card')
let card = []

getData('/goods/' + id)
    .then(res => {
        reloadProduct(res)
        modal_create(res)
        console.log(res);
    })

getData('/card/')
  .then(res => {
    card = res
    console.log(res);
  })

function reloadProduct(arr) {
    title.innerHTML = arr.title
    let rate = document.querySelector('.rate_span')
    let img_rate = document.querySelector('.rate_img')
    rate.innerHTML = arr.rating
    let up_p = document.querySelector('.up_p')
    up_p.innerHTML = arr.title
    let sena_sold = document.querySelector('.sena_sold')
    let sena_original = document.querySelector('.sena_original')
    let price = arr.price
    let plus = document.querySelector('.plus')
    let minus = document.querySelector('.minus')
    let num = document.querySelector('.num')

    let updated_price = price

      plus.onclick = () => {
        num.innerHTML++
        updated_price = updated_price + price
        sena_original.innerHTML = updated_price
        if (arr.isBlackFriday === true) {
        sena_sold.innerHTML = Math.floor(updated_price - (updated_price / 100) * arr.salePercentage)
        }
      }
      minus.onclick = () => {
        num.innerHTML--
        updated_price = updated_price - price
        sena_original.innerHTML = updated_price
        if (arr.isBlackFriday === true) {
          sena_sold.innerHTML = Math.floor(updated_price - (updated_price / 100) * arr.salePercentage)
        }
      }   
      if (arr.isBlackFriday === true) {
          sena_sold.innerHTML = Math.floor(price - (price / 100) * arr.salePercentage)
          sena_original.classList.add('active_price')
      }else{
          sena_original.classList.remove('active_price')
      }
    sena_original.innerHTML = price
    let rass_h1 = document.querySelector('.rass_h1')
    rass_h1.innerHTML = `От ${Math.floor(price / 12)} мес`
    let deskription = document.querySelector('.deskription')
    deskription.innerHTML = arr.description








    let currentIndex = 0;
    let mainSliderContainer = document.querySelector('#main-slider .slider-container');
    let thumbsSliderContainer = document.querySelector('#thumbs-slider .slider-container');
    let leftArrow = document.querySelector('.left_strelka');
    let rightArrow = document.querySelector('.right_strelka');
    
    function changeSlide(index) {
      currentIndex += index;
    
      if (currentIndex < 0) {
        currentIndex = mainSliderContainer.children.length - 1;
      } else if (currentIndex >= mainSliderContainer.children.length) {
        currentIndex = 0;
      }
    
      let transformValue = -currentIndex * 100 + '%';
      mainSliderContainer.style.transform = 'translateX(' + transformValue + ')';
    }
    
    leftArrow.onclick = () => {
      changeSlide(-1);
    };
    
    rightArrow.onclick = () => {
      changeSlide(1);
    };
    
    function generateSlide(imagePath, index) {
      let slide = document.createElement('div');
      slide.classList.add('slide');
      slide.innerHTML = `<img src="${imagePath}" alt="Slide ${index + 1}">`;
    
      let thumb = document.createElement('div');
      thumb.classList.add('thumb');
      thumb.innerHTML = `<img src="${imagePath}" alt="Thumb ${index + 1}">`;
      thumb.onclick = () => {
        currentIndex = index;
        changeSlide(0);
      };
    
      mainSliderContainer.append(slide);
      thumbsSliderContainer.append(thumb);
    }
  
    title.innerHTML = arr.title;
    
    for (let i = 0; i < arr.media.length; i++) {
      generateSlide(arr.media[i], i);
    }

      add_card.onclick = () => {
        if(card.includes(arr)){
          cart = cart.filter(item => item !== arr)
        }else{
          postData('/card/', arr)
          show_function()
          let set_time = setTimeout(hide_function, 3000)
        }
      }
}
function show_function() {
  let modal = document.querySelector('.modal')

  modal.classList.add('fade', 'show')
  modal.classList.remove('hide')
}
function hide_function() {
  let modal = document.querySelector('.modal')

  modal.classList.remove('fade', 'show')
  modal.classList.add('hide')
}
function modal_create(arr) {
  let modal = document.querySelector('.modal')
  let img_product = document.createElement('img')
  let middle_div = document.createElement('div')
  let h1_tovar_add_card = document.createElement('h1')
  let name_card = document.createElement('h1')
  let right_div = document.createElement('div')
  let close = document.createElement('div')
  let pereyti_v_kor = document.createElement('a')

  img_product.src = arr.media[0]
  h1_tovar_add_card.innerHTML = 'Товар добавлен в корзину'
  name_card.innerHTML = arr.title
  close.innerHTML = '&times;'
  pereyti_v_kor.innerHTML = 'Перейти в корзину'
  pereyti_v_kor.href = '/pages/card/card.html'

  img_product.classList.add('img_product')
  middle_div.classList.add('middle_div')
  h1_tovar_add_card.classList.add('h1_tovar_add_card')
  name_card.classList.add('name_card')
  right_div.classList.add('right_div')
  close.classList.add('close')
  pereyti_v_kor.classList.add('pereyti_v_kor')

  modal.append(img_product, middle_div, right_div)
  middle_div.append(h1_tovar_add_card, name_card)
  right_div.append(close, pereyti_v_kor)
  close.onclick = () => {
    modal.classList.remove('fade', 'show')
    modal.classList.add('hide')
  }
}