let busqueda = new URLSearchParams(location.search)
let buscar = busqueda.get('buscar')


fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${buscar}`)
.then(respuesta =>{
    return respuesta.json()
})
.then(dataBuscar =>{
    console.log(dataBuscar);
    for(let i = 0; i < dataBuscar.provincias.length; i++){
        select.innerHTML += `<option value="${dataProvincias.provincias[i].id }">  ${dataProvincias.provincias[i].nombre} </option>` 
    }
})
.catch(error =>{
    console.log(`${error}`);
})

