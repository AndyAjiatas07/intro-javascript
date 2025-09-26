/**
 * Andy Ariel Ajiatas Xiquin - 2021496 - IN5CM
 * Ejercicios Combinados y Desafíos
 * 27. Escribe un programa que genere un número aleatorio entre 1 y 100,
 * y pida al usuario que lo adivine, dándole pistas de si su intento es
 * mayor o menor.
 */
function adivinarNumero() {
  const numeroSecreto = Math.floor(Math.random() * 100) + 1;
  let intentos = 10;

  while (intentos > 0) {
    const numeroJugador = parseInt(
      prompt("Adivina el número secreto del 1 al 100, tienes 10 intentos:")
    );

    if (numeroJugador === numeroSecreto) {
      console.log("¡Felicidades! Adivinaste el número secreto.");
      break;
    } else if (numeroJugador > numeroSecreto) {
      console.log("El número secreto es menor.");
    } else if (numeroJugador < numeroSecreto) {
      console.log("El número secreto es mayor.");
    } else {
      console.log("Número inválido");
    }

    intentos--;
  }

  if (intentos === 0) {
    console.log("Se acabaron los intentos. El número era: " + numeroSecreto);
  }
}
