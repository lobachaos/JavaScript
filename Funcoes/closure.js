const x = 'Global'

function fora() {
    const x = 'Local'

    function dentro() {
        return x
    }

    return dentro
}

const minhaFuncacao = fora()
console.log(minhaFuncacao())