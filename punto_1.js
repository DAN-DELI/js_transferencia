// Se calcula el total a pagar de un producto según precio y cantidad.

let producto = prompt("Ingrese el nombre del producto:")
let precio   = parseInt(prompt("Ingrese el precio del producto:"))
let cantidad = parseInt(prompt("Ingrese la cantidad comprada:"))
let total    = precio * cantidad

console.log("El total a pagar por " + cantidad + " " + producto + " es: $" + total)