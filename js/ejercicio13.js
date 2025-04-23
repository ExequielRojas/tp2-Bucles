//Realiza un script que pida un texto y lo muestre en mayúsculas.

let texto = prompt("Ingresa un texto:");
let textoMayuscula = "";

    for (let i = 0; i < texto.length; i++) {
      textoMayuscula += texto[i].toUpperCase();
    }

    document.writeln(`<h2>Texto original: ${texto}</h2>`);
    document.writeln(`<h2>Texto en mayúsculas: ${textoMayuscula}</h2>`);