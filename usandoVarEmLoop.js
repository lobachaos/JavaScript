for (var  index = 0; index < 10; index++) {
    console.log(index)
}

console.log("i = ",index)
// var é acessado fora do bloco , LET não é


const funcs = []

for (var i = 0 ; i < 10 ; i++) {
funcs.push(function(){
    console.log(i)
})
}

funcs[2]()
funcs[6]()