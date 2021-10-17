function imprimirSoma(a,b){
    console.log(a+b)
}

imprimirSoma(2,2)
imprimirSoma(2)
imprimirSoma(2,2,6,7,8,9)


// funcao com retorno

function soma2(a,b = 2){
    return a + b
}

console.log(soma2(1,19))