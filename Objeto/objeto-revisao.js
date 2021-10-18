const produto = {}
// outra formas de criar um objeto
// const produto = new Object
produto['marca do produto'] = ['LG']
produto.nome = 'Teste'

// outro objeto
const carro = {
    modelo: 'A4',
    valor:89000,
    proprietario: {
        nome:'Joaozim',
        idade:45
    },
    condutores: [{
        nome:'Ana',
        idade:19
    },
        {
            nome:'Junior',
            idade:21
        }]
}
// atributos é acessado pelo dote.
console.log(carro)

delete carro.condutores

console.log(carro)
console.log(carro.condutores) // nao gera erro