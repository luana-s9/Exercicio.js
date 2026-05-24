// 1
let num1 = 10;
let num2 = 20;
let soma = num1 + num2;
console.log("A soma é: " + soma);

let texto = "Olá, mundo!";
console.log(texto);


let fechado = true;
console.log(fechado);


let pi = 3.1415;
console.log(pi);

// 2
let nomeUsuario = prompt("Qual o seu nome?");
let idadeUsuario = prompt("Qual a sua idade?");
let bairroUsuario = prompt("Bairro onde mora?");

let nomeMaiusculo = nomeUsuario.toUpperCase();
console.log("Nome em maiúsculo: " + nomeMaiusculo);


let n1 = parseInt(prompt("Digite o primeiro número inteiro:"));
let n2 = parseInt(prompt("Digite o segundo número inteiro:"));
let resultadoSoma = n1 + n2;
alert("O resultado da soma é: " + resultadoSoma);

let n1 = parseInt(prompt("Digite o primeiro número inteiro:"));
let n2 = parseInt(prompt("Digite o segundo número inteiro:"));
let resultadoSoma = n1 + n2;
alert("O resultado da soma é: " + resultadoSoma);

//3
let nomeCompleto = "Luana Soares Dos Santos";

let nomeModificado = nomeCompleto.replace("Soares", "Santos");
let resultadoNome = "Nome modificado: " + nomeModificado;
console.log(resultadoNome);

// 4
let preco = 100.00;

let desconto = 0.2;


let precoFinal = preco - (preco * desconto);


console.log("O preço final com desconto é: R$ " + precoFinal);

// 5
let idadeConferir = parseInt(prompt("Digite a sua idade para conferir o perfil:"));

if (idadeConferir < 18) {
 alert("O usuário é menor de idade.");
 } else if (idadeConferir >= 18 && idadeConferir < 60) {
alert("O usuário é adulto.");
 } else if (idadeConferir >= 60) {
  alert("O usuário é idoso.");
}

 // 6
  let idadeDirigir = parseInt(prompt("Digite sua idade para o teste de direção:"));

if (idadeDirigir >= 18) {
 alert("Você pode dirigir");
 } else {
  alert("Você ainda não pode dirigir");
}

//7
let numeroDigitado = parseInt(prompt("Digite um número inteiro (positivo, negativo ou zero):"));

 if (numeroDigitado > 0) {
   console.log("O número é positivo.");
  } else if (numeroDigitado < 0) {
                            console.log("O número é negativo.");
  } else {
 console.log("O número é zero.");
  }

//8
let altura = parseFloat(prompt("Digite sua altura em metros (ex: 1.75):"));
let peso = parseFloat(prompt("Digite seu peso em quilogramas (ex: 70):"));


let imc = peso / (altura * altura);


if (imc >= 18.5 && imc <= 24.9) {
 alert("Seu IMC é " + imc.toFixed(2) + ". Você está dentro do intervalo saudável.");
  } else {
  alert("Seu IMC é " + imc.toFixed(2) + ". Você NÃO está dentro do intervalo saudável.");
   }