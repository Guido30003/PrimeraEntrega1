let nombre = prompt ("Ingrese su nombre");



alert (`Bienvenido a Cotización Argenta, ${nombre}`);


function CalcularCotización() {
    let nombre2= prompt("Ingrese la marca de su vehículo")
    let marca1 = parseInt(prompt("Ingrese el año de su modelo"));
    let marca2 = parseInt(prompt("Ingrese el año en que lo adquirió"));
    let calculo = (marca1 + marca2) / 2;
    if (calculo >= 2016) {
        alert(`Su seguro de ${nombre2} ocila entre los 35.000 pesos y los 45.000 pesos`)
    }
    else {
        alert(`Su seguro de ${nombre2} ocila entre los 15.000 y los 20.000 pesos`)
    }
}
CalcularCotización()