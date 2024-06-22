function cuadradoPromesas(value) {
  if (typeof value !== "number") {
    return Promise.reject("Cuidado, el valor que ingreso no es un Número");
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value: value,
        result: value * value
      });
    }, 2000);
  })
}

cuadradoPromesas(2)
  .then((obj) => {
    console.log(`promesa con valor ${obj.value} y el resultado es ${obj.result}`);
    return cuadradoPromesas(obj.result)
  }).then((obj) => {
    console.log(`promesa con valor ${obj.value} y el resultado es ${obj.result}`);
    return cuadradoPromesas(obj.result)
  }).then((obj) => {
    console.log(`promesa con valor ${obj.value} y el resultado es ${obj.result}`);
  })
  .catch((e) => {
    console.log(e)
  });
