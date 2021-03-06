/* HTML
    <div class="foto"></div>
    <h2 class="cancion"></h2>
    <h2 class="artista"> </h2>
    <p class="disco"></p>
    <div class="player"></div>
    <div class="miPlaylist"> Agregar la cancion a mi Playlist </div>
    <a href="playlist.html"class="playlist">Ir a mi playlist</a>
     */

let foto = document.querySelector(".foto")
let cancion = document.querySelector(".cancion")
let artista = document.querySelector(".artista")
let disco = document.querySelector(".disco")
let player = document.querySelector(".player")
let miPlaylist = document.querySelector(".miPlaylist")
let playlist = document.querySelector(".playlist")

/* TODO LO DEL CSS */
foto.classList.add('CSSfoto')
artista.classList.add('CSSartista')
disco.classList.add('CSSdisco')
cancion.classList.add('CSScancion')
playlist.classList.add('CSSdisco')
miPlaylist.classList.add('CSSplay')


let objetoId = new URLSearchParams (location.search); 
let id = objetoId.get('id'); 

console.log(id)

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`)
.then(respuesta => {
    return respuesta.json()
})
.then(track => {
    console.log(track)
    foto.innerHTML += `<img src="${track.album.cover_xl}">`
    cancion.innerHTML += `${track.title}`
    artista.innerHTML += `<a href="detail-artist.html?id= ${track.artist.id}"> ${track.artist.name}</a>`
    disco.innerHTML += `<a href="detail-album.html?id= ${track.album.id}">${track.album.title} </a>`
    player.innerHTML += `<iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${track.id}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`
})
.catch(function(error){
    console.log(error)
})





// Agregar cancion a favoritos
let agregarSacar = document.querySelector('.miPlaylist')
let cancionesFavoritas = []

let traerCancionesFavoritas  = localStorage.getItem('favoritas')

if (traerCancionesFavoritas != null){
   cancionesFavoritas = JSON.parse(traerCancionesFavoritas)
}

if(cancionesFavoritas.includes(id)){
  agregarSacar.innerHTML =  'Eliminar de mi playlist'
}

agregarSacar.addEventListener('click',function(e){
   e. preventDefault()

      if(cancionesFavoritas.includes(id)){
let cancionesFavPosicion = cancionesFavoritas. indexOf(id);
cancionesFavoritas.splice(cancionesFavPosicion,1);
agregarSacar.innerHTML = 'Agregar a mi playlist'
} else {
     cancionesFavoritas.push(id)
     agregarSacar.innerHTML = 'Eliminar de mi playlist'
}

let cancionFavString = JSON.stringify(cancionesFavoritas)
localStorage.setItem('favoritas', cancionFavString)
console.log(localStorage);})