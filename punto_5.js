//e calcula el tiempo que se tomara para recorrer una distansia a base de la velosidad que se vaya

let distancia = parseInt(prompt("¿Cuál es la distancia del recorrido en kilómetros?"))
let velocidad = parseInt(prompt("¿Cuál es la velocidad promedio en km/h?"))

let tiempo = distancia / velocidad

console.log("El tiempo estimado de viaje es: " + tiempo + " horas")
