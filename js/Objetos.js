function exibirArteristico(totalLIn) {
  /* padrao = ''
      for (let linha = 1; linha <= totalLIn; linha++) {
         padrao += '*'
         console.log(padrao);
         }*/
  for (let linha = 1; linha <= totalLIn; linha++) {
    padrao = "";
    for (let i = 0; i <= linha; i++) {
      padrao += "*";
    }
    console.log(padrao);
  }
}
exibirArteristico(5);

function exibirnumeroPrimos(limite) {
  for (let number = 2; number <= limite; number++) {
    /*  let ehPrimo = true
          for (let divisor = 2; divisor < number; divisor++) {
              if (number % divisor ===0) {
                  ehPrimo = false
                  break
              }
          }*/
    if (numeroprimo(number)) console.log(number);
  }
}
function numeroprimo(numero) {
  for (let divisor = 2; divisor < numero; divisor++) {
    if (numero % divisor === 0) {
      return false;
    }
  }
  return true;
}
exibirnumeroPrimos(15);

// factory function (função de fabrica)
const celular = {
  marcaCelular: "Asus",
  tamanhoTela: {
    vertical: 155,
    horizontal: 75,
  },
  capacidadeBateria: 5000,
  ligar: function () {
    console.log(" Fazendo ligação ...");
  },
};
console.log(celular);

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
const celular1 = criarCelular("Motorola", 5.3, 3500);
console.log(celular1);
