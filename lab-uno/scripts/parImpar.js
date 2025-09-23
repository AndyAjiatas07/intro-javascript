I/**
 * Andy Ariel Ajiatas Xiquin - 2021496 - IN5CM
 * Ejercicios de Condicionales (if/else)
 * 9. Crea un programa que determine si un número es par o impar.
 */
function esParOImpar(numero) {
    if (numero % 2 === 0) {
        return "El número es par.";
    } else {
        return "El número es impar.";
    }
}

// Pedir al usuario que ingrese un número
const numeroUsuario = parseInt(prompt("Ingresa un número para saber si es par o impar:"));

// Validar si es un número válido
if (!isNaN(numeroUsuario)) {
    const resultado = esParOImpar(numeroUsuario);
    console.log(resultado);
} else {
    console.log("Por favor ingresa un valor numérico válido.");
}
