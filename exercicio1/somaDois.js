let confirmacao = window.confirm("Vamos inserir dois valores. Prosseguir?")

const x = window.prompt("Insira o seu primeiro valor: ")
const y = window.prompt("Insira o seu segundo valor: ")

const primeiroValor =parseFloat(x)
const segundoValor =parseFloat(y)

const soma =primeiroValor + segundoValor
let subtracao = primeiroValor - segundoValor
let multiplicacao = primeiroValor * segundoValor
let divisao = primeiroValor / segundoValor

let resultadoSoma = "A soma de " + primeiroValor + " com " + segundoValor + " é " + soma

alert(
    "Resultado: \n" +
    "\n Soma: " + soma +
    "\n Subtração: " + subtracao +
    "\n Multiplicacao: " + multiplicacao +
    "\n Divisão: " + divisao
)