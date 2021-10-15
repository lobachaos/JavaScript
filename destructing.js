const Pessoa = {
    nome: 'Ana',
    idade: 30,
    endereco: {
        logradouro: 'rua das orquideas',
        numero: 140
    }
}
// Destruicting Object
// extrai pra fora do objeto
const {nome, idade} = Pessoa
console.log(nome, idade)

// destructing do array
const [a] = [10]
console.log(a)
const [n1, , n2, n3, n4 = 0] = [10, 7, 9, 8]
console.log(n1, n2, n3, n4)

// Destructing em funcoes
function rand({min = 0, max=100}) {
    const valor = Math.random() * (max - min) - min
    return Math.floor(valor)
}
// Permite passar direto aqui !
console.log(rand({min: 0, max: 50}))

