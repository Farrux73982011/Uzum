import '/modules/modal.scss'

export function reloadSearch(arr) {
    for(let item of arr){
        let modal_search = document.querySelector('.modal_search')
        let h1 = document.createElement('h1')
        
        h1.classList.add('modal_h1')
    
        h1.innerHTML = item.title
    
        h1.onclick = () => {
            location.assign(`/pages/product_page/product.html?id=${item.id}`);
        };

        modal_search.append(h1)
    }
}