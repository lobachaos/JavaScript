console.log(typeof Array, typeof new Array , typeof [] )  // Array em JS é dinâmico , não possui tamanho fixo

const nomes = ['Ana', 'Bia','Carlos','Daniel']
nomes.pop();
console.log(nomes)
nomes.push('Diego')
console.log(nomes)

nomes.shift()// tira o primeiro elemento
console.log(nomes)

nomes.unshift('Adão')
console.log(nomes)

const algunsNomes = nomes.slice(2)// novo array
console.log(algunsNomes)