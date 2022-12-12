function dobro(x){
    alert("O dobro de " + x + " é " + (x*2))
}

//dobro(3)
//dobro(6)

//dobro()

function dizerOla(nome = "mundo"){
    alert("Olá, " + nome + "!")
}

//dizerOla("Erick")
//dizerOla()

function soma(a,b){
    alert("O resultado da soma é " + (a+b) )
}

//soma(2,6)

function criarUsuario(nome, email, senha, tipo = "admin"){
    const usuario = {
        nome,    // mesmo que nome: nome
        email,    // mesmo que email: email,
        senha,    //mesmo que senha: senha,
        tipo     //mesmo que tipo: tipo
    }
    console.log(usuario)
}


//Sempre declarar parametro padrão no final da função pra não dar problema
//Do jeito abaixo dá errado
/*function novoUsuario (nome, tipo="admin", email, senha){
    const usuario = {
        nome,
        tipo,
        email,
        senha,
    }
    console.log(usuario)
}

criarUsuario("Erick","erick@gmail.com","1234")
novoUsuario("Erick","erick@gmail.com","1234")
*/

function muitosParametros(nome,telefone,endereço,aniversario,email,senha){
  //..  
}

function objetoComoParametros(usuario){
    usuario.nome
    usuario.email  
  }

muitosParametros("nome","telefone","endereço","aniversario","email","senha")

const dadosDoUsuario ={
    nome: " ",
    telefone: " ",
    endereço: " ",
    aniversario: " ",
    email: " ",
    senha: " ",
}

objetoComoParametros(dadosDoUsuario)