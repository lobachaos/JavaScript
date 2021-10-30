const fs = require('fs');
const dir = './dados.txt'

function lerArquivo(dir) {
    return new Promise((resolve, reject) => {
        fs.readFile(dir,(err, data) => {
            console.log(err ? 'Error' : ' Lido com Sucesso')
            err ? reject(err) : resolve(data.toString())
        })
    })
}

lerArquivo(dir).then(console.log)