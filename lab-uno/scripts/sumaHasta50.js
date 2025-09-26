/**
 * Andy Ariel Ajiatas Xiquin - 2021496 - IN5CM
 * Ejercicios de Bucles (for/while)
 * 12. Crea un programa que calcule la suma de todos los números del 1 al 50.
 */
function sumaDel1Al50() {
  let suma = 0;

  for (let i = 1; i <= 50; i++) {
    suma += i;
  }

  console.log("La suma de los números del 1 al 50 es: " + suma);
}
