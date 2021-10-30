const fs = require('fs');

function lerArquivo(dir) {
    return new Promise((resolve, reject) => {
        fs.readFile(dir, (err, data) => {
            const tentaiva = err ? 'Error' : 'Lido com Suceesso'
            console.log(tentaiva)
            try {
                resolve(data.toString())
            }
            catch (err) {
                console.log('Deu ruim')
            }
        })
    })
}

let obterDados = async () => {
    const data = await lerArquivo('./dados.txt')
    return data.split('\n').join(',').substring(0, data.length - 1)
}

obterDados().then(console.log)