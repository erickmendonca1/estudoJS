let lista = ["1 COPAS","2 COPAS","4 PAUS","5 OURO","6 ESPADA", "6 OURO"]
console.log(lista)
let op=0
do{
    op = prompt( "As quantidade de cartas atuais é: " + lista.length + "\n" + "Escolha uma opção: \n1- Listar Cartas \n2-Inserir Carta \n3-Remover Carta \n4-Sair")
    op=parseFloat(op)
    switch(op){
        case 1:
            alert("Lista de Cartas")
            for(let i=0; i<lista.length; i++){
                console.log((i+1)+ "-" + lista[i])
            }
        break
        
        case 2:
            lista.push(prompt("Insira o número e naipe da carta"))
            console.log("Lista Atualizada")
            console.log(lista)
        break
        
        case 3:
            alert("Retire uma carta")
            let atual = lista.pop()
            console.log(atual)
        break

        case 4:
            alert("Saindo do programa")
        break
        
        default:
            alert("Opção inválida")
        break
    }
} while(op!==4)