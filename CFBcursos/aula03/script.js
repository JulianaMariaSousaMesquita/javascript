"use strict"

// Var e Let
function teste01(){
    var nome = "Juliana"    
    if(nome === "Juliana"){    
        let sobrenome = "Mesquita"  
        var nomeComposto = "Maria"  
        console.log(`Dentro do if do teste - ${nome} ${nomeComposto} ${sobrenome}`)
    }
    console.log(`Dentro do teste - Nome: ${nome}`)
    console.log(`Dentro do teste - Nome Composto: ${nomeComposto}`)
    //console.log(`Dentro do teste - Sobrenome: ${sobrenome}`)
}
teste01()
console.log(`Fora do teste - Nome: ${nome}`)
console.log(`Fora do teste - Nome Composto: ${nomeComposto}`)
console.log(`Fora do teste - Sobrenome: ${sobrenome}`)


// CONST
function teste02(){
    const curso = "Javascript"
    console.log(curso)
    curso = "HTML"
    console.log(curso)
}
teste02()
