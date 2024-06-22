function suma(a, b, ...c) {

// function suma(...c) {
  // let resultado = 0;
  
  let resultado = a + b;

  c.forEach(function (n) {
    resultado += n 
  });
  return resultado;
}

console.log(suma(5, 5))
console.log(suma(5, 5, 1, 2, 3, 4))