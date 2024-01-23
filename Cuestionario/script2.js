
function cargarDato(){
    let r1, r2, r3, r4
         //recuperan localmente
         r1=localStorage.getItem("var1")   
         r2=localStorage.getItem("var2")
         
         r4=localStorage.getItem("var4")

         //enviarlo a la vista
        document.getElementById("respuesta").innerHTML = r1  
        document.getElementById("respuesta2").innerHTML = r2 
         
        document.getElementById("respuesta4").innerHTML = r4 
}
    //llamar a la funcion para que se ejecute apenas redirecciona a respuesta.hml
    cargarDato()