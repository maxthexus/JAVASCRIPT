let num = [5,8,4,9,3,]




//let num =  [5,8,4]
//posicao vet 0,1,2
//num[3]=6 (substituir ou criar um novo elemento no vetor)
//num.push(7) (adicionar um novo valor no final do vetor)
//num.length  (tamanho do vetor)
//num.sort() (ordena os valores do vetor em ordem crescente)

console.log (num)
console.log (`O valor do primeiro Vetor é ${num[0]}`)
console.log (`O tamanho do vetor é de ${num.length} elementos`)
num.sort()
console.log (`O valor do primeiro Vetor após organizar em crescente é ${num[0]}`)
num.push(1)
console.log(`Foi adicionado um novo numero no final do vetor, o numero ${num[5]}`)
console.log (`O tamanho do vetor agora é de ${num.length} elementos`)

let pos = num.indexOf(8)//faz uma busca no vetor
if(pos==-1){
    console.log(`Valor não encontrado`)
}else{
console.log(`Valor está na posição ${pos}`)
}
