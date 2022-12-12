let confirmacao = window.confirm("Vamos cadastrar o recruta. Prosseguir?")

let primeiroNome = window.prompt("Insira o seu primeiro nome: ")
let sobrenome = window.prompt("Insira o seu sobrenome: ")
let campoDeEstudo = window.prompt("Qual seu campo de estudo?: ")
let anoDeNascimento = window.prompt("Qual seu ano de Nascimento? ")

parseFloat(anoDeNascimento)

let idade = 2022 - anoDeNascimento 

let resultado = primeiroNome + " " + sobrenome + " " + campoDeEstudo + " " + idade

console.log(resultado)


alert(
    "Recruta Cadastrado com Sucesso! \n" +
    "\nNome completo: " + primeiroNome + " " + sobrenome +
    "\nCampo de estudo: " + campoDeEstudo +
    "\nIdade: " + idade
)