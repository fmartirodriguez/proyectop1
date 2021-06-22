let detalleGenero = document.querySelector (".genero")
let nombre = document.querySelector (".nombre")
let imagen = document.querySelector (".imagen")

let objetoId = new URLSearchParams(location.search);
let id =  objetoId.get('id');
//let contenido2 = ''

detalleGenero.innerHTML =  `id del genero ${id}` 
fetch (`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}`)
.then(respuesta => {
    return respuesta.json()
})
.then(genero => {
   nombre.innerHTML = `${genero.name}`
   imagen.innerHTML = `<img src="${genero.picture}">` 
   /*for(let i=0; i < genero.data.length; i++){
       contenido2 += `<article class="">
       <p class="nombre"><a href="detail-genres.html?id=${genero.data[i].id}"> ${genero.data[i].title} </a></p>
   </article>`*/


       
   }
)
.catch(error =>{
    console.log(error);
 })
