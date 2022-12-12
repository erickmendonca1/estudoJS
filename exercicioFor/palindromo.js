let escolha = prompt ("Escolha uma palavra")
let reverso =""
let reverso1 = ""
let palavra = escolha.length
let j = 0

for (let i=0;i<escolha.length;i++){
    if(escolha[i]===escolha[palavra-1]){
        j++
        palavra--
    }
}
palavra = escolha.length

if (j===escolha.length){
    console.log("É palindromo")
}
else{
    console.log("Não é palindromo")
    
    for (let i=0;i<escolha.length;i++){
        reverso = reverso + escolha[palavra-1]
        palavra--
    }
    console.log(reverso)
    console.log(escolha)
}