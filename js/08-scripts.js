const navegacion = document.querySelector('.navegacion');

console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);
// console.log(navegacion.childNodes); // Los espaicos en blanco son considerados elementos.
// console.log(navegacion.children); 

// RECORRER LOS HIJOS DE UN ELEMENTO CON CHILDREN

// console.log(navegacion.children[1].nodeName);
// console.log(navegacion.children[1].nodeType);

const card = document.querySelector('.card');

// card.children[1].children[1].textContent = 'Nuevo Heading desde Traversing the DOM'

// card.children[0].src = 'img/hacer2.jpg';
// console.log(card.children[0]);

//RECORRER LOS PADRES DE UN ELEMENTO CON PARENT ELEMENT
// Traversing the DOM (de hijo al padre)
// console.log(card.parentNode);
// console.log(card.parentElement.parentElement.parentElement);

// RECORRER ELEMENTOS HERMANOS (ej: un grupo de cards)
// console.log(card);
// console.log(card.nextElementSibling);
// console.log(card.nextElementSibling.nextElementSibling);
const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard.previousElementSibling);