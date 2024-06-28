import { search } from "./modulo.js"

const $form = document.querySelector("#search");
const $input = document.querySelector("#nombre");

const buscador = (event) => {
  event.preventDefault()

  search($input.value).then((data) => {
    console.log(data)
  }
  )
}

$form.addEventListener("submit", buscador);
