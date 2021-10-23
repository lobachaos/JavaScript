const nums = [1,2,3,4,5]
// Map é um for com propósito
const numsDobro = nums.map(value => value * 2)

console.log(numsDobro)

function vezes10(value) {
    return value *10
}
const numsVezes10 = nums.map(vezes10)
console.log(numsVezes10)

const carrinho = [
    '{"nome": "Borracha" , "preco": 3.45}',
    '{"nome": "Caderno","preco": 13.90}',
    '{"nome": "Caneta", "preco": 2.50}'
]

// Retornar um array apenas com os preços
const precos = carrinho.map(value => {
    const obj = JSON.parse(value)
    return obj.preco
})

console.log(precos)