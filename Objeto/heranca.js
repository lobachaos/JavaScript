const ferrari={
    modelo:'F40',
    velMax:325
}

const volvo ={
    modelo:'V40',
    velMax:200
}

// console.log(ferrari.__proto__)
// console.log(ferrari.__proto__ === Object.prototype)

//Cadeia de Protótipos ( prototype chain)
const avo = {attr1: 'A'}
const pai = {__proto__: avo,attr2:'B',attr3:'03'}
const filho = {__proto__: pai,attr3:'C'}

console.log(filho.attr1,filho.attr3)