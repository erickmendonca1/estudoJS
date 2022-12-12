let dinheiro = prompt("Quanto de dinheiro você tem disponível?")
dinheiro = parseFloat(dinheiro)

let opcao = 0

do{
    opcao = prompt(
        "Você tem " + dinheiro  + " reais disponíveis" +
        "\nEscolha: " +
        "\n 1 - Adicionar" +
        "\n 2 - Remover" +
        "\n 3 - Sair\n"
    )

    switch (opcao){
       case "1":
            dinheiro+= parseFloat(prompt("Quanto de dinheiro você quer depositar?")) 
            break
       case "2":
           dinheiro-= prompt("Quanto de dinheiro você quer sacar?")  
           break
       case "3":
        alert("Saindo...")
            break
        default:
            alert("Entrada Inválida!")


     
       }
} while (opcao!=="3")
   
 alert("Sistema está sendo encerrado!")