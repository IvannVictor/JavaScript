let nun = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []


function adicionar(){
    if(isNumero(nun.value) && !inLista(nun.value, valores)){
        valores.push(Number(nun.value))
        let item = document.createElement('option')
        item.text = `Valor ${nun.value} adicionada.`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor invalido ou ja esta na lista!')
    }
    nun.value = ''
    nun.focus()
}


function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}


function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}


function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores para conseguir finalizar')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor  = valores[pos]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML = `<p>Ao todo foram cadastrados ${total} valores.</p>`
        res.innerHTML = `<p>O maior valor digitado foi o ${maior}.</p>`
        res.innerHTML = `<p>O menor valor digitado foi o ${menor}.</p>`
        res.innerHTML = `<p>A soma dos valores é ${soma}.</p>`
        res.innerHTML = `<p>A media dos valores é ${media}.</p>`
    }
}