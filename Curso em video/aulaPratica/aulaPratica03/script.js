function contar() {
    var start = window.document.getElementById('start')
    var end = window.document.getElementById('end')
    var step = window.document.getElementById('step')
    var result = window.document.getElementById('res')

    if(start.value.length !== 0 || end.value.length !== 0 || step.value.length !== 0){
        result.innerHTML = 'Contando: '
        if(Number(end.value) > Number(start.value)){
            for(let i = Number(start.value); i <= Number(end.value); i=i+Number(step.value)) {
            result.innerHTML  += `${i} \u{27A1}`                 
            }
        }else if(Number(start.value) > Number(end.value)){
            for(let i = Number(end.value); i >= Number(start.value); i=i-Number(step.value)) {
                result.innerHTML  += `${i} \u{27A1}`             
            }
        }
        result.innerHTML  += `\u{1F6A9}` 
    }else{
        window.alert('[ERROR] Faltam dados!!')
    }
}