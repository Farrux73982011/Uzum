let footer = document.querySelector('.footer1')
import '/modules/footer.scss'
import '/modules/footer_media.scss'
let footer2 = document.querySelector('.footer2')



//A
let div_up2 = document.createElement('div')

let div_left2 = document.createElement('div')
let o_nas2 = document.createElement('h1')
let punkt2 = document.createElement('p')
let vakans2 = document.createElement('p')

let div_middle2 = document.createElement('div')
let polzovateli2 = document.createElement('h1')
let svz2 = document.createElement('p')
let vop2 = document.createElement('p')

let div_posl_mid2 = document.createElement('div')
let for_pered2 = document.createElement('h1')
let prod_uzum2 = document.createElement('p')
let for_prodav2 = document.createElement('p')

let div_right2 = document.createElement('div')
let download2 = document.createElement('h1')
let skach_div2 = document.createElement('div')
let appstore_div2 = document.createElement('div')
let store_logo2 = document.createElement('img')
let playmar_div2 = document.createElement('div')
let playmar_logo2 = document.createElement('img')
let uzum_soch_div2 = document.createElement('div')
let uzum_soch2 = document.createElement('h1')
let soch_div2 = document.createElement('div')
let ins2 = document.createElement('img')
let tel2 = document.createElement('img')
let you2 = document.createElement('img')
let fac2 = document.createElement('img')

let div_down2 = document.createElement('div')
let sogl2 = document.createElement('h1')
let pol_sogl2 = document.createElement('h1')
let inn2 = document.createElement('p')





//C
o_nas2.innerHTML = 'О нас'
punkt2.innerHTML = 'Пункты выдачи'
vakans2.innerHTML = 'Вакансии'
polzovateli2.innerHTML = 'Пользователям'
svz2.innerHTML = 'Связаться с нами'
vop2.innerHTML = 'Вопрос - Ответ'
for_pered2.innerHTML = 'Для предпринимателей'
prod_uzum2.innerHTML = 'Продавайте на Uzum'
for_prodav2.innerHTML = 'Вход для продавцов'
download2.innerHTML = 'Скачать приложение'
store_logo2.src = '/public/icon/apple2.svg'
playmar_logo2.src = '/public/icon/playma_2.svg'
uzum_soch2.innerHTML = 'Uzum в соцсетях'
ins2.src = '/public/icon/ins.svg'
tel2.src = '/public/icon/tel.svg'
you2.src = '/public/icon/you.svg'
fac2.src = '/public/icon/fac.svg'
sogl2.innerHTML = 'Соглашение о конфиденциальности'
pol_sogl2.innerHTML = 'Пользовательское соглашение'
inn2.innerHTML = '«2023© ООО «UZUM MARKET». ИНН 309376127. Все права защищены»'





//B
div_up2.classList.add('div_up')
div_left2.classList.add('div_left')
o_nas2.classList.add('o_nas')
punkt2.classList.add('punkt')
vakans2.classList.add('vakans')
div_middle2.classList.add('div_middle')
polzovateli2.classList.add('polzovateli')
svz2.classList.add('svz')
vop2.classList.add('vop')
div_posl_mid2.classList.add('div_posl_mid')
for_pered2.classList.add('for_pered')
prod_uzum2.classList.add('prod_uzum')
for_prodav2.classList.add('for_prodav')
div_right2.classList.add('div_right')
download2.classList.add('download')
appstore_div2.classList.add('appstore_div')
store_logo2.classList.add('store_logo')
playmar_div2.classList.add('playmar_div')
playmar_logo2.classList.add('playmar_logo')
uzum_soch2.classList.add('uzum_soch')
ins2.classList.add('ins')
tel2.classList.add('tel')
you2.classList.add('you')
fac2.classList.add('fac')
div_down2.classList.add('div_down')
sogl2.classList.add('sogl')
pol_sogl2.classList.add('pol_sogl')
inn2.classList.add('inn')
uzum_soch_div2.classList.add('uzum_soch_div')
soch_div2.classList.add('soch_div')
skach_div2.classList.add('skach_div')
div_down2.classList.add('div_down')





//D
footer2.append(div_up2, div_down2)

div_up2.append(div_left2, div_middle2, div_posl_mid2, div_right2)
div_left2.append(o_nas2, punkt2, vakans2)
div_middle2.append(polzovateli2, svz2, vop2)
div_posl_mid2.append(for_pered2, prod_uzum2, for_prodav2)
div_right2.append(download2, skach_div2, uzum_soch_div2)
skach_div2.append(appstore_div2, playmar_div2)
appstore_div2.append(store_logo2)
playmar_div2.append(playmar_logo2)
uzum_soch_div2.append(uzum_soch2, soch_div2)
soch_div2.append(ins2, tel2, you2, fac2)

div_down2.append(sogl2, pol_sogl2, inn2)





//E
appstore_div2.onclick = () => {
    location.assign('https://apps.apple.com/ru/app/uzum-market-интернет-магазин/id1640483056')
}
playmar_div2.onclick = () => {
    location.assign('https://play.google.com/store/apps/details?id=uz.uzum.app')
}
ins2.onclick = () => {
    location.assign('https://www.instagram.com/uzum.market')
}
tel2.onclick = () => {
    location.assign('https://t.me/uzum_market')
}
you2.onclick = () => {
    location.assign('https://www.youtube.com/channel/UCY3nNF2MUDKHrELA6LzbnHA')
}
fac2.onclick = () => {
    location.assign('https://www.facebook.com/uzummarket')
}





