let infog = document.querySelector(".infog")

fetch (`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre`)
.then(respuesta => {
    return respuesta.json()
})
.then(genero => {
    for(let i = 0 ; i<genero.data.length; i++){
            infog.innerHTML+= `<a href="detail-genres.html?id=${genero.data[i].id}"> <li> ${genero.data[i].name} </li> </a>`  
    }
})


