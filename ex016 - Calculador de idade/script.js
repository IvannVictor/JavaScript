function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var txtn = window.document.getElementById('txtnun')
    var res = window.document.getElementById('res')

    if(txtn.value.length == 0 || Number(txtn.value) > ano){
        window.alert('Por favor verifique os dados!!')
    }else{
        var sex = window.document.getElementsByName('rds')
        var idade = ano - Number(txtn.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(sex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src','crio.png')
            }else if(idade < 21){
                // Jovem
                img.setAttribute('src','vejemo.png')
            }else if(idade < 50){
                // Adulto
                img.setAttribute('src','homen.png')
            }else{
                // Idoso
                img.setAttribute('src','velho.png')
            }


        }else{
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src','cria.png')
            }else if(idade < 21){
                // Jovem
                img.setAttribute('src','jovema.png')
            }else if(idade < 50){
                // Adulto
                img.setAttribute('src','mulher.png')
            }else{
                // Idoso
                img.setAttribute('src','velha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Idade calculada: ${idade} anos e gênero ${genero}.`
        res.appendChild(img)
    }
}