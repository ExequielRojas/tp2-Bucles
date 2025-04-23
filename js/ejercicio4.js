/*Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos. 
 */

let unionNumero = Number("")

do{
    let numero = parseInt(prompt("Ingrese un numero"))
    if(numero !== null && numero !== ""){
        unionNumero += numero
    }
} while (confirm("Desea agregar otro numero?")){
    if(unionNumero === ""){
        alert("No ingreso ningun numero")
    } else {
        document.writeln(`Total sumado: ${unionNumero}`)
    }
}