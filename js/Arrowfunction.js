const marcas = [
  { id: 1, nome: "a" },
  { id: 2, nome: "b" },
];

// quando só tem um parametro
console.log(marcas.find((marca) => marca.nome === "a"));

const numero = [1, 2, 3, 4, 5];
for (number of numero) console.log(number);

//forEach
numero.forEach((numero, indice, ou) => console.log(numero, indice, ou));
/*numero.forEach(function(numero,indice,ou) {
   console.log(numero,indice,ou)})*/

// usando o join

const combinado = numero.join("k"); //que pode ser qq coisa
console.log(combinado);

//usando o split

const frase = "ola estou aprendendo no curso";
const resultado = frase.split(" "); //pode observar que dividi em palavras,os espaços.
console.log(resultado);
