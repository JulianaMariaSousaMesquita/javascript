function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var anoNascimento = window.document.getElementById('ano')
    var res = document.querySelector('div#res')
    if (anoNascimento.value.length == 0 || anoNascimento.value > ano){
        window.alert('Verifique os dados e tente novamente!')
    }else{
        var sexo = document.getElementsByName('sexo')
        var idade = ano - Number(anoNascimento.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(sexo[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 3){
                img.setAttribute('src','bebe-masculino.jpg')
            }else if(idade > 3 && idade <= 12){
                img.setAttribute('src','criança-masculina.jpg')
            }else if(idade > 12 && idade <= 21){
                img.setAttribute('src','homem-jovem.jpg')
            }else if(idade > 21 && idade <= 50){
                img.setAttribute('src','homem-adulto.jpg')
            }else if(idade > 50){
                img.setAttribute('src','homem-idoso.jpg')
            }
        }else if(sexo[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <= 3){
                img.setAttribute('src','bebe-feminino.jpg')
            }else if(idade > 3 && idade <= 12){
                img.setAttribute('src','criança-feminina.jpg')
            }else if(idade > 12 && idade <= 21){
                img.setAttribute('src','mulher-jovem.jpg')
            }else if(idade > 21 && idade <= 50){
                img.setAttribute('src','mulher-adulta.jpg')
            }else if(idade > 50){
                img.setAttribute('src','mulher-idosa.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}