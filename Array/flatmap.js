const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
}]

const getNota = a => a.nota
const notaTurma = t => t.alunos.map(getNota)
const notas1 = escola.map(notaTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([],this.map(callback))
}

const notas2 = escola.flatMap(notaTurma)
console.log(notas2)