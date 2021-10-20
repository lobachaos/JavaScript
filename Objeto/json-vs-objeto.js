const obj = {a:1 , b:2 , c:3 , soma(){return a + b + c}}

console.log(JSON.stringify(obj))
console.log(JSON.parse('{"nome":"joao","idade":20}')) // objeto gerado a partir do json