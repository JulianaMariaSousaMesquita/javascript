function contar() {
    var start = window.document.getElementById('start')
    var end = window.document.getElementById('end')
    var step = window.document.getElementById('step')
    var result = window.document.getElementById('res')

    if(start.value.length !== 0 || end.value.length !== 0 || step.value.length !== 0){
        result.innerHTML = 'Contando: '
        if(Number(end.value) > Number(start.value)){
            for(let i = Number(start.value); i <= Number(end.value); i+=Number(step.value)) {
            result.innerHTML  += `${i} \u{27A1}`                 
            }
        }else if(Number(start.value) > Number(end.value)){
            for(let i = Number(end.value); i >= Number(start.value); i-=Number(step.value)) {
                result.innerHTML  += `${i} \u{27A1}`             
            }
        }
        result.innerHTML  += `\u{1F6A9}` 
    }else{
        window.alert('[ERROR] Faltam dados!!')
    }
}

function multiplication(){
    n = Number(window.document.getElementById('number').value)
    var result = window.document.querySelector('select#result')
    if(n !== 0){
        result.innerHTML = ''
        for(var i = 1; i < 10; i++){
            result.innerHTML += `<option value="${i*n}">${i} X ${n} = ${i*n}</option>`
        } 
    }else{
        window.alert ('Por favor, digite um número!')
    }
}