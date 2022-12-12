let numero = prompt("Escolha um número para que seja calculada a tabuada de 1 a 20")
numero = parseFloat(numero)

let tabuada = ""

for (let i = 0; i<20 ; i++){
    tabuada = tabuada + numero + "x" + (i+1) + " = " + numero*(i+1) + "\n"
}

alert(tabuada)
console.log(tabuada)