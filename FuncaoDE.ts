const teclado = require (`prompt-sync`)();  
function primo(num, divisor = 2) {
    if (num <= 1){
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

function imprimirPrimos(determinadoNumero, atual:number = 2) {
    if (atual > determinadoNumero) {
        return;
    }
    if (primo(atual)) {
        console.log(atual);
    }
    imprimirPrimos(determinadoNumero, atual + 1);
}

let DeterminadoNumero: number = parseFloat (teclado(`Digite até o numero primo que deseja: `));
imprimirPrimos(DeterminadoNumero)