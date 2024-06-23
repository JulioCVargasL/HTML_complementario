// async function porElNombre(nombre) {
//   return nombre;
// }

// async function porElNombre(nombre) {
//   return Promise.resolve(nombre);
// }

// let nombre = prompt(`Ingresa su nombre`)
// let resultado = porElNombre(nombre)
// console.log(resultado)

// async function cuadrado(value) {
//   if (typeof value !== "number") {
//     return Promise.reject(`Cuidado el valor ${value} no es numero`)
//   }
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         value: value,
//         result: value * value
//       });
//     }, 2000);
//   });
// }

// cuadrado(2)
//   .then((obj) => {
//     console.log(obj)
//   })
// Testeando :
// async function leer() {
// // leemos archivo json
//   let response = await fetch("datos.json");
//   // otra promesa
//   let user = await response.json();
//   console.log(user)

//   // let repos = await fetch(`https://jsonplaceholder.typicode.com/users`);
//   // let list = await repos.json();
//   // console.log(list)
//   let repos = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=10`);
//   let list = await repos.json();
//   console.log(list)
// }

// leer()

import { usuarios, post } from "./modulo.js"

const $section = document.querySelector('section')

console.log($section)

usuarios().then((lista) => {
  lista.map((user) => { 
    const $div = document.createElement('div');
    const $a = document.createElement('a');
    const $p = document.createElement('p');
    $a.setAttribute("href", "#");
    $a.textContent = user.name;
    $a.classList.add("enlace");
    $div.classList.add('item');
    $p.classList.add('parrafo');
    $p.textContent = `Email: ${user.email}`;
    $div.appendChild($a);
    $div.appendChild($p);
    $section.appendChild($div);
    post(user.id)
      // .then((post) => {console.log(post)});
  });
});



