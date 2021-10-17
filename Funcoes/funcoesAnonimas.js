const soma = function (x,y) {
    return x+y
}

const imprimirResultado = function (a,b,operacao = soma) {
console.log(operacao(a,b))
}

imprimirResultado(3,4)
imprimirResultado(4,2, function (x,y){
    return x-y
}) // funcao anonima ( sem nome )

imprimirResultado(4,2,(x,y)=> x*y)

const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}

pessoa.falar()