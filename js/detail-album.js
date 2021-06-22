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
    artista.innerHTML = `<a href="detail-artist.html?id= ${album.artist.id}"> ${album.artist.name}</a>`
    genero.innerHTML = `<a href="detail-genres.html?id=${album.genre_id}"> ${album.genres.data[0].name}</a>`
    fecha.innerHTML = `${album.release_date}`
    imagen.innerHTML =`<img src= "${album.cover_big}"> `
}) 
.catch(function(error){console.log(error);})


fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}/tracks`)
.then(respuesta => {
    return respuesta.json()
})
.then(topTracks => {
    console.log(topTracks.data)
    for (let i=0; i<5; i++){
        listado.innerHTML += `<li> <a href="detail-track.html?id=${topTracks.data[i].id}"> ${topTracks.data[i].title} </a> </li>`
    } 
})
.catch(function(error){
    console.log(error)
})


{/*  */}