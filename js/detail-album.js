/* <main class="container">
        <h2 class="disco"></h2>
        <h2 class="artista"></h2>
        <p class="genero"></p>
        <p class="fecha"></p>
        <ul class="listado"></ul>
        <div class="imagen"></div>
    </main> */

let disco = document.querySelector ('.disco')
let artista = document.querySelector ('.artista')
let genero = document.querySelector ('.genero')
let fecha = document.querySelector ('.fecha')
let listado = document.querySelector ('.listado')
let imagen = document.querySelector ('.imagen')

disco.classList.add('CSSalbum')
imagen.classList.add('CSSfoto')
artista.classList.add('CSSextra')
genero.classList.add('CSSextra')
fecha.classList.add('CSSdata')
listado.classList.add('CSSdata')


let objetoId = new URLSearchParams (location.search); 
let id = objetoId.get('id'); 

fetch (`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`)
.then(respuesta=>{return respuesta.json()})
.then(album=>{
    disco.innerHTML = `${album.title}`
    artista.innerHTML = `${album.artist.name}`
    genero.innerHTML = `${album.genres.data[0].name}`
    fecha.innerHTML = `${album.release_date}`
    for (let i=0; i<album.tracks.data.length; i++){
        listado.innerHTML =+ `<li> ${album.tracks.data[i].title} </li>`
     }
    imagen.innerHTML =`<img src= "${album.cover_big}"> `
}) 
.catch(function(error){console.log(error);})