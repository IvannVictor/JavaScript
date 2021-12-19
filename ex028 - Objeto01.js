let amigo = {nome: 'jose',sexo: 'M', peso: 85.3, engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} peso ${amigo.peso}KG`)