/*Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
 
 */

for(i = 1;i <= 30; i++){
    let fila = ""
    for(numeroAcompañante = 1; numeroAcompañante <= i; numeroAcompañante ++){
        fila += numeroAcompañante
    }
    document.writeln(fila + "<br>")
}