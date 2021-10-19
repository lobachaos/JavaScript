function MeuObjeto() {}

const obj2 = new MeuObjeto
const obj3 = new MeuObjeto

MeuObjeto.prototype.nome = 'Anonimo'
MeuObjeto.prototype.falar = function (){
    console.log(`Meu nome é ${this.nome}`)
}

console.log(MeuObjeto.prototype === obj2.__proto__) // é true por causa do new

obj2.falar()
obj3.nome = 'Obj3'
obj3.falar()

// Resumo
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)