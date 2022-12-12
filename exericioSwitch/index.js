const metros = prompt("Qual valor em metros você deseja converter? ")

const resultado = prompt("Para qual unidade você gostaria de converter? \n Escolha o número referente a opção! \n1- Milimetro (mm) \n2- Centímetro (cm) \n3- Decímetro (dm) \n4-Decâmetro (dam) \n5-Hectômetro (hm) \n6-Quilometro (km)")

let metrosFl = parseFloat(metros)
let convertido = 0

switch (resultado){
    case "1":
        convertido = metrosFl * 1000
        alert("O resultado de " + metrosFl + " metros em Milimetro (mm) é " + convertido + " mm")
        break
    case "2":
        convertido = metrosFl * 100
        alert("O resultado de " + metrosFl + " metros em Centímetros (cm) é " + convertido + " cm")
        break
    case "3":
        convertido = metrosFl * 10
        alert("O resultado de " + metrosFl + " metros em Decímetros (dm) é " + convertido + " dm")
        break
    case "4":
        convertido = metrosFl / 10
        alert("O resultado de " + metrosFl + " metros em Decâmetro  (dam) é " + convertido + " dam")
        break
    case "5":
        convertido = metrosFl / 100
        alert("O resultado de " + metrosFl + " metros em Hectômetro (hm) é " + convertido + " hm")
        break
    case "6":
        convertido = metrosFl / 1000
        alert("O resultado de " + metrosFl + " metros em Quilometro (km) é " + convertido + " km")
        break
    default:
        alert("Nenhuma opção válida...")
        break
                 
}