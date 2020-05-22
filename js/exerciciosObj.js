function exibirObjeto(objeto) {
  objeto = {
    rua: "manoel",
    cidade: "guarulhos",
    cep: 7144014,
  };
  for (const key in objeto) {
    console.log(key, objeto[key]);
  }
  return objeto;
}
console.log(exibirObjeto());

function Endereço(Rua, Cidade, Cep) {
  (this.Rua = Rua), (this.Cidade = Cidade), (this.Cep = Cep);
}
const endereço1 = new Endereço("a", "b", 7640);
const endereço2 = new Endereço("a", "b", 7640);
const endereço3 = endereço1;
function saoIguais(endereço1, endereço2) {
  //compara se as propriedades são iguais
  if (
    endereço1.Rua === endereço2.Rua &&
    endereço1.Cidade === endereço2.Cidade &&
    endereço1.Cep === endereço2.Cep
  ) {
    return true;
  }
}
console.log(saoIguais(endereço2, endereço1));

function temEndereçoMemoriaIguais(endereço1, endereço3) {
  //comparando se a referencia aponta para mesmo local da memoria
  // return endereço1 === endereço2 // verifica a memoria
  return endereço1 === endereço3;
}
console.log(temEndereçoMemoriaIguais(endereço1, endereço3));

let postagem = {
  titulo: "a",
  mensagem: "b",
  autor: "c",
  visualizaçao: 10,
  comentarios: [
    { autor: "a", mensagem: "b" },
    { autor: "a", mensagem: "b" },
  ],
  estaAoVivo: true,
};
console.log(postagem);

function exibirPostagem(title, msg, actor) {
  return {
    title,
    msg,
    actor,
    visualizaçao: 0,
    comentarios: [],
    estaAoVivo: false,
  };
}
postagem2 = exibirPostagem("ae", "be", "ce");
console.log(postagem2);
