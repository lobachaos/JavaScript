const product = Object.preventExtensions({
    nome:'Sei la',preco:99999 , tag:'hell'
})

console.log('Extensivel ? ', Object.isExtensible(product))
product.nome = 'Borracha'
product.description = 'testando123' // nao adiciona
delete product.tag


console.log(product)

//Tem o metodo seal , que nao deixa deletar atributos e nem adicionar novos atributos
//freeze = seladdo + valores constantes 