const $test = document.querySelector('#test');
const $fragmento = document.createDocumentFragment();
const $template = document.querySelector('template');
const $div = document.createElement('div');
const $h1 = document.createElement('h1');
const $p = document.createElement('p');
const $img = document.createElement('img');

$h1.textContent = "Titulo"
$img.setAttribute('src', "https://picsum.photos/seed/picsum/200/300"
)
$p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat veniam sit quisquam, consectetur error sequi nesciunt quos iusto nemo sint."

$div.appendChild($h1)
$div.appendChild($img)
$div.appendChild($p)

$div.classList.add('card')

$fragmento.appendChild($div)

$test.appendChild($fragmento)

$template.appendChild($div)

for (let i = 0; i < 4; i++) {
  const textData = $template.content.cloneNode(true);



}