const carrinho = [
    '{"nome": "Borracha" , "preco": 3.45}',
    '{"nome": "Caderno","preco": 13.90}',
    '{"nome": "Caneta", "preco": 2.50}'
]

Array.prototype.map2 = function (callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i],i,this));
    }
    return newArray;
}

// Retornar um array apenas com os preços
const precos = carrinho.map2(value => {
    const obj = JSON.parse(value)
    return obj.preco
})

console.log(precos)