let n1 = 1
let n2 = "1"

console.log(n1 == n2)
console.log(n1 === n2)
console.log(n1 != n2)
console.log(!(n1 != n2))

let v1 = {nome:"Bruno"}
let v2 = {nome:"Bruno"}
let v3 = v1

console.log(v1 == v2)
console.log(v1 === v2)

console.log(v1 == v3)
console.log(v1 === v3)

let nome = prompt("Digite um nome: ")
console.log(nome)

if(navigator.userAgent.match(/Android/i)
|| navigator.userAgent.match(/webOS/i)
|| navigator.userAgent.match(/IPhone|iPad|iPod/i)
|| navigator.userAgent.match(/blackBerry/i)
|| navigator.userAgent.match(/Windows Phone/i)
|| navigator.userAgent.match(/Opera mini/i)
|| navigator.userAgent.match(/IEMobile/i)
){
    console.log("Celular")
}else{
    console.log("PC")
}

