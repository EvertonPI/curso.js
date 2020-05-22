function somamult(quant) {
  mult3 = 0;
  mult5 = 0;
  for (x = 0; x <= quant; x++) {
    if (x % 3 === 0) {
      mult3 += x;
    }
    if (x % 5 === 0) {
      mult5 += x;
    }
  }
  return mult3 + mult5;
}
console.log(somamult(10));

/*function mediadoaluno(notas) {
       notas = [70,80,70]
       soma = 0
      for ( nota of notas) {
          soma += nota
      }
      const media = soma/(notas.length)
  
      if(media <=59) return 'F'
      if(media <=69) return 'D'
      if(media <=79) return 'C'
      if(media <=89) return 'B'
      if(media <=89) return 'B'
          return 'A'
  }
  console.log(mediadoaluno());
  */
function mediadoaluno(notas) {
  const media = calcularMedia(notas);

  if (media <= 59) return "F";
  if (media <= 69) return "D";
  if (media <= 79) return "C";
  if (media <= 89) return "B";
  if (media <= 89) return "B";
  return "A";
}
function calcularMedia(array) {
  array = [70, 80, 70];
  soma = 0;
  for (valor of array) {
    soma += valor;
  }
  return soma / array.length;
}
console.log(mediadoaluno());
