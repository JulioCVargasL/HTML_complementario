
const $root = document.querySelector('#root');
const $fragmanto = document.createDocumentFragment();

const lista = [
  {
    id: 1,
    titulo: "Titulo 1",
    texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam expedita quia distinctio nesciunt optio unde ratione adipisci incidunt reprehenderit exercitationem repudiandae quod id nam dolorem assumenda itaque, doloremque eum? Nesciunt.",
    src: "https://picsum.photos/seed/picsum/200/300"
  },
  {
    id: 2,
    titulo: "Titulo 2",
    texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam expedita quia distinctio nesciunt optio unde ratione adipisci incidunt reprehenderit exercitationem repudiandae quod id nam dolorem assumenda itaque, doloremque eum? Nesciunt.",
    src: "https://picsum.photos/seed/picsum/200/300"
  },
  {
    id: 3,
    titulo: "Titulo 3",
    texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam expedita quia distinctio nesciunt optio unde ratione adipisci incidunt reprehenderit exercitationem repudiandae quod id nam dolorem assumenda itaque, doloremque eum? Nesciunt.",
    src: "https://picsum.photos/seed/picsum/200/300"
  },

]

lista.forEach((elemento) => {
  const $div = document.createElement('div');
  const $h1 = document.createElement('h1');
  const $p = document.createElement('p');
  const $img = document.createElement('img');

  $h1.textContent = elemento.titulo
  $img.setAttribute('src', elemento.src)
  $p.textContent = elemento.texto

  $div.appendChild($h1)
  $div.appendChild($img)
  $div.appendChild($p)

  $div.classList.add('card')
  $fragmanto.appendChild($div)
}
);
$root.appendChild($fragmanto)

// Hacer este ejeccicio con etiqueta template