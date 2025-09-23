/**
 * Andy Ariel Ajiatas Xiquin - 2021496 - IN5CM
 * Ejercicios Combinados y Desafíos
 * 23. Escribe una función que determine si una cadena de texto es un palíndromo (se lee igual al derecho y al revés).
 */
function esPalindromo(texto) {
    const textoLimpio = texto.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const textoReverso = textoLimpio.split("").reverse().join("");
    return textoLimpio === textoReverso;
}

// Pedir al usuario que ingrese un texto
const textoUsuario = prompt("Ingresa una palabra o frase para verificar si es un palíndromo:");

// Verificar si el texto es un palíndromo
if (esPalindromo(textoUsuario)) {
    console.log("¡Es un palíndromo!");
} else {
    console.log("No es un palíndromo.");
}
