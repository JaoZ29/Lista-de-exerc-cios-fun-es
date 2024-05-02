/* Exercício 2
Crie uma função que receba 3 números como parâmetro e retorne o MENOR dentre eles.
Nome:
*/
function verificar(n1, n2, n3) {
    var menor = 0;
    if (n1 < n2 && n1 < n3) {
        menor = n1;
        console.log("O menor n\u00FAmero inserido foi: ".concat(menor));
    }
    else if (n2 < n1 && n2 < n3) {
        menor = n2;
        console.log("O menor n\u00FAmero inserido foi: ".concat(menor));
    }
    else if (n3 < n1 && n3 < n2) {
        menor = n3;
        console.log("O menor n\u00FAmero inserido foi: ".concat(menor));
    }
    else {
        console.log("Algo deu errado!!");
    }
    return menor;
}
var teclado = require("prompt-sync")();
var n1 = parseInt(teclado("Digite o primeiro n\u00FAmero aqui: "));
var n2 = parseInt(teclado("Digite o segundo n\u00FAmero aqui: "));
var n3 = parseInt(teclado("Digite o terceiro n\u00FAmero aqui: "));
verificar(n1, n2, n3);
