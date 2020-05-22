/*function b(n) {
    var i = 0;
    
        while(i++,i<=30) {
            if(i % 3)
                if(i % 5) 
                    console.log(i);
                else 
                    console.log('Buzz');
            else if(i % 5) 
                console.log('Fizz');
            else 
                console.log('FizzBuzz');
            
               
        }
    return;
}console.log(b());*/

function B(n) {
  var i = n;
  for (i = 1; i <= 15; i++) {
    if (!(i % 3) && !(i % 5)) {
      console.log("FizzBuzz");
    } else {
      if (!(i % 3)) console.log("Fizz");
      if (!(i % 5)) console.log("Buzz");
      else console.log(i);
    }
  }
  return n;
}
console.log(B());

/*parimpar =(resultado) =>{
     
      x =resultado
      x = 1
      do{  
       if (x %2 ===0) 
          console.log(x,'par')
       else 
          console.log(x,'impar');
      x++
   } while (x<=20) 
  }
  parimpar()*/

function parinpar() {
  for (let x = 1; x <= 20; x++) {
    if (x % 2 == 0) {
      console.log(x, "par");
    } else {
      console.log(x, "inpar");
    }
  }
}
parinpar();

/*const filme ={
      titulo:'homem aranha',
      ano:2018,
      diretor:'robert',
      personagem:'mari jeni'
  }*/
function exibirobjetos() {
  const filme = {
    titulo: "homem aranha",
    ano: 2018,
    diretor: "robert",
    personagem: "mari jeni",
  };
  for (key in filme) {
    if (typeof filme[key] == "string") {
      console.log(key, filme[key]);
    }
  }
}
exibirobjetos();
