let generos = document.querySelector (".generos")

fetch (`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre`)
.then(respuesta => {
   return respuesta.json()
})
.then(dataGenero => {
   console.log(dataGenero)
    for(let i = 0 ; i < dataGenero.data.length; i++){
       
        generos.innerHTML += `<article class="contenido2">
                                <p class="titulosCanciones"><a href="detail-genres.html?id=${dataGenero.data[i].id}"> <li> ${dataGenero.data[i].name} </li> </a></p>
                            </article>`

    }
})
.catch(error =>{
  console.log(error);
 })

 
