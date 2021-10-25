let alunos = [
    {nome: 'Joao', nota: 6.5, bolsista: false},
    {nome: 'Ana', nota: 9.5, bolsista: false},
    {nome: 'Bia', nota: 5.5, bolsista: false}
];
// Media dos alunos
// Imperativo
let total = 0;
for (let i = 0; i <alunos.length ; i++){
    total += alunos[i].nota
}
console.log(total/alunos.length)

// Declarativo
const getNota = aluno => aluno.nota;
const soma = (total,atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2/alunos.length)