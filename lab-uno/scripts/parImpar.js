/**
 * Andy Ariel Ajiatas Xiquin - 2021496 - IN5CM
 * Ejercicios de Condicionales (if/else)
 * 9. Crea un programa que determine si un número es par o impar.
 */
const numero = parseInt(prompt("Ingresa un número para saber si es par o impar:"));

if (numero == 0){
  console.log("El número es 0.");
} else if (numero % 2 == 0) {
  console.log("El número es par.");
} else {
  console.log("El número es impar.");
}