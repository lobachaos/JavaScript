class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa("Joao")
p1.falar()


//Funcao Factory
const criarPessoa = nome => {
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Ana')
p2.falar()


//Funcao Construtora
function construirPessoa(nome){
    this.nome = nome
    this.falar = function (){console.log(`Meu nome é ${nome}`)
  }
}

const p3 = new construirPessoa('Bia')
p3.falar()