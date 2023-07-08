var vetor = []
var result = window.document.getElementById('result')
var fim = window.document.getElementById('finalizar')

function media(vet){
    return ((soma(vet))/(vet.length))
}

function soma(vet){
    let valor = 0
    for(val in vet){
        valor += vet[val]
    }
    return valor
}

function add(){    
    let v = Number(window.document.getElementById('val').value)
    if(v >= 1 && v <= 100){
        if(vetor.indexOf(v) === -1){
            vetor.push(v)
            result.innerHTML += `<option value="${v}">Valor ${v} adicionado</option>`
            fim.innerHTML = ' '
        }else{
            alert(`O valor ${v} já esta cadastrado, digite outro valor porfavor!`)
        }
    }else{
        alert('Digite valor entre 1 e 100')
    }
    window.document.getElementById('val').value = ''
    window.document.getElementById('val').focus()
}

function finalizar(){
    fim.innerHTML = ''
    if( vetor.length > 0){
        vetor.sort((a, b) => a -b)
      
        fim.innerHTML += `Ao todo, temos ${vetor.length} números cadastrados. <BR/>
        O maior valor informado foi ${vetor[vetor.length - 1]}. <BR/>
        O menor valor informado foi ${vetor[0]}. <BR/>
        Somando todos os valores, temos ${soma(vetor)}. <BR/>
        A média dos valores digitados é ${media(vetor)}.`
    }else{
        alert(" [ERROR] Adicione valores entre 1 e 100 antes de finalizar")
    }
}

function limpar(){
    result.innerHTML = ''
    fim.innerHTML = ' '
    vetor = []
}