import { users, asignaciones } from "./info.js";

export function getUserById(id) {
  return new Promise((ok, error) => {
    const user = users.find(user => user.id === id);
    if (!user) {
      error(new Error(`El usuario con ID ${id} no esta registrado`))
    } else {
      ok(user);
    }
  });
}

// export function getUserById(id, callback) {
//   const user = users.find(function (user) {
//     return user.id === id;
//   });
//   if (!user) {
//     return callback(`El usuario ${id} no se encuentra registrado`)
//   }
//   return callback(null, user)
// }

export function GetAsignacionesId(ids, userName, userId) {
  return new Promise((ok, error) => {
    const asignacionesUsuario = asignaciones.filter(asignacion => ids.includes(asignacion.id));
    if (asignacionesUsuario.length === 0) {1
      error(new Error(`No se encontraron asignaciones para ${userName} de ID ${userId}`));
    } else {
      ok(asignacionesUsuario);
    }
  });
}

// export function GetAsignacionesId(ids, callback) {
//   const asignacionesUsuario = asignaciones.filter(asignacion => ids.includes(asignacion.id));
//   callback(null, asignacionesUsuario);
// }