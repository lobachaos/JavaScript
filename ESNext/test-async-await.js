const fs = require('fs');

function lerArquivo(dir) {
    return new Promise((resolve, reject) => {
        fs.readFile(dir, (err, data) => {
            console.log(err ? 'Error' : 'Lido com Sucesso')
            err ? reject(err) : resolve(data.toString())
        })
    })
}

let obterDados = async () => {
    const data = await lerArquivo('./dados.txt')
    return data.split('\n').join(',').substring(0, data.length - 1)
}

obterDados().then(console.log)