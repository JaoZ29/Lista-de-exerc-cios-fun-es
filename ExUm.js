/*Faça uma função que recebe um valor inteiro e verifica se o valor é par. A unção deve retornar
1 se o número for par e 0 se for ímpar.*/
function valor(n1) {
    var resultado = n1 % 2;
    return resultado;
}
var teclado = require("prompt-sync")();
console.log("+++++++++++++++++++++++");
console.log("Digite um n\u00FAmero");
console.log("Caso seu n\u00FAmero seja PAR, o programa ir\u00E1 retornar o n\u00FAmero 1.");
console.log("Caso seu n\u00FAmero seja \u00CDMPAR, o programa ir\u00E1 retornar o n\u00FAmero 0.");
var n1 = parseInt(teclado("Digite o n\u00FAmero aqui: "));
console.log("+++++++++++++++++++++++");
var resultado = n1 % 2;
if (resultado == 0) {
    console.log(1);
}
else {
    console.log(0);
}
