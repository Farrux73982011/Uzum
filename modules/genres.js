export function reloadGenres(arr, place) {
    let genres = arr.map((item) => item.type);
    genres = ["All", ...new Set(genres)];

    for(let item of genres){
        let span = document.createElement('span')
    
        span.innerHTML = item
    
        span.classList.add('rass_span')

        place.append(span)
    }
    // let translate = require('node-google-translate-skidz');


    // translate({
    //     text: genres,
    //     source: 'en',
    //     target: 'ru',
    // }, function(result) {
    //     genres = result
    // });

}
