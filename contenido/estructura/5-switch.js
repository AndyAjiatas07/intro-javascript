/**
 * Estructura de Control Switch
 */

//Costos de una fruta en la tienda

let compra = "manzana"
switch (compra) {
    case "banana":
        console.log("El costo de la banana es de Q16 la mano")
        break
    case "manzana":
        console.log("El costo de la manzana es de Q12 la mano")
        break
    case "naranja":
        case "kiwi":
        console.log("El costo de la naranja y el kiwi es de Q10 la mano")
        break
    default:
        console.log(`No se encontró el precio de la fruta ${compra}`)
        break
}