import '/modules/sign.scss'

let modal_sign = document.querySelector('.modal_sign')
let img_sign = document.createElement('div')
let h1_sign = document.createElement('h1')
let p_sign = document.createElement('p')
let input_sob = document.createElement('input')
let input_sign = document.createElement('input')
let reg_sign = document.createElement('button')
let p2_sign = document.createElement('p')

h1_sign.innerHTML = 'Введите номер телефона'
img_sign.innerHTML = '&times;'
p_sign.innerHTML = 'Отправим смс с кодом подтверждения'
input_sign.placeholder = '+998   00 000-00-00'
reg_sign.innerHTML = 'Получить код'
p2_sign.innerHTML = 'Авторизуясь, вы соглашаетесь c политикой <br> обработки персональных данных'

img_sign.classList.add('img_sign')
h1_sign.classList.add('h1_sign')
p_sign.classList.add('p_sign')
input_sign.classList.add('input_sign')
input_sob.classList.add('hide')
reg_sign.classList.add('reg_sign')
p2_sign.classList.add('p2_sign')

modal_sign.append(img_sign, h1_sign, p_sign, input_sob, input_sign, reg_sign, p2_sign)

img_sign.onclick = () => {
    modal_sign.classList.add('hide')
    modal_sign.classList.add('fade', 'show')
}
let inp_val = ''
reg_sign.onclick = () => {
    localStorage.setItem('telephone_number', input_sign.value)
    input_sign.classList.add('hide')
    input_sob.classList.remove('hide')
    input_sob.classList.add('show')
    reg_sign.innerHTML = 'Отправить код'
}

// if (localStorage.getItem('telephone_number') ||) {
//     reg_sign.onclick = () => {
        
//     }
// }