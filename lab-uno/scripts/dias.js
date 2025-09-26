/**
 * Andy Ariel Ajiatas Xiquin - 2021496 - IN5CM
 * Ejercicios de Condicionales (if/else)
 * 6. Escribe una función que reciba un número del 1 al 7 y retorne el día de
la semana correspondiente (ej. 1 = "Lunes").
 */
function diaSemana() {
  const numero = parseInt(
    prompt("Ingresa un número del 1 al 7 para saber el día de la semana:")
  );

  switch (numero) {
    case 1:
      console.log("Lunes");
      break;
    case 2:
      console.log("Martes");
      break;
    case 3:
      console.log("Miércoles");
      break;
    case 4:
      console.log("Jueves");
      break;
    case 5:
      console.log("Viernes");
      break;
    case 6:
      console.log("Sábado");
      break;
    case 7:
      console.log("Domingo");
      break;
    default:
      console.log("Número inválido");
      break;
  }
}
