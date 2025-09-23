/**
 * Andy Ariel Ajiatas Xiquin - 2021496 - IN5CM
 * Ejercicios Combinados y Desafíos
 * 27. Escribe un programa que genere un número aleatorio entre 1 y 100,
 * y pida al usuario que lo adivine, dándole pistas de si su intento es
 * mayor o menor.
 */
function adivinaNumero() {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    let intento;
    do {
        intento = parseInt(prompt("Adivina el número (1-100):"));
        if (intento < numeroAleatorio) {
            console.log("Demasiado bajo. Intenta de nuevo.");
        } else if (intento > numeroAleatorio) {
            console.log("Demasiado alto. Intenta de nuevo.");
        }
    } while (intento !== numeroAleatorio);
    console.log("¡Felicidades! Adivinaste el número.");
}