//A
let div_up = document.createElement('div')

let div_left = document.createElement('div')
let o_nas = document.createElement('h1')
let punkt = document.createElement('p')
let vakans = document.createElement('p')

let div_middle = document.createElement('div')
let polzovateli = document.createElement('h1')
let svz = document.createElement('p')
let vop = document.createElement('p')

let div_posl_mid = document.createElement('div')
let for_pered = document.createElement('h1')
let prod_uzum = document.createElement('p')
let for_prodav = document.createElement('p')

let div_right = document.createElement('div')
let download = document.createElement('h1')
let skach_div = document.createElement('div')
let appstore_div = document.createElement('div')
let store_logo = document.createElement('img')
let store_h1 = document.createElement('h1')
let playmar_div = document.createElement('div')
let playmar_logo = document.createElement('img')
let playmar_h1 = document.createElement('h1')
let uzum_soch_div = document.createElement('div')
let uzum_soch = document.createElement('h1')
let soch_div = document.createElement('div')
let ins = document.createElement('img')
let tel = document.createElement('img')
let you = document.createElement('img')
let fac = document.createElement('img')

let div_down = document.createElement('div')
let sogl = document.createElement('h1')
let pol_sogl = document.createElement('h1')
let inn = document.createElement('p')





//C
o_nas.innerHTML = 'О нас'
punkt.innerHTML = 'Пункты выдачи'
vakans.innerHTML = 'Вакансии'
polzovateli.innerHTML = 'Пользователям'
svz.innerHTML = 'Связаться с нами'
vop.innerHTML = 'Вопрос - Ответ'
for_pered.innerHTML = 'Для предпринимателей'
prod_uzum.innerHTML = 'Продавайте на Uzum'
for_prodav.innerHTML = 'Вход для продавцов'
download.innerHTML = 'Скачать приложение'
store_logo.src = '/public/icon/apple.svg'
store_h1.innerHTML = 'AppStore'
playmar_logo.src = '/public/icon/playma.svg'
playmar_h1.innerHTML = 'Google Play'
uzum_soch.innerHTML = 'Uzum в соцсетях'
ins.src = '/public/icon/ins.svg'
tel.src = '/public/icon/tel.svg'
you.src = '/public/icon/you.svg'
fac.src = '/public/icon/fac.svg'
sogl.innerHTML = 'Соглашение о конфиденциальности'
pol_sogl.innerHTML = 'Пользовательское соглашение'
inn.innerHTML = '«2023© ООО «UZUM MARKET». ИНН 309376127. Все права защищены»'





//B
div_up.classList.add('div_up')
div_left.classList.add('div_left')
o_nas.classList.add('o_nas')
punkt.classList.add('punkt')
vakans.classList.add('vakans')
div_middle.classList.add('div_middle')
polzovateli.classList.add('polzovateli')
svz.classList.add('svz')
vop.classList.add('vop')
div_posl_mid.classList.add('div_posl_mid')
for_pered.classList.add('for_pered')
prod_uzum.classList.add('prod_uzum')
for_prodav.classList.add('for_prodav')
div_right.classList.add('div_right')
download.classList.add('download')
appstore_div.classList.add('appstore_div')
store_logo.classList.add('store_logo')
store_h1.classList.add('store_h1')
playmar_div.classList.add('playmar_div')
playmar_logo.classList.add('playmar_logo')
playmar_h1.classList.add('playmar_h1')
uzum_soch.classList.add('uzum_soch')
ins.classList.add('ins')
tel.classList.add('tel')
you.classList.add('you')
fac.classList.add('fac')
div_down.classList.add('div_down')
sogl.classList.add('sogl')
pol_sogl.classList.add('pol_sogl')
inn.classList.add('inn')
uzum_soch_div.classList.add('uzum_soch_div')
soch_div.classList.add('soch_div')
skach_div.classList.add('skach_div')
div_down.classList.add('div_down')





//D
footer.append(div_up, div_down)

div_up.append(div_left, div_middle, div_posl_mid, div_right)
div_left.append(o_nas, punkt, vakans)
div_middle.append(polzovateli, svz, vop)
div_posl_mid.append(for_pered, prod_uzum, for_prodav)
div_right.append(download, skach_div, uzum_soch_div)
skach_div.append(appstore_div, playmar_div)
appstore_div.append(store_logo, store_h1)
playmar_div.append(playmar_logo, playmar_h1)
uzum_soch_div.append(uzum_soch, soch_div)
soch_div.append(ins, tel, you, fac)

div_down.append(sogl, pol_sogl, inn)





//E
appstore_div.onclick = () => {
    location.assign('https://apps.apple.com/ru/app/uzum-market-интернет-магазин/id1640483056')
}
playmar_div.onclick = () => {
    location.assign('https://play.google.com/store/apps/details?id=uz.uzum.app')
}
ins.onclick = () => {
    location.assign('https://www.instagram.com/uzum.market')
}
tel.onclick = () => {
    location.assign('https://t.me/uzum_market')
}
you.onclick = () => {
    location.assign('https://www.youtube.com/channel/UCY3nNF2MUDKHrELA6LzbnHA')
}
fac.onclick = () => {
    location.assign('https://www.facebook.com/uzummarket')
}