let alunos = [
    {nome: 'Joao', nota: 6.5, bolsista: false},
    {nome: 'Ana', nota: 9.5, bolsista: false},
    {nome: 'Bia', nota: 5.5, bolsista: false}
];

const resultado = alunos.map(a => a.nota).reduce((acumulador, valorAtual) => {
    console.log(acumulador, valorAtual)
    return acumulador + valorAtual
})

console.log(resultado)

// Todos os alunos sao bolsistas?

const bolsa = alunos.map(a => a.bolsista).reduce((x,y) => {
    return x && y
})

console.log(bolsa)