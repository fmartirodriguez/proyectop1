let lista = document.querySelector (".lista")
fetch (`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre`)
.then(respuesta => {
    return respuesta.json()
})
.then(genero => {
    console.log(genero.data)
    for(let i = 0 ; i<genero.data.length; i++){
       
        if( genero.data[i].name == "Electro" || genero.data[i].name == "Salsa"){
            lista.innerHTML+= `<a href="detail-genres.html?id=${genero.data[i].id}"> <li> ${genero.data[i].name} </li> </a>`
        }
    }
})