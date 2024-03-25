


alert("EXERCICIO 01 !")
nome = prompt("Digite um nome:")
alert("Digite as suas notas a seguir: ")
nota1 = prompt("Digite a Primeira Nota:")
nota2 = prompt("Digite a Segunda Nota: ")
nota3 = prompt("Digite a Terceira Nota: ")


nota1 = parseFloat(nota1);

nota2 = parseFloat(nota2);

nota3 = parseFloat(nota3);


total = nota1 + nota2 + nota3;
media = total / 3;

alert("Nome: " + nome + "\nA Média aritmetica das nota é: " + media)
  


alert("EXERCICIO 02 !")


dadonum1= prompt("Digite um número: ")
dadonum2 = prompt("Digite outro número: ")


num1 = parseFloat(dadonum1);
num2 = parseFloat(dadonum2);

soma = num1 + num2;
sub = num1 - num2;

prod = num1 * num2;

div = num1 / num2;

resto = num1 % num2;

console.log(soma)



alert("Operações Realizadas" + "\nA Soma: " + soma 
+ "\nA Subtração: " + sub + "\nA Multiplicação: " + prod + "\nA divisão: " + div + "\nO resto: " + resto)



