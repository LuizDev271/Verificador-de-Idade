function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

        if (fano.value.length == 0 || Number(fano.value) > ano){
            window.alert('[ERRO] Verifique os dados e tente novamente!')
        } else {
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            var genero = ''
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')
            if (fsex[0].checked){
                genero = 'Homem'
                if (idade >= 0 && idade <= 3){
                    //bebe
                    img.setAttribute('src', 'imagens/bebe-menino.png')
                } else if (idade >= 4 && idade <= 14){
                    //criança
                    img.setAttribute('src', 'imagens/menino.png')
                } else if (idade >= 15 && idade <= 21){
                    //jovem
                    img.setAttribute('src', 'imagens/jovem-masculino.png')
                } else if (idade >= 22 && idade <= 50){
                    //adulto
                    img.setAttribute('src', 'imagens/adulto.png')
                } else if (idade >= 51){
                    //velho
                    img.setAttribute('src', 'imagens/idoso.png')
                }
            } else if (fsex[1].checked){
                genero = 'Mulher'
                if (idade >= 0 && idade <= 3){
                    //bebe
                    img.setAttribute('src', 'imagens/bebe-menina.png')
                } else if (idade >= 4 && idade <= 14){
                    //criança
                    img.setAttribute('src', 'imagens/menina.png')
                } else if (idade >= 15 && idade <= 21){
                    //jovem
                    img.setAttribute('src', 'imagens/jovem-feminina.png')
                } else if (idade >= 22 && idade <= 50){
                    //adulto
                    img.setAttribute('src', 'imagens/adulta.png')
                } else if (idade >= 51){
                    //velho
                    img.setAttribute('src', 'imagens/idosa.png')
                }
            }
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
            res.appendChild(img)
            img.style.paddingTop = '10px'
        }


}
    
    