alert("Vamos iniciar o Calculo de Dano")

const nomePersonagem1Fl = window.prompt("Qual o nome do primeiro personagem?")
const poderPersonagem1Fl = window.prompt("Qual o poder do primeiro personagem? ")


const nomePersonagem2Fl = window.prompt("Qual o nome do segundo personagem?")
const pontosVidaPersonagem2Fl = window.prompt("Quantos pontos de vida tem o segundo personagem? ")
const poderDefesaPersonagem2Fl = window.prompt("Quantos pontos de defesa tem o segundo personagem? ")
const temEscudoFl= window.prompt("Esse personagem tem escudo? Digite: 1-Sim / 0-Não ")


const poderPersonagem1 = parseFloat(poderPersonagem1Fl)

let pontosVidaPersonagem2 = parseFloat(pontosVidaPersonagem2Fl)
const poderDefesaPersonagem2 = parseFloat (poderDefesaPersonagem2Fl)
const temEscudo = parseFloat(temEscudoFl)

let dano

if((poderPersonagem1>poderDefesaPersonagem2)&& temEscudo === 1){
    dano = (poderPersonagem1 - poderDefesaPersonagem2)/2
    console.log("to aqui na 1!!")
}

else if ((poderPersonagem1>poderDefesaPersonagem2)&& temEscudo === 0){
    dano = poderPersonagem1 - poderDefesaPersonagem2
    console.log("to aqui na 2!!")
}

else if (poderPersonagem1<poderDefesaPersonagem2){
    dano = 0
}

pontosVidaPersonagem2 = pontosVidaPersonagem2 - dano

alert(
    "Informações do personagem \n" +
    "\n Nome do Personagem: " + nomePersonagem1Fl +
    "\n Poder do Personagem: " + poderPersonagem1Fl +
    "\n" +
    "\n Nome do Personagem 2:" + nomePersonagem2Fl +
    "\n Pontos de Vida do Personagem 2: " + pontosVidaPersonagem2 +
    "\n Poder de Defesa Personagem 2: " + poderDefesaPersonagem2Fl +
    "\n Dano Causado: " + dano
)