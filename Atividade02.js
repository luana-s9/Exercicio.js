// Aplicando desconto em produtos

let codigo = prompt(
  "Digite o código promocional:\nDESC1\nDESC2\nDESC3\nDESC4\nDESC5");

let valorProduto = Number(prompt("Digite o valor do produto:));
let desconto = 0;

switch (codigo) {
  case "DESC1":
    desconto = 5;
    alert("5% de desconto");
    break;

  case "DESC2":
    desconto = 10;
    alert("10% de desconto");
    break;

  case "DESC3":
    desconto = 15;
    alert("15% de desconto");
    break;

  case "DESC4":
    desconto = 20;
    alert("20% de desconto");
    break;

  case "DESC5":
    desconto = 25;
    alert("25% de desconto");
    break;

  default:
    alert("Erro: código promocional inválido!");
}

if (desconto > 0) {
  let valorFinal = valorProduto - (valorProduto * desconto / 100);

  alert("Valor original: R$ " + valorProduto);
  alert("Valor com desconto: R$ " + valorFinal);
}

// Jogo de Adivinhação

let numeroSecreto = prompt("Tente acertar o número de 0 a 10:");
let tentativa;

while (tentativa!= numeroSecreto) {

  tentativa = prompt("Tente acertar o número:");

  if (tentativa == numeroSecreto) {
    alert("Parabéns, você acertou!");
  } else {
    alert("Tente novamente!");
  }
}
