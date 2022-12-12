
let opcao = 0

do{
 opcao = prompt("Escolha uma opção de 1 a 4 se quiser continuar e 5 se quiser encerrar")
    switch (opcao){
    case "1":
        
        alert("Opção 1 Escolhida")
        break
    case "2":
       
        alert("Opção 2 Escolhida")
        break
    case "3":
     
        alert("Opção 3 Escolhida")
        break
    case "4":
       
        alert("Opção 4 Escolhida")
        break
    
    case "5":
        alert("Você escolheu encerrar")
        break

    default:
        alert("Nenhuma opção válida...")
        break
  
    }
} while (opcao!=="5")

alert("Sistema está sendo encerrado!")