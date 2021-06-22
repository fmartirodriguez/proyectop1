/* <main class="container">
    <h2 class="artista"></h2>
    <ul class="listado"></ul>
    <div class="imagen"></div>
</main>  */


let imagen = document.querySelector (".imagen")
let listado = document.querySelector (".listado")
let artista = document.querySelector (".artista")
artista.classList.add('CSSartist')
listado.classList.add('CSSextra')
imagen.classList.add('CSSfoto')


let objetoId = new URLSearchParams (location.search); 
let id = objetoId.get('id'); 

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}`)
.then(respuesta => {
    return respuesta.json()
})
.then(artist => {
    artista.innerHTML = `${artist.name}`
    imagen.innerHTML += `<img src="${artist.picture_big}">` 
})
.catch(function(error){
    console.log(error)
})

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/albums`)
.then(respuesta => {
    return respuesta.json()
})
.then(topAlbums => {
    console.log(topAlbums.data)
    for (let i=0; i<5; i++){
        listado.innerHTML += `<li> <a href="detail-album.html?id=${topAlbums.data[i].id}"> ${topAlbums.data[i].title}</a>  </li>`
    } 
})
.catch(function(error){
    console.log(error)
})

