
export class Matematicas{
 
    constructor(a, b) {
      this.a = a; 
      this.b = b; 
  // let b;
// let a;
}

suma () {
  try {
    if (!isNaN(this.a) && !isNaN(this.b)) {
      return this.a + this.b
    } else {
      throw new Error ("Por favor, ingrese solo numeros")
    }
  } catch (error) {
    return `Se produjo un error: ${error}`
  }
}
  resta  () {
    try {
      if (!isNaN(this.a) && !isNaN(this.b)) {
        return this.a - this.b
      } else {
        throw new Error("Por favor, ingrese solo numeros")
      }
    } catch (error) {
      return `Se produjo un error: ${error}`
    }
}
multiplica  = () => {
  return this.a * this.b
}
dividir     = () => {
  return this.a / this.b
}
}
