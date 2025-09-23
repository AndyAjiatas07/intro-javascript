/**
 * Andy Ariel Ajiatas Xiquin - 2021496 - IN5CM
 * Ejercicios de Bucles (for/while)
 * 19. Escribe un programa que encuentre el primer número múltiplo de 7 en un rango del 1 al 100.
 */
const inicio = parseInt(prompt("Ingresa el número inicial del rango (1-100):"));
const fin = parseInt(prompt("Ingresa el número final del rango (1-100):"));

if (inicio < 1 || fin > 100 || inicio > fin) {
  console.log("Rango inválido. Debe estar entre 1 y 100 y el inicio menor o igual al fin.");
} else {
  let encontrado = false;
  for (let i = inicio; i <= fin; i++) {
    if (i % 7 === 0) {
      console.log("El primer múltiplo de 7 en el rango es: " + i);
      encontrado = true;
      break;
    }
  }
  if (!encontrado) {
    console.log("No hay múltiplos de 7 en ese rango.");
  }
}