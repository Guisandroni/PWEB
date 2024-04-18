/* Exercicios : 
    Criar quatro funções.

    1) receber tres numeros e retornar o maior
    2) receber tres numeros e retornar o menor em ordem crescente
    3) receber uma string e retornar se ela é palindromo ou nao.
    4) receber 3 valores, informar se formam um triangulo e qual o tipo do triangulo.


*/

var numero = [];

var inserir_valores1 = prompt("Digite 3 valores");
var inserir_valores2 = prompt("Digite 3 valores");
var inserir_valores3 = prompt("Digite 3 valores");

numero.push(inserir_valores1, inserir_valores2, inserir_valores3);

//1) função maior numero
function maior_menor() {
  return Math.max.apply(null, numero);
}

//mostrar tela
alert(maior_menor(numero));

//2) função menor numero
function num_crescente() {
  return numero.sort(function (a, b) {
    return a - b;
  });
}

alert(num_crescente(numero));

//3) String palindromo

function verificar(str) {
  str = str.replace(/\s/g, "");
  let reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

let entrada = prompt(
  "Digite uma palavra ou frase para verificar se é um palíndromo:"
);

entrada = entrada.toUpperCase();
if (verificar(entrada)) {
  alert("'" + entrada + "' é um palíndromo!");
} else {
  alert("'" + entrada + "' não é um palíndromo.");
}

//4)

function verificarTriangulo(lados) {
  if (
    lados[0] + lados[1] > lados[2] &&
    lados[0] + lados[2] > lados[1] &&
    lados[1] + lados[2] > lados[0]
  ) {
    if (lados[0] === lados[1] && lados[1] === lados[2]) {
      return "Triângulo Equilátero";
    } else if (
      lados[0] === lados[1] ||
      lados[0] === lados[2] ||
      lados[1] === lados[2]
    ) {
      return "Triângulo Isósceles";
    } else {
      return "Triângulo Escaleno";
    }
  } else {
    return "Não é um triângulo";
  }
}

let lados = [];
for (let i = 0; i < 3; i++) {
  lados.push(parseFloat(prompt("Digite o valor do lado " + (i + 1) + ":")));
}

let resultado = verificarTriangulo(lados);
alert(resultado);
