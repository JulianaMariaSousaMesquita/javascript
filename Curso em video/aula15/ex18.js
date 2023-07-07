let valores = [ 8, 1, 7, 4, 2, 9]

console.log(`Vetor Original = `+valores)
for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

valores.sort()
console.log(`Vetor Ordenado = `+valores)
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
