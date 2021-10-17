const notas = [6.6,5.0,10.0,8.9,4.5]

// scene : extract de notes < 7
// No CallBack

let notasBaixas = []
for(let i in notas){
    if(notas[i]<7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// With CallBack
notasBaixas2 = notas.filter(nota => nota < 7 ) // já add automaticamente caso verdadeiro
// ! Roda cada elemento do Array
console.log(notasBaixas2)