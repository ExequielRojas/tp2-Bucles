//Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

while(true){
    let edad = parseInt(prompt("Ingrese su edad"));

    if(isNaN(edad)) {
        document.writeln("No es un numero valido. Por favor, ingrese un numero valido.")
        continue;
    }

    if(edad >= 18) {
        document.writeln("Ya puede conducir!")
    } else {
        document.writeln("Aun no puede conducir!")
    }

    break;
}