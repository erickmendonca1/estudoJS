const nome = prompt("Qual o seu nome, Sr Turista?")
const visita = prompt ("Você visitou alguma cidade? ")
let cidade
let contadorDeCidades = 0

if (visita==="Sim"){
  cidade = prompt ("Qual cidade você visitou? ")
  contadorDeCidades++
  let visita2 = visita
  while(visita2==="Sim"){
      visita2 = prompt ("Você visitou outra cidade? ")
      if(visita2==="Não"){
          break
      }    
      cidade = cidade + " " + prompt ("Qual o cidade você visitou? ")
      contadorDeCidades++
  }
  
  alert(
      nome + " visitou " + contadorDeCidades + " cidades. \n" +
      "\nSão elas " + cidade
  )
}

else{
    alert ("Você não visitou nenhuma cidade")
}


console.log(cidade)