// 2) Faça um programa que receba N (quantidade de números) e seus respectivos valores.
// Imprima o maior número par e o menor número impar.

//     Exemplo:
//         Entrada:
//             5
//             3
//             4
//             1
//             10
//             8

//         Saída:
//             Maior número par: 10
//             Menor número impar: 1

const { gets, print } = require('./funcoes-auxiliares-ex2');

let i = 0;

const N = gets();
let maiorNumeroPar = 0;
let menorNumeroImpar = 1;

for (let i = 0; i < N; i++) {
  const numero = gets();
    if (numero % 2 === 0) {
        if (maiorNumeroPar === 0 || numero > maiorNumeroPar) {
            maiorNumeroPar = numero;
        } else {
            if (menorNumeroImpar === 0 || numero < menorNumeroImpar) {
                menorNumeroImpar = numero;
            }
        }
    }
}
print(`Maior número par: ${maiorNumeroPar}`);
print(`Menor número impar: ${menorNumeroImpar}`);