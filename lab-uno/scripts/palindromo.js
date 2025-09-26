/**
 * Andy Ariel Ajiatas Xiquin - 2021496 - IN5CM
 * Ejercicios Combinados y Desafíos
 * 23. Escribe una función que determine si una cadena de texto es un palíndromo (se lee igual al derecho y al revés).
 */
function esPalindromo() {
  const cadena = prompt("Escribe una palabra:");
  const texto = cadena.toLowerCase();
  const invertido = texto.split("").reverse().join("");
  if (texto === invertido) {
    console.log("Es un palíndromo.");
  } else {
    console.log("No es un palíndromo.");
  }
}
