/**
 * Andy Ariel Ajiatas Xiquin - 2021496 - IN5CM
 * Ejercicios de Condicionales (if/else)
 * 6. Escribe una función que reciba un número del 1 al 7 y retorne el día de
la semana correspondiente (ej. 1 = "Lunes").
 */
function obtenerDiaSemana(numero) {
    switch (numero) {
        case 1:
            return "Lunes";
        case 2:
            return "Martes";
        case 3:
            return "Miércoles";
        case 4:
            return "Jueves";
        case 5:
            return "Viernes";
        case 6:
            return "Sábado";
        case 7:
            return "Domingo";
        default:
            return "Número inválido";
    }
}

const numeroUsuario = parseInt(prompt("Ingresa un número del 1 al 7 para saber el día de la semana:"));

const dia = obtenerDiaSemana(numeroUsuario);
console.log(dia);
