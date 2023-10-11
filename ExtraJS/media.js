function media(){

let nome = document.querySelector('#nome')
let nota01 = document.querySelector('#nota1')
let nota02 = document.querySelector('#nota2')

let res = document.querySelector('#res')

if(nome.value.length == 0 || nota01.value.length == 0 || nota02.value.length == 0){
    window.alert('[ERRO!] Preencha os dados')
}else{
    let n = nome.value
    let n1 = Number(nota01.value)
    let n2 = Number(nota02.value)
    let media = (n1 + n2) / 2
    
    if(media == 10){
        res.innerHTML=(`Parabéns, ${n}! Passou com uma ótima nota! Sua média foi ${media}.`)
    }else if(media >= 7){
        res.innerHTML=(`Aprovado! ${n}, você passou de ano. Sua média foi ${media}.`)
    }else{
        res.innerHTML=(`Reprovado. Sua média, ${n}, foi ${media}.`)
    }


}



}