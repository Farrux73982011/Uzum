export function reloadGenres(arr, place) {
    let genres = arr.map((item) => item.type);
    genres = [...new Set(genres)];

    for(let item of genres){
        let span = document.createElement('span')
    
        span.innerHTML = item.slice(0, 1).toUpperCase() + item.slice(1, item.lenght)
    
        span.classList.add('rass_span')

        place.append(span)
        span.onclick = () => {
            location.assign(`/pages/poisk/index.html?gen=${item}`)
        }
    }
}
