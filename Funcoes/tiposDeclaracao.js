console.log(soma(2,5))
//function declaration , pode ser usada mesmo antes de ser declarada
// ! Js carrega as funçoes primeiro
function soma(x,y){
    return x + y
}

//function expression --> Função anonima armazenada em uma variavel
const sub = function (x,y){
    return x-y
}

//named funcition expression
const mult = function mult(x,y) {
    return x*y
}