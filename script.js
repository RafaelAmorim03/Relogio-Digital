let horas = document.querySelector(".horas")
let minutos  = document.querySelector(".minutos")
let segundos = document.querySelector(".segundos")

let relogio = setInterval(function time (){
    let hoje = new Date()
    let hr = hoje.getHours()
    let min = hoje.getMinutes()
    let seg = hoje.getSeconds()

    if (hr < 10 ){
        hr = '0' + hr 
    } 
    if (min < 10){
        min = '0' + min 
    }
    if (seg < 10){
        seg = '0' + seg 
    }

    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = seg


  


})