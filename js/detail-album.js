let info = document.querySelector('.info')

fetch (`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/302127`)
.then(respuesta=>{ 
    return respuesta.json()})
.then(album=>{
    for(let i=0; i<album.data.lenght; i++){
        info.innerHTML += `<li> ${album.data[i].title} </li>`
    }})