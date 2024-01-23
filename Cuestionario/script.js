function guardar(){
    let pr1, pr2, pr3, pr4
    pr1 = document.getElementById("p1").value
    pr2 = document.getElementById("p2").value
    
    pr4 = document.getElementById("p4").value
    
    //guardar localmente
    localStorage.setItem("var1",pr1)
    localStorage.setItem("var2",pr2)
    
    localStorage.setItem("var4",pr4)

    //enviar al otro archivo   
    window.location="resultados.html"
}



