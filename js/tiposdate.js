/*const messagem ='Minha primeira  Mensagem '

const outraMensagem = new String('outra mensagem')

console.log(typeof messagem);
console.log(typeof outraMensagem);// sai objeto

console.log(messagem.length);//tamanho 
console.log(messagem[3]);//posição 
console.log(messagem.includes('Minha'));//achar propriedades existentes
console.log(messagem.includes('minha'));//achar propriedades existentes
console.log(messagem.startsWith('Minha'))//inicio da propriedade
console.log(messagem.endsWith('Mensagem'))//fim da propriedade
console.log(messagem.indexOf('Mensagem'))//mostra a localização do indice
console.log(messagem.replace('Mensagem','escrita'))// troca um argumento pro outro
console.log(messagem.trim())// tira os espaços
console.log(messagem.split(' '))// retorna entre os espaços*/

// Template literal
const mensagem = "Eu fazendo a minha\r" + "'primeira palavra'";
console.log(mensagem);

const outra = `aqui vc usa a crase e representa o ,
templare no ecmascript 6 aonde coloca o ${2 + 2 / 3}
 e vc pode passa qq coisa função,var.,array entres outros.`;
console.log(outra);

//Date datas e horario

const data1 = new Date(); //chama a data completa
const data2 = new Date("may 18 2020 22:30"); //passa a data em forma de string
const data3 = new Date(2020, 04, 18, 9, 40); //usando numeros
const datas = data1.getFullYear(); // o get busca o elemento
const datas2 = data1.setFullYear(2025); //  o set coloca no elemento,tipo a data
const dt = data3.toDateString(); //passa como string a data
const dt2 = data2.toTimeString(); //passa como string ahora e o fuso.

console.log(dt);
