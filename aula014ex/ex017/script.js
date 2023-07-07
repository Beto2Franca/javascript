function tabuada(){
    let num = document.getElementById('inum')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){
        window.alert('Por favor, digite um número!')

    }else{
        let n = Number(num.value)

        let c = 1
        tab.innerHTML = '' //Limpa a tabuada antes de mostrar uma nova
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`

            // item.value = `tab${c}` o option precisa de um value. 
            // mas para o JavaScript não é preciso.

            tab.appendChild(item)
            c++

        }
    }
    
}