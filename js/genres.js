let lista = document.querySelector (".lista")

fetch (`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/0`)
.then(respuesta => {
    return respuesta.json()
})
.then(dataGenero => {
    console.log(dataGenero)
    for(let i = 0 ; i < dataGenero.data.length; i++){
       
        lista.innerHTML+= `<a href="detalleGenero.html?id=${genero.data[i].id}"> <li> ${genero.data[i].name} </li> </a>`
    }
})

