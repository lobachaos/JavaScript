// Junta e tambem separa
const junta = (...x) => {
    let soma = 0
    x.forEach(n => soma += n)
    return soma
}

console.log(junta(1,2,3))

//Separa - Spread
const  [l,e,...tras] = 'Letras'
console.log(tras)

const funcionario = {nome:'Joaozim', salario: 123456}
const clone = {ativo:true,...funcionario}
console.log(clone)