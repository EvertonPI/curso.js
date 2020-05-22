// criando faixas de preços igual mercado livre
let faixas = [
  { tooltip: "Ate R$700", minimo: 0, maximo: 700 },
  { tooltip: "De R$700 a R$1000", minimo: 700, maximo: 1000 },
  { tooltip: "De R$ ou mais", minimo: 0, maximo: 10000 },
];
console.log(faixas);

//segunda opção com function factory;
function criaFaixaPreço(tooltip, minimo, maximo) {
  return {
    tooltip,
    minimo,
    maximo,
  };
}
let faixas2 = [
  criaFaixaPreço("a", 10, 20),
  criaFaixaPreço("b", 20, 30),
  criaFaixaPreço("c", 30, 40),
];
console.log(faixas2);

// terceira opção com function constructor
function faixaPreco(tooltip, minimo, maximo) {
  (this.tooltip = tooltip), (this.minimo = minimo), (this.maximo = maximo);
}
let faixas3 = [
  criaFaixaPreço("d", 40, 50),
  criaFaixaPreço("e", 50, 60),
  criaFaixaPreço("f", 60, 70),
];

console.log(faixas3);
