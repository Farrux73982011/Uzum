// import '/modules/modal.scss'
// let modal_search = document.querySelector('modal_search')
// let search_inp = document.querySelector('.search_inp');
// search_inp.onkeyup = async () => {
//     let search = search_inp.value.trim().toLowerCase();

//     if (search.length > 0) {
//             let res = await getData('/goods');
//             let tov = res;
//             let filt_tov = tov.filter(tov => tov.title.trim().toLowerCase().includes(search));
//             // reloadSearch(filt_tov);

//             modal_search.innerHTML = '';

//             for (let item of filt_tov) {
//                 let h1 = document.createElement('h1');
//                 h1.classList.add('modal_h1');
//                 h1.innerHTML = item.title;
//                 h1.onclick = () => {
//                     location.assign(`/pages/product_page/product.html?id=${item.id}`);
//                 };
//                 modal_search.append(h1);
//             }

//             modal.classList.add('show', 'fade');
//             modal.classList.remove('hide')
//     } else {
//         modal.classList.remove('show', 'fade');
//         modal.classList.add('hide');
//     }
// };