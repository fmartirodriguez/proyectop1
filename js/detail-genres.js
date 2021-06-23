
 let queryString = location.search
 let datos = new URLSearchParams(queryString)
 let idGenre = datos.get('id')
 let titulo = document.querySelector('.titulo')
 let tituloG = document.querySelector('.tituloG')

 fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${idGenre}`)
 .then(respuesta => {
    return respuesta.json()
 })
 .then(dataG => {
    console.log(dataG)
    tituloG.innerHTML += dataG.name
 })

.catch(error =>{
    console.log(error);
})

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${idGenre}/artists`)
.then(respuesta => {
    return respuesta.json()
 })
 .then(dataA => {
    console.log(dataA)
    let artista = dataA.data
    let artistas = document.querySelector('.artistas')
    for(let i = 0; i < 12; i++){
        artistas.innerHTML += `<nav class="todo"><a href="detail-artist.html?id=${artista[i].id}"><ul><li class="artista1"><img class="img1" src="${artista[i].picture_big}" alt="${artista[i].name}"><br><p>${artista[i].name}</p></li></ul></a></nav>`
    }
 })

.catch(error =>{
    console.log(error);
})