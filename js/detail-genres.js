let detalleGenero = document.querySelector (".genero")
let nombre = document.querySelector (".nombre")
let imagen = document.querySelector (".imagen")

let objetoId = new URLSearchParams(location.search);
let id =  objetoId.get('id');

detalleGenero.innerHTML =  `id del genero ${id}` 
fetch (`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}`)
.then(respuesta => {
    return respuesta.json()
})
.then(genero => {
   nombre.innerHTML = `${genero.name}`
   imagen.innerHTML = `<img src="${genero.picture}">` 
})