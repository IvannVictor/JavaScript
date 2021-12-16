function tab(){
    let nun = document.getElementById('txtnun')
    let tab = document.getElementById('tbsel')
    
    if(nun.value.length == 0){
        alert('Por favor digite um número!')
    }else{
        let n = Number(nun.value)
        c = 0
        tab.innerHTML = ''

        while(c <= 10){  // Cria os itens na selection
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${c*n}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
    
}