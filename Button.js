

const botonMenu = document.querySelector(".button__1");
const botonCerrar = document.querySelector(".botoncerrar");
const menu = document.querySelector(".menudesplegable");

botonMenu.addEventListener("click", function() {
  menu.classList.toggle("mostrar");
});

botonCerrar.addEventListener("click", function() {
  menu.classList.remove("mostrar");
});

const boton2Menu = document.querySelector(".button__2");
const boton2Cerrar = document.querySelector(".botoncerrar2");
const menu2 = document.querySelector(".menudesplegable2");

boton2Menu.addEventListener("click", function() {
  menu2.classList.toggle("mostrar");
});

boton2Cerrar.addEventListener("click", function() {
  menu2.classList.remove("mostrar");
});





fetch('https://my-json-server.typicode.com/leandrofinten123/Proyecto1/imagenes')
.then(response => response.json())
.then(data => {
console.log(data);
const contenidoHeader = document.querySelector('.titulo__1');
contenidoHeader.innerHTML = `
<img class="logo__1" src="${data.imagen1}" alt ="">
 `;})
.catch(error => console.error('Error al leer el archivo JSON:', error));


fetch('https://my-json-server.typicode.com/leandrofinten123/Proyecto1/imagenes')
.then(response => response.json())
.then(data => {
console.log(data);
const contenidoHeader = document.querySelector('.titulo__2');
contenidoHeader.innerHTML = `
<img class="logo__1" src="${data.imagen1}" alt ="">
 `;})
.catch(error => console.error('Error al leer el archivo JSON:', error));



fetch('https://my-json-server.typicode.com/leandrofinten123/Proyecto1/imagenes')
.then(response => response.json())
.then(data => {
console.log(data);
const contenidomain = document.querySelector('.carousel-inner');
contenidomain.innerHTML = `
<div class="carousel-item active">
            <img src="${data.imagen4}" class="d-block w-100" alt="Imagen 1">
          </div>
          <div class="carousel-item">
            <img src="" class="d-block w-100" alt="Imagen 2">
          </div>
          <div class="carousel-item">
            <img src="" class="d-block w-100" alt="Imagen 3">
          </div>
 `;})
.catch(error => console.error('Error al leer el archivo JSON:', error));


fetch('https://my-json-server.typicode.com/leandrofinten123/Proyecto1/imagenes')
.then(response => response.json())
.then(data => {
console.log(data);
const contenidomain2 = document.querySelector('.carousel-inner2');
contenidomain2.innerHTML = `
<div class="item active">
            <img src="Images\horizon.jpg" alt="Los Angeles" style="width:100%;">
          </div>
    
          <div class="item">
            <img src="Images\elden ring.jpg" alt="Chicago" style="width:100%;">
          </div>
        
          <div class="item">
            <img src="Images\elden ring.jpg" alt="New york" style="width:100%;">
          </div>
 `;})
.catch(error => console.error('Error al leer el archivo JSON:', error));