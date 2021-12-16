function contar(){
    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var msg = window.document.getElementById('msg')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        msg.innerHTML = 'Impossivel contar!'
    }else{
        msg.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0){
            window.alert('Passo invalido! Considerando o valor 1')
            p = 1
        }

        if(i < f){
            // Contagem crescente
            for(let c = i; c <= f; c = c + p){
                msg.innerHTML += `${c} 👉 `
            }
        }else{
            // Contagem regressiva
            for(let c = i; c >= f; c = c - p){
                msg.innerHTML += `${c} 👉 `
            }
        }
        msg.innerHTML += `\u{1F3C1}`   
    }
}