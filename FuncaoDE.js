var teclado = require(prompt - sync)();
function primo(num, divisor) {
    if (divisor === void 0) { divisor = 2; }
    if (num <= 1) {
        return false;
    }
    if (divisor === num) {
        return true;
    }
    if (num % divisor === 0) {
        return false;
    }
    return primo(num, divisor + 1);
}
function imprimirPrimos(determinadoNumero, atual) {
    if (atual === void 0) { atual = 2; }
    if (atual > determinadoNumero) {
        return;
    }
    if (primo(atual)) {
        console.log(atual);
    }
    imprimirPrimos(determinadoNumero, atual + 1);
}
var DeterminadoNumero = parseFloat(teclado("Digite at\u00E9 o numero primo que deseja: "));
imprimirPrimos(DeterminadoNumero);
