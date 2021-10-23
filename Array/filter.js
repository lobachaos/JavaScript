const produtos = [
    {nome: 'Notebook', preco: 2499, fragil:true},
    {nome: 'Ipad', preco: 5900, fragil:true},
    {nome: 'Copo de Vidro', preco: 12.45, fragil:true},
    {nome: 'Copo de Plastico', preco: 5.40, fragil:false}
]
// precisa de uma condição true ou false
const filtro = produtos.filter(value => {
    return value.preco > 2400
})
const caroEFragil = (obj) => {
    return obj.preco > 2400 && obj.fragil == true;
}

const filtro2 = produtos.filter(caroEFragil)

console.log(filtro)
console.log(filtro2)