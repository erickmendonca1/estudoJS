let lista = ["Erick","Benjamim","Evano"]
console.log(lista)
let op=0
do{
    op = prompt( "A fila de atendimento é: "+ lista + "\n\nEscolha uma opção \n1 - Listar Pacientes \n2-Inserir Pacientes \n3-Consultar Pacientes \n4-Sair")
    op=parseFloat(op)
    switch(op){
        case 1:
            alert("Lista de Pacientes")
            for(let i=0; i<lista.length; i++){
                console.log((i+1)+ "-" + lista[i])
            }
        break
        
        case 2:
            lista.push(prompt("Insira o nome do paciente"))
            console.log("Lista Atualizada")
            console.log(lista)
        break
        
        case 3:
            let atual = lista.shift()
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