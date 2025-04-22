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