let generos = document.querySelector (".generos")

fetch (`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre`)
.then(respuesta => {
   return respuesta.json()
})
.then(dataGenero => {
   console.log(dataGenero)
    for(let i = 0 ; i < dataGenero.data.length; i++){
       
        generos.innerHTML += `<nav class="generoIndividual"><nav><a href"detail-genres.html?id=${dataGenero.data[i].id}"><img class="img" src="${dataGenero.data[i].picture_big}" alt="${dataGenero.data[i].name}"</a></nav><h3><a href="detail-genres.html?id=${dataGenero.data[i].id}" class="tituloGenero"> ${dataGenero.data[i].name} </a></h3></nav>`
    }
})
.catch(error =>{
  console.log(error);
 })

 
