//arrays trabalhando com varios tipos
const number = [1, 2, 3, 2];

number.pop(); //remove o ultimo indice
number.shift(); //remove no inicio o indice
number.splice(1, 1); //removendo pelo indice desejado,sendo que tanto eliminar como adiciona.
number.unshift(0); //inseri um indice no começo
number.splice(1, 0, "a"); //inseri o indice no parametro desejado ,com as informações.
number.push(5); //inseri no ultimo indice
number.indexOf(1); //mostra o indice e a quantidade do indice,caso não tem aparece -1.
console.log(number.lastIndexOf(2)); //mostra a ultima posição do indice.
console.log(number.includes(2)); //mostra se existe o indice,como true ou false.
console.log(number);

//Encontra elementos (tipo de referencia)
const marcar = [
  { id: 1, nome: "a" },
  { id: 2, nome: "b" },
];
const marc = marcar.find(function (marcar) {
  // retorna o objeto no caso aqui uma função
  return marcar.nome === "a";
});
console.log(marc);
// no caso retorna na função o primeiro indice que corresponde.
const seq = [8, 16, 25, 9];

const ver = seq.find(function (seq) {
  return seq > 12;
});
console.log(ver);

//Esvaziando um array
let numero = [1, 2, 3, 4];
let outro = numero;

//primeira opção ,só que ele não apaga as refenrencia tipo outro.
numero = [];
console.log(outro);

//segundo e mais simples e tb o melhor
numero.length = 0;
console.log(numero);

//terceira opção
numero.splice(0, numero.length); //aqui vc declara quantos itens e a quantidade
console.log(numero);

// Quarta opção com laço
while (numero.length > 0) numero.pop();
console.log(numero);

// Combinar e dividir arrays

const primeiro = [1, 2, 4];
const segundo = [3, 5, 6];

// combinar
const combinado = primeiro.concat(segundo);
console.log(combinado);

// dividir
const cortado = combinado.slice(2, 5); //como o splice ,mas sempre sem tira o ultimo indice
console.log(cortado);

//operador spread

const o1 = [1, 2, 3];
const o2 = [4, 5, 6];

const uni = [...o1, "de", ...o2, 90]; //vc concatena e tb pode inseri tb
console.log(uni);

const clonar = [...uni];
console.log(clonar);
