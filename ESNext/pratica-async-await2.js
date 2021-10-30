function gerarNumerosEntre(min, max){
    if (min > max){
        [max,min] = [min,max]
    }
    return new Promise(resolve => {
        const random = parseInt((Math.random() * (max-min + 1)) + min)
        resolve(random)
    })
}

let obterVariosNumeros = async () => {
    const num1 = await gerarNumerosEntre(10,20)
    const num2 = await gerarNumerosEntre(10,25)
    const num3 = await gerarNumerosEntre(10,30)
    const num4 = await gerarNumerosEntre(10,35)
    const num5 = await gerarNumerosEntre(10,40)

    return [].concat(num1, num2, num3, num4, num5).toString()
}
obterVariosNumeros().then(console.log)