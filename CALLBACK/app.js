import { GetAsignacionesId, getUserById } from "./modulo.js";

let id = parseInt(prompt("Ingresa en ID del usuario"));

getUserById(id, function (error, user) {
  try {
    if (!error) {
      if (user.instructor) {
        console.log(`El usuario ${user.name} esta registrado como instructor y no tiene asignaciones.`);
      } else {
        GetAsignacionesId(user.asignaciones, function (error, asignacionesNombres) {
          if (!error) {
            console.log(`Asignaciones de ${user.name}:`);
            asignacionesNombres.forEach(asignacion => {
              console.log(asignacion.name);
            });
          }
        });
      }
    } else {
      throw new Error(`Usuario no encontrado para el ID: ${id}`)
    }
  } catch (error) {
    console.error(`${error}`);
  }
});