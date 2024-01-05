import { reloadGenres } from "./genres"
import { getData } from "./http"
import '/modules/modal.scss'
// import { reloadSearch } from "./modal"
import '/modules/header.scss'

let header = document.querySelector('header')

//A
let header_up = document.createElement('div')

let left_up = document.createElement('div')
let city = document.createElement('p')
let place_img = document.createElement('img')
let place_span = document.createElement('span')
let punkt = document.createElement('p')

let middle_up = document.createElement('div')
let dos = document.createElement('p')

let right_up = document.createElement('div')
let vop_ot = document.createElement('a')
let my_zakaz = document.createElement('a')
let lang_box = document.createElement('p')
let ru_img = document.createElement('img')





let header_middle = document.createElement('div')

let logo2 = document.createElement('p')
let logo2_img = document.createElement('img')

let catalog_btn = document.createElement('button')
let catalog_div = document.createElement('div')
let div_catal1 = document.createElement('div')
let div_catal2 = document.createElement('div')
let div_catal3 = document.createElement('div')

let search_inp = document.createElement('input')
let search_btn = document.createElement('button')
let search_img = document.createElement('img')

let div_btn = document.createElement('div')
let people_btn = document.createElement('button')
let people_img = document.createElement('img')
let izb_btn = document.createElement('button')
let izb_img = document.createElement('img')
let paket_btn = document.createElement('button')
let paket_img = document.createElement('img')


let modal = document.createElement('modal')


let header_down = document.createElement('div')
let rass_box = document.createElement('div')
let rass_img = document.createElement('img')
let categoriess_box_d = document.createElement('div')

//B

city.innerHTML = 'Город:'
place_img.src = '/public/icon/place.svg'
place_span.innerHTML = 'Ташкент'
punkt.innerHTML = 'Пункты выдачи'
dos.innerHTML = 'Доставим ваш заказ бесплатно — всего за 1 день!'
vop_ot.innerHTML = 'Вопрос-ответ'
vop_ot.href = '#'
my_zakaz.innerHTML = 'Мои заказы'
my_zakaz.href = '#'
lang_box.innerHTML = 'Русский'
ru_img.src = '/public/icon/ru.svg'
logo2_img.src = 'https://uzum-by-doni.netlify.app/uzum_logo.png'
catalog_btn.innerHTML = 'Каталог'
search_inp.placeholder = 'Искать товары и категории'
search_img.src = '/public/icon/search.svg'
people_btn.innerHTML = 'Войти'
people_img.src = '/public/icon/people.svg'
izb_btn.innerHTML = 'Избранное'
izb_img.src = '/public/icon/izb.svg'
paket_btn.innerHTML = 'Корзина'
paket_img.src = '/public/icon/paket.svg'
rass_box.innerHTML = 'Рассрочка'
rass_img.src = '/public/icon/union.png'

//B

header_up.classList.add('header_up')
left_up.classList.add('left_up')
city.classList.add('city')
place_img.classList.add('place_img')
place_span.classList.add('place_span')
punkt.classList.add('punkt')
middle_up.classList.add('middle_up')
dos.classList.add('dos')
right_up.classList.add('right_up')
vop_ot.classList.add('vop_ot')
my_zakaz.classList.add('vop_ot')
lang_box.classList.add('lang_box')
ru_img.classList.add('ru_img')
header_middle.classList.add('header_middle')
logo2.classList.add('logo2')
modal.classList.add('modal_search')
logo2_img.classList.add('logo2_img')
catalog_btn.classList.add('catalog_btn')
catalog_div.classList.add('catalog_div')
div_catal1.classList.add('div_catal1')
div_catal2.classList.add('div_catal2')
div_catal3.classList.add('div_catal3')
search_inp.classList.add('search_inp')
search_btn.classList.add('search_btn')
search_img.classList.add('search_img')
div_btn.classList.add('div_btn')
people_btn.classList.add('people_btn', 'btns_header_mid')
people_img.classList.add('people_img')
izb_btn.classList.add('izb_btn', 'btns_header_mid')
izb_img.classList.add('izb_img')
paket_btn.classList.add('paket_btn', 'btns_header_mid')
paket_img.classList.add('paket_img')
header_down.classList.add('header_down')
rass_box.classList.add('rass_box')
rass_img.classList.add('rass_img')
categoriess_box_d.classList.add('categoriess_box_d')

//D
header.append(header_up, header_middle, modal, header_down)

header_up.append(left_up, middle_up, right_up)
left_up.append(city)
city.prepend(place_img)
city.append(place_span, punkt)
middle_up.append(dos)
right_up.append(vop_ot, my_zakaz, lang_box)
lang_box.prepend(ru_img)

header_middle.append(logo2, catalog_btn, search_inp, search_btn, div_btn)
logo2.append(logo2_img)
catalog_btn.prepend(catalog_div)
catalog_div.prepend(div_catal1, div_catal2, div_catal3)
search_btn.append(search_img)
div_btn.append(people_btn, izb_btn, paket_btn)
people_btn.prepend(people_img)
izb_btn.prepend(izb_img)
paket_btn.prepend(paket_img)
header_down.append(rass_box, categoriess_box_d)
rass_box.prepend(rass_img)


//E
logo2.onclick = () => {
    location.assign('/')
}

getData('/goods')
    .then(res => {
        reloadGenres(res, categoriess_box_d)
    })


paket_btn.onclick = () => {
    location.assign('/pages/card/card.html')
}

search_inp.onkeyup = async () => {
    let search = search_inp.value.trim().toLowerCase();

    if (search.length > 0) {
        try {
            let res = await getData('/goods');
            let tov = res;  // Изменено на let res
            let filt_tov = tov.filter(tov => tov.title.trim().toLowerCase().includes(search));

            let modal_search = document.querySelector('.modal_search');
            modal_search.innerHTML = '';

            for (let item of filt_tov) {
                let div = document.createElement('div')
                let img= document.createElement('img')
                let h1 = document.createElement('h1');
                h1.classList.add('modal_ser_h1');
                div.classList.add('modal_ser_div');
                img.classList.add('modal_ser_img');

                img.src = '/public/icon/search.svg'
                h1.innerHTML = item.title;
                div.onclick = () => {
                    location.assign(`/pages/product_page/product.html?id=${item.id}`);
                };
                modal_search.append(div);
                div.append(img, h1)
            }

            modal.classList.add('show', 'fade');
            modal.classList.remove('hide');
        } catch (error) {
            console.error("Ошибка при получении данных:", error);
        }
    } else {
        modal.classList.remove('show', 'fade');
        modal.classList.add('hide');
    }
}

search_btn.onclick = async () => {
    let search = search_inp.value.trim().toLowerCase();
    let response = await getData('/goods');
    let tov = response;
    let filtrov = tov.filter(tov => tov.title.trim().toLowerCase().includes(search));
    // export default filtrov
    location.assign('/pages/poisk/index.html')
    localStorage.setItem('serch_inp_local', JSON.stringify(search_inp.value));
    localStorage.setItem('filtrov', JSON.stringify(filtrov));
}


        

people_btn.onclick = () => {
    let modal_sign = document.querySelector('.modal_sign')

    modal_sign.classList.add('show', 'fade')
    modal_sign.classList.remove('hide')
}