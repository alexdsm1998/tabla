
var i=0;
var numero= parseInt(prompt("¿Que tabla desea?"));
document.write("<table border= 0>")
while (numero>100) {
  alert("Introduzca un numero menor o igual a 100");
  var numero= parseInt(prompt("¿Que tabla desea?"));
}
while (numero<0) {
  alert("Introduzca un numero mayor o igual a 0");
  var numero= parseInt(prompt("¿Que tabla desea?"));
}
if (numero) {
  for (var i = 0; i <=10; i++) {
  document.write("<tr><td>" + numero + "x" + i + "=" + numero*i + "<td><tr>");
  }
}
