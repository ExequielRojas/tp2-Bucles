
let unionTexto = "";
do {
  let texto = prompt("Ingrese una cadena de texto");
  if (texto !== null && texto !== "") {
    unionTexto =+ texto + " - ";
  }
} while (confirm("Desea agregar mas texto?"));

unionTexto = unionTexto.substring(0,unionTexto.length-3)
if (unionTexto === "") {
  document.writeln(`<p>No ingresó ningun texto<p>`);
} else {
  document.writeln(`<p>${unionTexto}<p>`);
}