let dobro = function(a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return e implicito

console.log(dobro(2))

let ola = function (a) {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Ola' // possui param
console.log(ola())
