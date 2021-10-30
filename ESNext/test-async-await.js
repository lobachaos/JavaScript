const fs = require('fs');

function lerArquivo(dir) {
    return new Promise((resolve) => {
        fs.readFile(dir, (err, data) => {
            try {
                resolve(data.toString())
                console.log('Lido com Sucesso')
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