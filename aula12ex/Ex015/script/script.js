function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('Erro Verfique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if (fsex[0].checked){
            genero = 'Homem'
            document.body.style.backgroundColor=('#468cec')
            

            if(idade >=0 && idade <4){
                img.setAttribute('src','imagens/h-baby.png')
                genero = 'um bebê'
            }else if(idade < 14){
                img.setAttribute('src','imagens/h-child.png') 
            }else if(idade < 24){
                img.setAttribute('src','imagens/h-yong.png') 
            }else if(idade < 60){
                img.setAttribute('src','imagens/h-mature.png') 
            }else if(idade < 100){
                img.setAttribute('src','imagens/h-old.png') 
            }else{
                img.setAttribute('src','imagens/h-dino.png') 
                genero = 'Dinossauro'
            }


        }else if (fsex[1].checked){
            genero = 'Mulher'
            document.body.style.backgroundColor=('#d946ec')

            if(idade >=0 && idade <4){
                img.setAttribute('src','imagens/m-baby.png')
                genero = 'uma bebê'
            }else if(idade < 14){
                img.setAttribute('src','imagens/m-child.png') 
            }else if(idade < 24){
                img.setAttribute('src','imagens/m-yong.png') 
            }else if(idade < 60){
                img.setAttribute('src','imagens/m-mature.png') 
            }else if(idade < 100){
                img.setAttribute('src','imagens/m-old.png') 
            }else{
                img.setAttribute('src','imagens/m-dino.png') 
                genero = 'Dinossaura'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é <strong>${genero}</strong> com <strong>${idade}</strong> anos!`
        res.appendChild(img)
    }
}