/**
 * For ciclo para 
 */

//for | for-of | for-in

let lista = ["eat", "sleep", "code", "repeat"]

for (let i = 0; i < lista.length; i++) {
console.log(lista[i])
}

//for-of [{for each}]

let canasta = ["manzana", "banana", "naranja"]
for (fruta of canasta) {
    console.log(fruta)
}

//for-in: iterar sobre las propiedades de un objeto
const listaDeCompras = {
    nombre: "manzana",
    cantidad: 5,
    costo: 1.5,
    marca: "Manzanita feliz"
}
console.log("-------------------------")
for (fruta in listaDeCompras) {
console.log(fruta)
}
console.log("-------------------------")
for (fruta in listaDeCompras) {
    console.log(`${fruta}: ${listaDeCompras[fruta]}`)
}
console.log("-------------------------")
for (fruta of listaDeCompras) {
console.log(fruta)// error  que ListaDeCompras no es iterable
}

