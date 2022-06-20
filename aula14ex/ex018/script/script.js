function contar(){
    let inicio = document.getElementById('numinicio')
    let fim = document.getElementById('numfim')
    let passo = document.getElementById('numpasso')
    let res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossivel Contar!<br>'
        window.alert('ERRO - Faltam dados')
        
    }else{
        res.innerHTML = ('Contando: ')
        let n1 = Number(inicio.value)
        let n2 = Number(fim.value)
        let n3 = Number(passo.value)

        if(n3 <=0){
            window.alert('Passo Inválido!')
            window.alert('Passo redefinido para 1')
            n3 = 1
        }

        if(n1 < n2){
            for(let c = n1; c <= n2; c += n3){//contagem
                res.innerHTML += `\u{1F4A8} ${c} `//+= concatenação para usar varios dados
            }
        
        }else{
            for(let c = n1; c >= n2; c -= n3){//regressiva
            res.innerHTML += `\u{1F4A8} ${c} `//+= concatenação para usar varios dados
            }
            
        }res.innerHTML += `\u{1F973}`
    }



}
