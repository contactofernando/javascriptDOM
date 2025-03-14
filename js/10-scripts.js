const enlace = document.createElement('A');

//Agregandole el texto.-..
enlace.textContent = 'Nuevo Enlace';

//Añadiendo href...(añadiendo elemento)
enlace.href = '/nuevo-enlace';

console.log(enlace);

enlace.target = "_blank";

enlace.setAttribute('data-enlace', 'nuevo-enlace');

enlace.classList.add('alguna-clase');

//Donde mostrarlo? SELECCIONAR NAVEGACION
const navegacion = document.querySelector('.navegacion');
// console.log(navegacion.children);
navegacion.insertBefore(enlace, navegacion.children[1]);


// Crear un CARD de forma dinamica 

const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');


const parrafo3 = document.createElement('P');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

// Crear un DIV con la clase de info
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);
// Crear la Imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.alt = 'Texto Alternativo';

// Crear el Card
const card = document.createElement('div');
card.classList.add('card');

// Asignar la imagen
card.appendChild(imagen);

// Asignar Info
card.appendChild(info);

// Insertar en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card);