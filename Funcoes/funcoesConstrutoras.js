function Carro(velocidadeMaxima = 200 , delta = 5){
    //atributo privado
    let velocidadeAtual = 0

    //metodo publico , para isso usa o THIS !
    this.acelerar = function (){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual +=delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }
    // metodo publico
    this.getVelocidadeAtual = function (){
        return velocidadeAtual
    }
}

const uno = new Carro // parantese é opcional
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350,20)
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())