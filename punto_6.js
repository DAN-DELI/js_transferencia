//Se pasa de minutos a horas

let minutos = parseInt(prompt("Ingrese la cantidad de minutos"))

let horas = parseInt(minutos / 60)
let minutossobra = minutos - (horas * 60)

console.log("Eso equivale a " + horas + " horas y " + minutossobra + " minutos")