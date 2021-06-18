/* <main class="container">
<div class="foto"></div>
<h2 class="cancion"></h2>
<h2 class="artista"></h2>
<p class="disco"></p>
<div class="player"><ion-icon name="musical-note-outline"></ion-icon></div>
<div class="miPlaylist"><ion-icon name="musical-note-outline"></ion-icon></div>
<p class="playlist"></p>
</main>  */

let foto = document.querySelector(".foto")
let cancion = document.querySelector(".cancion")
let artista = document.querySelector(".artista")
let disco = document.querySelector(".disco")
let player = document.querySelector(".player")
let miPlaylist = document.querySelector(".miPlaylist")
let playlist = document.querySelector(".playlist")

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
    artista.innerHTML += `${track.artist.name}`
    disco.innerHTML += `${track.album.title}`
    player.innerHTML += `<iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${track.id}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`
})
.catch(function(error){
    console.log(error)
})