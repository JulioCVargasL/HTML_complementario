
export const search = async (nombre) => {
  try {
    const response = await fetch(`http://127.0.0.1:3000/users?name=${nombre}`);
    if (!response.ok) {
      throw new Error('Error al buscar usuario');
    }
    const usuarios = await response.json();
    console.log(nombre)
    return usuarios;
  } catch (error) {
    console.error('Error en la búsqueda:', error);
    throw error; // Propaga el error para manejarlo fuera de la función si es necesario
  }
}

export const asignaciones = async (ids) => {
  try {
    const promises = ids.map(async id => {
      const response = await fetch(`http://127.0.0.1:3000/asignaciones?id=${id}`);
      if (!response.ok) {
        throw new Error(`Error al obtener asignación con ID ${id}`);
      }
      const asignacion = await response.json();
      
      return asignacion;
    });
    
    const arregloAsignaciones = await Promise.all(promises);
    console.log(arregloAsignaciones)
    return arregloAsignaciones;
  } catch (error) {
    console.error('Error en la obtención de asignaciones:', error);
    throw error; // Propaga el error para manejarlo fuera de la función si es necesario
  }
}
