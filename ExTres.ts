/*Exercício 3:
Crie uma função que recebe por parâmetro o raio de uma esfera e calcula o seu volume
(v = 4/3*Pi*R^3).
Nome:
*/

function volume (raio: number): void{
    let pi:number= 3.14;
    let resultado: number = 4/3*pi*(raio*raio*raio);
    console.log (`O volume da esfera é ${resultado}`)
}
const teclado = require (`prompt-sync`)();  

console.log(`Para calcular o volume de sua esfera é necessário o valor do raio`)
let raio: number = parseFloat(teclado(`Insira aqui o valor do raio: `));

volume(raio);