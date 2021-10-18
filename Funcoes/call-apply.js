function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)}`
}

const produto = {
    nome: 'Computador',
    preco: 5999.00,
    desconto: 0.1,
    getPreco
}
global.preco = 20
global.desconto = 0.5

console.log(getPreco())
console.log(produto.getPreco())

// Call e Apply o que muda é forma de declarar os args,parametros
const carro = {preco: 100000,desconto: 0.1}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))
console.log(getPreco.call(carro,0.2,'EUR'))
console.log(getPreco.apply(carro,[0.2,'EUR'])) // precisa de um array