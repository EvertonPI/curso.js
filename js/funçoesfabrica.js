function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
  return {
    marcaCelular,
    tamanhoTela,
    capacidadeBateria,
    ligar() {
      console.log(" Fazendo ligação ...");
    },
  };
}
console.log((celular1 = criarCelular("motorola", 5.5, 4000)));

function Celular(marcaCelular, tamanhoTela, capacidadeBateria) {
  this.marcaCelular = marcaCelular;
  this.tamanhoTela = tamanhoTela;
  this.capacidadeBateria = capacidadeBateria;
  this.ligar = function () {
    console.log(" Fazendo ligação ...");
  };
}
const Celular2 = new Celular("apple", 5.5, 3000);
console.log(Celular2);

function Carro(modelo, marca, ano) {
  this.modelo = modelo;
  this.marca = marca;
  this.ano = ano;
  this.avalia = function () {
    console.log("Estou vendo ...");
  };
}
const carro1 = new Carro("onix", "Chevrolet", 2019);
console.log(carro1);

// clonando objetos

const celular = {
  marcaCelular: "Asus",
  tamanhoTela: {
    vertical: 155,
    horizontal: 75,
  },
  ligar: function () {
    console.log("Fazendo ligação...");
  },
};
/* aqui vc clona e tb acrescenta
  const novoObjeto = Object.assign({
      Bateria: 4000
  },celular)
      console.log(novoObjeto);*/

const objeto2 = { Bateria: 4000, ...celular };
console.log(objeto2);
