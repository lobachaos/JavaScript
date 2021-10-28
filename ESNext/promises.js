function falarDepois(segundos, frase) {
    return new Promise(resolve => {
        setTimeout(() => {
          resolve(frase)
        },segundos * 1000)
    })
}
// resolve só aceita UM parametro
falarDepois(3,'Testando 123').then(frase => frase.concat(' ?!? ')).then(outroParametro => console.log(outroParametro))