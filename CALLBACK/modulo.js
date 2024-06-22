import { users, asignaciones } from "./info.js";

export function getUserById(id, callback) {
  const user = users.find(function (user) {
    return user.id === id;
  });
  if (!user) {
    return callback(`El usuario ${id} no se encuentra registrado`)
  }
  return callback(null, user)
}

export function GetAsignacionesId(ids, callback) {
  const asignacionesUsuario = asignaciones.filter(asignacion => ids.includes(asignacion.id));
  callback(null, asignacionesUsuario);
}