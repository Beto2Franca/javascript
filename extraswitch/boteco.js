function verificar() {
    let img = document.getElementById('img')
    let num = document.getElementById('numero')
    let res = document.getElementById('res')




    if (num.value.length == 0) {
        window.alert('Digite um número no campo abaixo.')
    } else {
        let p = Number(num.value)


        switch (p) {
            case 1:
                res.innerHTML = 'R$ 17,50'
                img.src = '/extraswitch/image/hvegan.png'
                break
            case 2:
                res.innerHTML = 'R$ 19,90'
                img.src = '/extraswitch/image/hcarne.png'
                break
            case 3:
                res.innerHTML = 'R$ 12,90'
                img.src = '/extraswitch/image/fritas.png'
                break
            case 4:
                res.innerHTML = 'R$ 16,90'
                img.src = '/extraswitch/image/coxinha.png'
                break
            case 5:
                res.innerHTML = 'R$ 15,90'
                img.src = '/extraswitch/image/caipirinha.png'
                break
            case 6:
                res.innerHTML = 'R$ 17,99'
                img.src = '/extraswitch/image/moscow.png'
                break
            case 7:
                res.innerHTML = 'R$ 13,99'
                img.src = '/extraswitch/image/cerva.png'
                break
            case 8:
                res.innerHTML = 'R$ 10,99'
                img.src = '/extraswitch/image/chopp.png'
                break
            default:
                res.innerHTML = 'Esse número não é valido.'
                break
        }
        num.focus()


        // Captura o evento de pressionar tecla
        document.getElementById('numero').addEventListener('keyup', function (event) {
            // Verifica se a tecla pressionada é "Enter"
            if (event.key === 'Enter') {
                // Chama a função verificar() quando "Enter" é pressionado
                verificar();
            }
        });



    }
}