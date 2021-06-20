
let resultadoPlaylist = document.querySelector('.resultadoPlaylist')

fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/0')
.then(respuesta => {
    return respuesta.json()
})
.then(dataPlaylist => {
    console.log(dataPlaylist);
})

