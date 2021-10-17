// Funcao em JS é First-Class Object ( Citizens)
// High-Order function

// criar de forma literal
function fun1() {}

// Armazenar em uma variavel
const fun2 = function(){}

// Armazenar em um Array
const array = [function fun3(){}, fun1,fun2]

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function() {return 'Opa'}
console.log(obj.falar())

// Passar funcao como parametro
function run(fun){
    fun()
}
run(function(){console.log('Executando 123')})

// Uma funcao pode retornar/conter outra funcao
function soma(a,b){
  return function(c){
      console.log(a+b+c)
    }
}

soma(2,3)(4)
const cincoMais = soma(2,3)
cincoMais(4)
