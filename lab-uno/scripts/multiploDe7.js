/**
 * Andy Ariel Ajiatas Xiquin - 2021496 - IN5CM
 * Ejercicios de Bucles (for/while)
 * 19. Escribe un programa que encuentre el primer número múltiplo de 7 en un rango del 1 al 100.
 */
function encontrarMultiploDe7(rangoMaximo) {
    for (let i = 1; i <= rangoMaximo; i++) {
        if (i % 7 === 0) {
            return i;
        }
    }
    return null; // Si no se encuentra ningún múltiplo de 7
}

// Pedir al usuario que ingrese el rango máximo
const numeroMaximo = parseInt(prompt("Ingresa el número máximo hasta el que deseas buscar el primer múltiplo de 7:"));

if (!isNaN(numeroMaximo) && numeroMaximo > 0) {
    const multiploDe7 = encontrarMultiploDe7(numeroMaximo);
    if (multiploDe7 !== null) {
        console.log(`El primer múltiplo de 7 en el rango del 1 al ${numeroMaximo} es: ${multiploDe7}`);
    } else {
        console.log(`No hay múltiplos de 7 en el rango del 1 al ${numeroMaximo}.`);
    }
} else {
    console.log("Por favor ingresa un número válido mayor que 0.");
}
