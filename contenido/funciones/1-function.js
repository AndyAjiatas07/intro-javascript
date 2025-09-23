/**
 *  Funciones
 */

//somos dueños de una empresa y 
// necesitamos aplicar descuentos a nuestros productos

function calcularPrecioConDescuento(precio, descuentoEnPorcentaje) {
const descuento = (precio * descuentoEnPorcentaje) / 100;
const nuevoPrecio = precio - descuento;
return nuevoPrecio;
}

const precioOriginal = 1000;
const descuento = 18;
const precioFinal = calcularPrecioConDescuento(precioOriginal, descuento);
console.log(`El precio original: Q` + precioOriginal);
console.log(`El descuento aplicado: Q` + descuento+`%`);
console.log(`El precio con descuento: Q` + precioFinal);