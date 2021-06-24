let foto = document.querySelector ('.foto')
let data = document.querySelector('.data')

foto.classList.add('CSSfoto')
data.classList.add('CSSinfo')

let cancionesFavoritas = localStorage.getItem('favoritas')
let arrayCancionesFav = JSON.parse(cancionesFavoritas)

if(arrayCancionesFav.lenght === 0){
    resultadoPlaylist.innerHTML += `No se ha añadido ninguna cancion`
    
} else{
    for(let i=0 ; i < arrayCancionesFav.length; i++){
        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${arrayCancionesFav[i]}`)
        .then(respuesta => {
            return respuesta.json()
        })
        .then(dataCancion => {
            foto.innerHTML += `<img src="${dataCancion.album.cover_xl}" alt="Album${dataCancion.album.title}"></img>`
            data.innerHTML += `<li><a href="detail-track.html?id=${dataCancion.id}"><h4>${dataCancion.title}</h4></a></li>
                <li><a href="detail-album.html?id=${dataCancion.album.id}">${dataCancion.album.title}</a> </li>`
        })

        .catch(function(error){
            console.log(error);
        })}}
