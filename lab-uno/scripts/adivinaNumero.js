/**
 * Andy Ariel Ajiatas Xiquin - 2021496 - IN5CM
 * Ejercicios Combinados y Desafíos
 * 27. Escribe un programa que genere un número aleatorio entre 1 y 100,
 * y pida al usuario que lo adivine, dándole pistas de si su intento es
 * mayor o menor.
 */
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let numeroJugador = null;

while (numeroJugador !== numeroSecreto) {
  numeroJugador = parseInt(prompt("Adivina el número secreto (entre 1 y 100):"));

  if (numeroJugador === numeroSecreto) {
    console.log("¡Felicidades! Adivinaste el número secreto.");
  } else if (numeroJugador > numeroSecreto) {
    console.log("El número secreto es menor, intenta de nuevo.");
  } else if (numeroJugador < numeroSecreto) {
    console.log("El número secreto es mayor, intenta de nuevo.");
  } else {
    console.log("Entrada inválida, escribe un número.");
  }
}
