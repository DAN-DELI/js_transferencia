// Se calcula el salario semanal según horas trabajadas y valor por hora.

let horastrabajadas = parseInt(prompt("¿Cuantas horas trabajas?"))
let paga = parseInt(prompt("¿Cuanto te pagan por hora?"))
let totalhoras = horastrabajadas * paga

console.log("Te pagan $" + totalhoras + " pesos por trabajar " + horastrabajadas + " horas")