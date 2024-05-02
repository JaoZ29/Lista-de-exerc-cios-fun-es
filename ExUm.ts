/*Faça uma função que recebe um valor inteiro e verifica se o valor é par. A unção deve retornar
1 se o número for par e 0 se for ímpar.*/
function valor (n1: number): number{
    let resultado : number = n1 % 2;
    return resultado
}

const teclado = require (`prompt-sync`)();

console.log(`+++++++++++++++++++++++`);
console.log(`Digite um número`);
console.log(`Caso seu número seja PAR, o programa irá retornar o número 1.`);
console.log(`Caso seu número seja ÍMPAR, o programa irá retornar o número 0.`);
let n1: number =parseInt(teclado(`Digite o número aqui: `));
console.log(`+++++++++++++++++++++++`);
let resultado : number = n1 % 2;

if (resultado == 0){
    console.log(1);
}
else{
    console.log(0);
}