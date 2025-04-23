/*Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. 
 */

let edades=[];
let nombres=[];
for (let i = 0; i < 3; i++) {
    edades[i] = parseInt(prompt(`Ingrese la edad ${i+1}:`));
    nombres[i] = prompt(`Ingrese el nombre ${i+1}:`);
}
edadMayor=Math.max(edades[0],edades[1],edades[2])

document.writeln("Resultado");

switch (edadMayor) {
    case edades[0]:
        document.writeln(`El de mayor edad es ${nombres[0]}, tiene ${edadMayor} años.`);
        break;
    case edades[1]:
        document.writeln(`El de mayor edad es ${nombres[1]}, tiene ${edadMayor} años.`);
        break;
    case edades[2]:
        document.writeln(`El de mayor edad es ${nombres[2]}, tiene ${edadMayor} años.`);
        break;
}
