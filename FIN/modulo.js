export const search = async (nombre) => {
  const response = await fetch(`http://127.0.0.1:3000/users?name=${nombre}`)
  console.log(nombre);
  const usuario = await response.json();
  return usuario
}

export const asignaciones = async (ids) => {
  const arreglo = [];
  ids.forEach(async id => {
    let response
  });
}