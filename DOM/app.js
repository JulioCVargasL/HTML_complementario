let win = window;
let dom = document;

const $header = document.querySelector('header')
const $div = document.querySelector('div') // Selecciona el primero
const $divs = document.querySelectorAll('div') // Selecciona todos los divs
const $main = dom.querySelector('main')

const $div_item = dom.querySelectorAll('main > div.item')// Acceder a un item especifico con la clase "item" con querySelector solo tre la promera coincidencia
// const $item = dom.getElementsByClassName('item') //esto es vieja escuela
const $item = dom.querySelectorAll('.item')

const $id =dom.getElementById('item')
const $_id = dom.querySelector('#item')

const $img = dom.querySelector('img')
const $form = dom.querySelector('form')


console.log(win);
console.log(dom);
console.log(dom.doctype);
console.log(dom.head);
console.log(dom.title);
console.log(dom.body);
console.log(dom.styleSheets);
console.log(dom.header);

console.log($header);

console.log($div)
console.log($divs)

// $divs.forEach((div, a) => {
//   div.textContent = `a ${a + 1}`

// });

const arregloA = [...$divs]

arregloA.map((a) => {
  console.log(a)
})

console.log($main.childNodes)
console.log($main.childElementCount)
console.log($div_item)
console.log($item)
// console.log(Array.from($item))
console.log($id)

$_id.textContent = 'Otra Plabra';
$_id.innerHTML = "<p> <b>Otra</b> Palabra"


console.log($main.firstElementChild)
console.log($main.lastElementChild)
console.log($main.parentElement)

console.log($main.previousElementSibling)
console.log($main.nextElementSibling)

console.log($img)

$img.setAttribute("src", "https://picsum.photos/id/237/200/300")
$img.setAttribute("alt", "El perro")

console.log($img.classList)

// $img.classList.add('block')
// $img.classList.remove('block')
// $img.classList.toggle('block')

$img.classList.add('box', 'block')

$form.setAttribute('enctype',"multipart/form-data")
$form.firstElementChild.setAttribute('type','file')




