//Se calcula el consumo de gasolina por cada kilometro

let kilometros = parseInt(prompt("¿Cuántos kilómetros recorriste?"))
let consumoPorKm = parseInt(prompt("¿Cuántos litros consume por kilómetro?"))

let litrosTotales = kilometros * consumoPorKm

console.log("El total de litros consumidos es: " + litrosTotales)
