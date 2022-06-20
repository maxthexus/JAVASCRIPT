/*function calcular(){
    let numtabuada = document.getElementById('numtabuada')
    let tab = document.getElementById('seltab')    
    if(numtabuada.value.length == 0){        
        window.alert('Por favor, digite um número!')
    }else{        
        let nt = Number(numtabuada.value)
        let c = 1
        //for(let i = 0; i <=9; i++){
        //res.innerHTML += `${i} X ${nt} = ${i*nt}<br>`
        tab.innerHTML = ''
        while(c<=10){
        let item = document.createElement('option')
        item.text = `${nt} x ${c} = ${nt*c}`       
        tab.appendChild(item)
        item.value=`tab${c}`
        c++
    }
    }
}*/
function calcular(){
    let numtabuada = document.getElementById('numtabuada')
    let res = document.getElementById('seltab')    
    if(numtabuada.value.length == 0){        
        window.alert('digite um número!')
    }else{        
        let nt = Number(numtabuada.value)      
        res.innerHTML = ''
        for(let i = 0; i <=9; i++){
        let item = document.createElement('option')
        item.text = `${nt} x ${i} = ${nt*i}`       
        res.appendChild(item)
        item.value=`tab${i}`
        
    }
    }
}