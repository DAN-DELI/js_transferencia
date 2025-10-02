//Se efectua un descuento de 10% a un producto

let precioOriginal = parseInt(prompt("Ingrese el precio del producto:"))

let descuento = precioOriginal * 0.10

let precioFinal = precioOriginal - descuento

console.log("Precio con 10% de descuento: $" + precioFinal.toFixed(2))