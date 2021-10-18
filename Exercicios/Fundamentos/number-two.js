/*
Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados.
 */

function tipoTrinagulo(ladoA, ladoB, ladoC) {
    let arr = [ladoA, ladoB, ladoC]
    let ladosIguais = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] === arr[j]) {
                ladosIguais++
            }
        }
    }
    switch (ladosIguais) {
        case 0:
            console.log("Escaleno")
            break
        case 1:
            console.log("Isósceles")
            break
        case 3:
            console.log("Equilátero")
            break
        default:
            console.log("Nenhum tipo de Trinagualo detectado")
    }

}

tipoTrinagulo(10, 2, 3)

// Outra maneira :
function classificaTriangulo(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado2 == lado3) {
        return 'Equilátero'
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return 'Isósceles'
    } else {
        return 'Escaleno'
    }
}
