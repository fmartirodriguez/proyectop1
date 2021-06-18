let busqueda = new URLSearchParams(location.search) /* CAPTURO New URLSearchParams me trae los datos de mejor manera - con location.search mandando a buscar lo que typeo el usuario- Aca tengo lo que el usuario typeo */
let buscar = busqueda.get('buscar') /* OBTENGO EL DATO Extraigo lo que el usuario typeo*/
let listadoBusqueda = document.querySelector('.listadoBusqueda')

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${buscar}`)
.then(respuesta =>{
   return respuesta.json()
})
.then(data =>{
   console.log(data);
   
 
})
.catch(error =>{
   console.log(error);
})
