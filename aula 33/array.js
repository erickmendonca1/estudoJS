const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf","Aragon","Legolas","Gimli"]

console.log(arr)

//Adicionar Elementos
//push

let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)

//unshift
tamanho = arr.unshift("Teste")
console.log(arr)
console.log(tamanho)

//Remover Elementos do Final
//pop
let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

//Remover Elementos do Começo
//shift
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

//Pesquisar por um Elemento
//Includes
const inclui = arr.includes("Gandalf")
console.log(inclui)

//indexOf
const indice = arr.indexOf("Gandalf")
console.log(indice)

//Cortar e Concatenar
//slice

const hobbits = arr.slice(0, 4)
const outros = arr.slice(-5)
console.log(arr)
console.log(hobbits)
console.log(outros)

//concat

const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)

//Substituição dos Elementos
// splice
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento")
console.log(sociedade)
console.log(elementosRemovidos)

//Iterar sobre os Elementos do Array

for(let i=0 ; i<sociedade.length; i++){
    const elemento = sociedade[i]
    console.log(elemento + " se encontra na posição " + i)
}