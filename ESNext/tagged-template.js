function tag(part, ...valores) {
    console.log(part)
    console.log(valores)
    return 'Outra String'
}

const aluno = 'Pedrim'
const situacao = 'Reprovado'
console.log(tag`${aluno} está ${situacao}`)

function dinheiro(part, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$ ${valor.toFixed(2)}`
        resultado.push(part[indice],valor)
    })
    return resultado.join('')
}

const preco = 1
console.log(dinheiro`o valor da bala é ${preco}`)