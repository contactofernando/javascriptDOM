// Seleccionar elementos por su clase ...

const header = document.getElementsByClassName('header');
console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);

// Si las clases existen mas de 1 vez ... 
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

// SI una clase no existe devuelve un htmlcollection vacio...
const noExiste = document.getElementsByClassName('no-existe');
console.log(noExiste);