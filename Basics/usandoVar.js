function teste(){
    var local = 123
    console.log(local)
}

teste()
//erro undefined
//console.log(local)

var numero = 1
{
    var numero =2 
    console.log("dentro = " , numero)

}
console.log("fora = " ,numero)