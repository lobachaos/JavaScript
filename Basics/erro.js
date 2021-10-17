// noinspection JSVoidFunctionReturnValueUsed

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!!')
    } catch (e) {
        throw new Error("Deu ruim xD")
    } finally {
        console.log("Executa do mesmo jeito")
    }

}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)

