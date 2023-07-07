function calcular(){

    var começo = document.querySelector('#inic')
    var fim = document.querySelector('#ifim')
    var pe = document.querySelector('#ipasso')

    var res = document.querySelector('#res')

    if (começo.value.length == 0 || fim.value.length == 0 || pe.value.length == 0){
        res.innerHTML = 'Impossivel contar!'
        // window.alert('[ERRO!] Faltam dados!')
    } 
    else{
       res.innerHTML = 'Contando: <br>'

       var i = Number(começo.value)
       var f = Number(fim.value)
       var p = Number(pe.value)
    
       if (p<=0){
        window.alert('Passo inválido! Considerando PASSO1')
        p = 1
       }

       if(i<f){
        // Contagem crescente 

        for (var c = i ; c <= f; c = c + p){
            res.innerHTML += ` ${c} \u{1f449} `
       }

       } else {
        // Contagrem regressiva

        for(var c = i; c>=f; c-=p){
            res.innerHTML += `${c} \u{1F449}`
        }
       }

       res.innerHTML += `\u{1F3C1}` 
    //    A Bandeira no final
    
       
    }



}