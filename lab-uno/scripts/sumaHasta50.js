function sumaHastaN(n) {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i;
    }
    return suma;
}

// Pedir al usuario que ingrese un número hasta dónde sumar
const numeroUsuario = parseInt(prompt("Ingresa un número hasta dónde quieres sumar (por ejemplo, 50):"));

if (!isNaN(numeroUsuario) && numeroUsuario > 0) {
    const resultado = sumaHastaN(numeroUsuario);
    console.log(`La suma de todos los números del 1 al ${numeroUsuario} es: ${resultado}`);
} else {
    console.log("Por favor ingresa un número válido mayor que 0.");
}
