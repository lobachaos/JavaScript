const aprovados = ['Ana', 'Bia', 'Carlos', 'Diego', 'Eduardo']

aprovados.forEach(function (nome, indece, array) {
    console.log(`${indece + 1} ${nome}`)
    console.log(array)
})

aprovados.forEach(nome => console.log(nome))


const animais = ['Arara', 'Borboleta', 'Cachorro', 'Dinossauro']

console.log()

Array.prototype.forEach2 = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

animais.forEach2(function (nome, indice) {
    console.log(`${indice + 1} ${nome}`)
})