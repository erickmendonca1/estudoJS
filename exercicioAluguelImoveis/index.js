let opcao = 0

let lista = []

do{
 opcao = prompt("IMOVEIS CADASTRADOS: " + lista.length + "\n\nEscolha uma opção: \n 1 - Salvar Imovel \n 2 - Exibir Imoveis salvos \n 3 - Sair")
    switch (opcao){
    case "1":
        const imovel = {}

        imovel.nome = prompt("Qual o nome do proprietário? ")
        imovel.quartos = prompt("Possui quantos quartos?")
        imovel.banheiros = prompt("Possui quantos banheiros?")
        imovel.garagem = prompt("Possui Garagem? R: Sim ou Não")


        const confirmacao = confirm(
            "Salvar esse imóvel?\n" +
            "\n Proprietário: " + imovel.nome +
            "\n Quartos: " + imovel.quartos +
            "\n Banheiros: " + imovel.banheiros +
            "\n Garagem: " + imovel.garagem

        )
        if (confirmacao){
            lista.push(imovel)
        }
        console.log(imovel)
        console.table(lista)
        break

        case "2":
        alert("Opção Exibir Imóveis Escolhida")
        
        for (i=0;i<lista.length;i++){
            alert(
                "Imovel " + (i+1) + 
                "\nProprietario: " + lista[i].nome +
                "\nQuartos: " + lista[i].quartos +
                "\nBanheiros: " + lista[i].banheiros +
                "\nGaragem: " + lista[i].garagem
            )
        }
        break
        case "3":
     
        alert("Opção Sair Escolhida")
        break

    default:
        alert("Nenhuma opção válida...")
        break
  
    }
} while (opcao!=="3")

alert("Sistema está sendo encerrado!")