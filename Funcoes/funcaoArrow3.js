let comparaComThis = function (a) {
    console.log(this === a)
}
comparaComThis(global)

const obj = {}

comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = (param) => console.log(this === param )
comparaComThisArrow(global)
comparaComThisArrow(module.exports) // igual ao this
// o bind nao funciona na arrow function