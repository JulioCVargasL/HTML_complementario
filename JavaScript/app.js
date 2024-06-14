import { Matematicas } from "./modulo.js";

let a = parseFloat(prompt("Igrese el primer numero:  "));
let b = parseFloat(prompt("Igrese el segundo numero: "));

const obj = new Matematicas(a, b);

let LaSuma = obj.suma()
let LaResta = obj.resta()

console.log(LaSuma)
console.log(LaResta)


