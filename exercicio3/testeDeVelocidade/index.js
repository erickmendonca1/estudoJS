alert("Vamos iniciar nosso Teste de Velocidade")

const nomeVeiculo1 = window.prompt("Qual o modelo do primeiro veículo? ")
const velocidadeVeiculo1 = window.prompt("Qual a velocidade do primeiro veículo? ")
const nomeVeiculo2 = window.prompt("Qual o modelo do segundo veículo? ")
const velocidadeVeiculo2 = window.prompt("Qual a velocidade do segundo veículo? ")

const velocidadeVeiculo1Float = parseFloat(velocidadeVeiculo1)
const velocidadeVeiculo2Float = parseFloat(velocidadeVeiculo2)

if (velocidadeVeiculo1Float > velocidadeVeiculo2Float){
    alert(
        "Informações do Veículo mais rápido\n" +
        "\n Modelo do Veículo: " + nomeVeiculo1 +
        "\n Velocidade do Veículo: " + velocidadeVeiculo1Float
        )
}

else if (velocidadeVeiculo2Float > velocidadeVeiculo1Float){
    alert(
        "Informações do Veículo mais rápido\n" +
        "\n Modelo do Veículo: " + nomeVeiculo2 +
        "\n Velocidade do Veículo: " + velocidadeVeiculo2Float
        )

}

else{
    alert (
        "Os dois veículos tem a mesma velocidade!"
    )
}