// Se declararon las variables autilizar
let base,altura,area,perimetro;
// Se solicitaron los datos al usuario
base=parseFloat(prompt("Ingrese la base del terreno:"));
altura=parseFloat(prompt("Ingrese la altura del terreno:"));
// Se realizaron los calculos
area=base*altura;
perimetro=4*altura;
// Se mostraron los resultados
alert("El area del terreno es: "+area+"<br>");
alert("El perimetro del terreno es: "+perimetro);
