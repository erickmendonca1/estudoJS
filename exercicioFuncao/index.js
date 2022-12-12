
function areaRetangulo(){
    const base = parseFloat(prompt("Base: "))
    const altura = parseFloat(prompt("Altura: "))
    return base * altura
}

function areaTriangulo(){
    const base = parseFloat(prompt("Base: "))
    const altura = parseFloat(prompt("Altura: "))
    return base*altura/2
 }

function areaQuadrado(){
    const lado = parseFloat(prompt("Lado: "))
    return lado*lado
}

function areaTrapezio(){
    const baseMaior = parseFloat(prompt("Base Maior: "))
    const baseMenor = parseFloat(prompt("Base Menor: "))
    const altura = parseFloat(prompt("Altura: "))
    return (baseMaior+baseMenor)*(altura/2)
}

function areaCirculo(){
    const raio = parseFloat(prompt("Circulo: "))
    return 3,14*(raio*raio)
}

const resultado = 0

do{
 opcao = prompt("ESCOLHA UMA OPÇÃO  \n\n 1 - Triângulo \n 2 - Retangulo  \n 3 - Quadrado \n 4 - Trapézio \n 5 - Círculo \n 6 - Sair")
    switch (opcao){
        
        case "1":
        resultado = areaTriangulo()
        break

        case "2":
        resultado = areaRetangulo()
        break

        case "3":
        resultado = areaQuadrado()
        break

        case "4":
        resultado = areaTrapezio()
        break

        case "5":
        resultado = areaCirculo()
        break

        case "6":
        alert("Saindo....")
        break

        default:
        alert("Nenhuma opção válida...")
        break
    }
        if (resultado){
            alert ("Resultado: "+ resultado)
        
  
    }
} while (opcao!=="6")

alert("Sistema está sendo encerrado!")