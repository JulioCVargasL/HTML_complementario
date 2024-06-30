import { search, asignaciones } from "./modulo.js";

const $form = document.querySelector("#search");
const $input = document.querySelector("#nombre");
const $cards = document.querySelector("#cards");
const $fragment = document.createDocumentFragment();

const buscador = async (event) => {
  event.preventDefault();

  try {
    // Llama a la función search y espera la respuesta
    const usuarios = await search($input.value);

    // Verifica si se encontraron usuarios
    if (usuarios.length > 0) {
      const usuario = usuarios[0]; // Suponemos que solo queremos el primer usuario encontrado

      // Llama a la función asignaciones para obtener las asignaciones del usuario
      const asignacionesData = await asignaciones(usuario.asignaciones);

      // Limpia el contenedor #cards antes de agregar nuevas tarjetas
      $cards.innerHTML = "";

      // Crea tarjetas para cada asignación y agrégalas al fragmento
      asignacionesData.forEach(asignacion => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.textContent = asignacion[0].name; // Mostrar el nombre de la asignación
        $fragment.appendChild(card);
      });

      // Agrega el fragmento con las tarjetas al contenedor #cards
      $cards.appendChild($fragment);
    } else {
      // Manejo si no se encontraron usuarios
      console.log('Usuario no encontrado');
      $cards.innerHTML = "<p>Usuario no encontrado</p>"; // Puedes mostrar un mensaje en la interfaz
    }
  } catch (error) {
    console.error('Error en el buscador:', error);
    // Manejo de errores, por ejemplo, mostrar un mensaje de error en la interfaz
    $cards.innerHTML = `<p>Error: ${error.message}</p>`;
  }
};

$form.addEventListener("submit", buscador);