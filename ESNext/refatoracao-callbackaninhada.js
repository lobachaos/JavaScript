// com promisse
const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, response => {
            let resultado = ''
            response.on('data', dados => {
                resultado += dados
            })
            response.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (e) {
                    reject(e)
                }
            })
        })
    })
}
Promise.all([getTurma('A'),getTurma('B'),getTurma('C')]).then(turmas => [].concat(...turmas)).then(alunos => alunos.map(a => a.nome)).then(nome => console.log(nome))
