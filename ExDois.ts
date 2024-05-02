/* Exercício 2
Crie uma função que receba 3 números como parâmetro e retorne o MENOR dentre eles.
Nome: 
*/
function verificar (n1: number, n2: number, n3: number): number{
    let menor = 0;
    if (n1 < n2 && n1 < n3){
        menor = n1;
        console.log (`O menor número inserido foi: ${menor}`);}
    else if (n2 < n1 && n2 < n3){
        menor = n2;
        console.log (`O menor número inserido foi: ${menor}`);}
    else if (n3 < n1 && n3 < n2){
        menor = n3;
        console.log (`O menor número inserido foi: ${menor}`);}
    else {
        console.log(`Algo deu errado!!`);
        }
    return menor    
    }

const teclado = require (`prompt-sync`)();  

let n1: number = parseInt(teclado(`Digite o primeiro número aqui: `));
let n2: number = parseInt(teclado(`Digite o segundo número aqui: `));
let n3: number = parseInt(teclado(`Digite o terceiro número aqui: `));

verificar(n1,n2,n3);