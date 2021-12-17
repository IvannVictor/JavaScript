let nun = [1,4,7,9,0]
nun.push(2)
nun.sort()
console.log(`Nosso vetor é ${nun} e tem ${nun.length} posições`)
console.log(`O primeiro valor é ${nun[0]}`)

for(let pos = 0; pos < nun.length; pos++){
    console.log(`${nun[pos]}`)
}

for(pos in nun){
    console.log(`${nun[pos]}`)
}