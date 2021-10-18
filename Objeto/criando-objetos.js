//literal
const obj1 = {}
// Object
const obj2 = new Object

//Funcoes Construtoras
function Produto(nome, preco) {
    this.nome = nome
    this.getPreco = () => {
        return preco
    }
}

// Funcao Factory
function criarFuncinario(nome, salario,faltas=0) {
    return {
        nome,
        salario,
         faltas,
        getSalario() {
            return (salario/30) * (30 - faltas)
        }
    }
}

const funcionario01 = criarFuncinario('Adao','1200',2)
console.log(funcionario01.getSalario())