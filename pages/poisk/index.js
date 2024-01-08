import { reloadProduct } from "/modules/card_reload";
import { getData } from "/modules/http";
let h1_glav_ser = document.querySelector('.h1_glav_ser')
// import { filtrov } from '/modules/header';
let search_inp = document.querySelector('.search_inp')
let filtrov = JSON.parse(localStorage.getItem('filtrov'));
let container = document.querySelector('.con')
let serch_inp_local = JSON.parse(localStorage.getItem('serch_inp_local'));
let gen = location.search.split('=').at(-1);
let pops = document.querySelector('.pops')
console.log(gen);
if(gen.length <=0){
  let titel = document.querySelector('title')
  
  reloadProduct(filtrov, container)
  
  // search_inp.value = serch_inp_local
  h1_glav_ser.innerHTML = `"${serch_inp_local}" - pезультаты поиска`
  titel.innerHTML = `"${serch_inp_local}" - pезультаты поиска`
}
else{
  let titel = document.querySelector('title')
  
    let tov = getData('/goods');
  
    let filter_tov = tov.filter(item => item.type.includes(gen));
  
    console.log(filter_tov);
  
    reloadProduct(filter_tov, container)
  
  
  h1_glav_ser.innerHTML = gen.slice(0, 1).toUpperCase() + gen.slice(1, gen.length)
  titel.innerHTML = gen
}

getData('/goods')
  .then(res => {
    reloadProduct(res, pops)
  })
// let sveta_ = 
// getData('/goods')
//     .then(res => {
//         console.log(res.colors);        
//     })



let left_glav = document.querySelector('.left_glav')

let sena = document.createElement('h1')
let categort = document.createElement('h1')
let inp_div = document.createElement('div')
let inp1 = document.createElement('input')
let inp2 = document.createElement('input')
let svet = document.createElement('h1')
let div_sve = document.createElement('div')
let el_div_sve = document.createElement('div')
let svet1 = document.createElement('div')
let svet2 = document.createElement('div')
let svet3 = document.createElement('div')
let svet4 = document.createElement('div')
let svet5 = document.createElement('div')
let svet6 = document.createElement('div')
let svet7 = document.createElement('div')
let svet8 = document.createElement('div')
let svet9 = document.createElement('div')
let div_cetagories = document.createElement('div')

sena.classList.add('sena')
categort.classList.add('category')
inp_div.classList.add('inp_div')
inp1.classList.add('inp1')
inp2.classList.add('inp2')
svet.classList.add('svet')
div_sve.classList.add('div_sve')
el_div_sve.classList.add('el_div_sve')
svet1.classList.add('svet1', 'svet_item')
svet2.classList.add('svet2', 'svet_item')
svet3.classList.add('svet3', 'svet_item')
svet4.classList.add('svet4', 'svet_item')
svet5.classList.add('svet5', 'svet_item')
svet6.classList.add('svet6', 'svet_item')
svet7.classList.add('svet7', 'svet_item')
svet8.classList.add('svet8', 'svet_item')
svet9.classList.add('svet9', 'svet_item')

sena.innerHTML = 'Цена:'
categort.innerHTML = 'Категории'
inp1.placeholder = 'от 0'
inp2.placeholder = 'до 10000000000'
svet.innerHTML = 'Цвет:'
svet1.style.backgroundColor = 'black'
svet2.style.backgroundColor = 'orange'
svet3.style.backgroundColor = 'blue'
svet4.style.backgroundColor = 'green'
svet5.style.backgroundColor = 'red'
svet6.style.backgroundColor = 'grey'
svet7.style.backgroundColor = 'white'
svet8.style.backgroundColor = '#D0D0D1FF'
svet9.style.backgroundColor = '#915927FF'

left_glav.append(categort, sena, inp_div, svet, div_sve)
inp_div.append(inp1, inp2)
div_sve.append(svet1, svet2, svet3, svet4, svet5, svet6, svet7, svet8, svet9)