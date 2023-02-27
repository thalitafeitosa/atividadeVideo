// 1) Faça um algoritmo que leia os valores A, B, C e imprima na tela se a soma de A + B é menor que C.

let valorA = prompt("Digite o valor de A: "); //definicao de variaveis
let valorB = prompt("Digite o valor de B: ");
let valorC = prompt("Digite o valor de C: ");

let soma = valorA + valorB;

if (soma < valorC )  { //condicoes
    alert("A soma de A + B é menor que C! ");
}else {
    alert("A soma de A + B é maior que C! ");
}   