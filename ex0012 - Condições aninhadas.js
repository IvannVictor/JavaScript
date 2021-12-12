var idade = 15
if(idade > 18 && idade < 65){
    console.log(`Voce com idade de ${idade} anos, é maior de idade e tem voto obrigaorio.`)
}else{
    if(idade < 16){
        console.log(`Voce com idade de ${idade} anos, não vota.`)
    }else{
        if(idade >= 65){
            console.log(`Voce com idade de ${idade} anos, tem voto opcional.`)
        }else{
            console.log(`Voce com idade de ${idade} anos, tem voto opcional.`)
        }
    }   
}