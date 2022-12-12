let pessoa = {
    nome: "Isaac",
    idade: 26,
    dizerOla(nome) {
        console.log("Olá, mundo! Meu nome é " + this.nome)
    }
}
console.log(pessoa)

pessoa.dizerOla()