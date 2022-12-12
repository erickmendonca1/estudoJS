function calcularMedia(a,b){
    const media = (a + b)/2
    return media
}

const resultado = calcularMedia(7,2)

console.log(resultado)

function criarProduto(nome,preco){
    const produto = {
        nome, // nome: nome
        preco, // preco: preco
        estoque: 1
    }
    return produto
}

const notebook = criarProduto("Notebook Intel Core i3 8Gb", 2500)

console.log(notebook)

//const numero = parseFloat(prompt("Escreva"))
//console.log(numero)

function areaRetangular(base, altura){
    return base * altura
}

function areaQuadrado(lado){
    return areaRetangular(lado,lado)
}

console.log(areaRetangular(3,4))
console.log(areaQuadrado(9))

function ola(){
    let texto = "..."
    texto="Olá, Mundo"
    console.log(texto)
    return texto
    
}
console.log(ola())

function maioridade(idade){
    if (idade >= 18){
        return "Maior de idade"
    }
    else
        return "Menor de idade"
}

console.log(maioridade(18))