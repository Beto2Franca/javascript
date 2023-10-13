function verificar(){

    let nome = document.getElementById('nome')
    let sal = document.getElementById('sal')
    let res = document.getElementById('res')

    if(nome.value.length == 0 || sal.value.length == 0){
        window.alert('[ERRO!] Digite os dados no campo abaixo.')
    }else{

        let n = nome.value
        let salario = Number(sal.value)
        
        

        if(salario < 280){
            let por = salario * 20/100
            let aumento = salario + (salario * 20/100)
            res.innerHTML=` Olá, ${n}. Seu salário agora é de R$ ${aumento} reais. Isso significa que voce teve um reajuste de 20%. Um aumento de ${por} reais. Seu antigo salário era de R$ ${salario} reais.`
        }else if(salario < 700){
            let por = salario * 15/100
            let aumento = salario + (salario * 15/100)
            res.innerHTML=`Oi, ${n}. Seu novo salário é de <strong> R$ ${aumento} </strong> reais. Você teve um reajuste de 15%. Um aumento de R$ ${por} reais. Seu antigo salário era de R$ ${salario} reais. `
        }else if (salario < 1500){
            let por = salario * 10/100
            let aumento = salario + (salario * 10/100)
            res.innerHTML= `${n}, com o reajuste de 10% seu novo salário agora é de R$ ${aumento} reais. Um aumento de ${por} reais. Seu salário antigo era de R$ ${salario} reais.`
        }else if(salario > 1500) {
            let por = salario * 5/100
            let aumento = salario + (salario * 5/100)
            res.innerHTML= `Olá, ${n}. Tudo bom? Com o novo reajuste de 5% o seu salário atual é de <strong> R$ ${aumento} reais </strong>. um aumento de R$ ${por} reais. Seu salário anterior era de R$ ${salario} reais.`
        }

    }



}