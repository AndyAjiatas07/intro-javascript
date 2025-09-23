/**
 * Andy Ariel Ajiatas Xiquin - 2021496 - IN5CM
 * Ejercicios Combinados y Desafíos
 * 23. Escribe una función que determine si una cadena de texto es un palíndromo (se lee igual al derecho y al revés).
 */
function esPalindromo(cadena) {
  const texto = cadena.toLowerCase();
  const invertido = texto.split("").reverse().join("");
  return texto === invertido;
}

const palabra = prompt("Escribe una palabra:");
if (esPalindromo(palabra)) {
  console.log("Es un palíndromo.");
} else {
  console.log("No es un palíndromo.");
}
