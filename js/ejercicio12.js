// Realiza un script que genere un número aleatorio entre 1 y 99

for (let i = 1; i <= 10; i++) {
    let numero = Math.floor(Math.random() * 99) + 1;
    document.writeln(`Número ${i}: ${numero} <br>`);
}