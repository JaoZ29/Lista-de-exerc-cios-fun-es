/*Exercício 3:
Crie uma função que recebe por parâmetro o raio de uma esfera e calcula o seu volume
(v = 4/3*Pi*R^3).
Nome:
*/
function volume(raio) {
    var pi = 3.14;
    var resultado = 4 / 3 * pi * (raio * raio * raio);
    console.log("O volume da esfera \u00E9 ".concat(resultado));
}
var teclado = require("prompt-sync")();
console.log("Para calcular o volume de sua esfera \u00E9 necess\u00E1rio o valor do raio");
var raio = parseFloat(teclado("Insira aqui o valor do raio: "));
volume(raio);
