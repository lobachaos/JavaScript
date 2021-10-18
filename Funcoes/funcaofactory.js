//Factory Simples
function criarPessoa(){
    return {
        nome:'Joaizim',
        sobrenome:'Silva'
    }
}

console.log(criarPessoa())

function criarProduto(nome,preco = 0){
    return{
        nome:nome, // pode ser simplesmente nome
        preco
    }
}

console.log(criarProduto('Pc',1550.89))