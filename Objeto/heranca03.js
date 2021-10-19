const pai = {
    nome:'Pedro',
    corCabelo:'preto'
}

const filha1 = Object.create(pai)
filha1.nome = 'Maria'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai,{nome:{
        value: 'Ana',
        writable: false,
        enumerable: true
    }
})
filha2.nome = 'Teste'
console.log(filha2)

for (let key in filha2){
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Recebido por herança : ${key}`)
}