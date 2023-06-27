function hola(){
    let ed = document.getElementById("edad").value
    if(ed>18){
        document.getElementById("respuesta").innerText= "si puede salir"
    }
    else{
        document.getElementById("respuesta").innerText= "no puede salir"
    }
}

function boton(){
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    
    let sum1 = parseInt(num1) + parseInt(num2)
    let mult = parseInt(num1) * parseInt(num2)
    let div = parseInt(num1) / parseInt(num2)
    if(sum1>10){
        document.getElementById("respuesta").innerText = mult
    }
    else{
        document.getElementById("respuesta").innerText =  div
    }
}