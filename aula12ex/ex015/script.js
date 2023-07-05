function verificar(){
    var data = new Date()
    var ano = data.getFullYear()

    var fano = document.getElementById('itxtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano -Number(fano.value)
        // res.innerHTML = `Sua idade é de ${idade}` 
        var gênero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto') // criar id para img

        if (fsex[0].checked){

            gênero = 'Homem'

            if (idade >= 0 && idade <10){
                img.setAttribute('src','bebemenino.png')
            }
            else if(idade < 21){
                img.setAttribute('src','adolescentem.png')
            }
            else if (idade <50){
                img.setAttribute('src','homem.png')
            }
            else{
                img.setAttribute('src','idoso.png')
            }


        }
        else if (fsex[1].checked){
            gênero = 'Mulher'

            if (idade >= 0 && idade <10){
                img.setAttribute('src','1bebemenina.png')
            }
            else if(idade < 21){
                img.setAttribute('src','2adolescentemenina.png')
            }
            else if (idade <50){
                img.setAttribute('src','3mulher.png')
            }
            else{
                img.setAttribute('src','4idosa.png')
            }
        }


        res.style.textAlign = 'center' //centraliza o texto
       
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`

        res.appendChild(img)
    }
}