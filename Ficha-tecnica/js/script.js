 function ficha() {
    let producto, linea, versionante, versionact, mod1, mod2, mod3, 
    nom1, cc1, cele1, nom2, cc2, cele2, nom3, cc3, cele3, 
    nom4, cc4, cele4, nom5, cc5, celec5, nom6, cc6, celec6,
    desgen, objgen, objesp, arqui, requegen, requeadi, clipro, 
    hard1, soft1, otr1, hard2, soft2, otr2,
    versi1, netucam1, fecapro1, fecvali1, versi2, netucam2, fecapro2, fecvali2,
    elabo1, aprob1, vali1, elabo2, aprob2, vali2

    producto = document.getElementById("nomproducto").value
    linea = document.getElementById("lineapro").value
    versionante= document.getElementById("ver-ante").value
    versionact = document.getElementById("ver-act").value
    mod1 = document.getElementById("modulo1").value
    mod2  = document.getElementById("modulo2").value
    mod3 = document.getElementById("modulo3").value
    nom1 = document.getElementById("nombre1").value
    cc1 = document.getElementById ("cc1").value
    cele1= document.getElementById("celec1").value
    nom2 = document.getElementById("nombre2").value
    cc2  = document.getElementById("cc2" ).value
    cele2= document.getElementById("celec2").value
    nom3 = document.getElementById("nombre3").value
    cc3 =  document.getElementById("cc3").value
    cele3 =document.getElementById("celec3").value
    nom4 = document.getElementById("nombre4").value
    cc4 =  document.getElementById("cc4").value
    cele4 =document.getElementById("celec4").value
    nom5  = document.getElementById("nombre5" ).value
    cc5 = document.getElementById("cc5" ).value
    celec5   = document.getElementById("celec5" ).value
    nom6   = document.getElementById("nombre6" ).value
    cc6   = document.getElementById("cc6" ).value
    celec6   = document.getElementById("celec6" ).value
    desgen    = document.getElementById("des-ge" ).value
    objgen   = document.getElementById("objegen" ).value
    objesp   = document.getElementById("objespe" ).value
    arqui   = document.getElementById("arq" ).value
    requegen = document.getElementById("requefun").value
    requeadi = document.getElementById("reqadici" ).value
    clipro   = document.getElementById("clienpro" ).value
    hard1   = document.getElementById("har1" ).value
    soft1   = document.getElementById("sof1" ).value
    otr1   = document.getElementById("ot1" ).value
    hard2   = document.getElementById("har2" ).value
    soft2   = document.getElementById("sof2" ).value
    otr2   = document.getElementById("ot2" ).value
    versi1 = document.getElementById("ver1" ).value
    netucam1 = document.getElementById("nat1" ).value
    fecapro1 = document.getElementById("feapro1" ).value
    fecvali1 = document.getElementById("feval1" ).value
    versi2 = document.getElementById("ver2" ).value
    netucam2 = document.getElementById("nat2" ).value
    fecapro2 = document.getElementById("feapro2" ).value
    fecvali2 = document.getElementById("feval2" ).value
    elabo1 = document.getElementById("ela1" ).value
    aprob1 = document.getElementById("apro1" ).value
    vali1 = document.getElementById("val1" ).value
    elabo2 = document.getElementById("ela2" ).value
    aprob2 = document.getElementById("apro2" ).value
    vali2 = document.getElementById("val2" ).value
    
    console.log (versionante, mod1)
    
    
    
    document.getElementById("respuesta1").innerText= producto 
    document.getElementById("respuesta2").innerText = linea
    document.getElementById("respuesta3").innerText = versionante                                               
    document.getElementById("respuesta4").innerText = versionact
    document.getElementById("respuesta5").innerText = mod1 
    document.getElementById("respuesta6").innerText = mod2  
    document.getElementById("respuesta7").innerText = mod3 
    document.getElementById("respuesta8").innerText = nom1 
    document.getElementById("respuesta9").innerText = cc1 
    document.getElementById("respuesta10").innerText = cele1
    document.getElementById("respuesta11").innerText = nom2 
    document.getElementById("respuesta12").innerText = cc2  
    document.getElementById("respuesta13").innerText = cele2
    document.getElementById("respuesta14").innerText = nom3 
    document.getElementById("respuesta15").innerText = cc3 
    document.getElementById("respuesta16").innerText = cele3 
    document.getElementById("respuesta17").innerText = nom4 
    document.getElementById("respuesta18").innerText = cc4  
    document.getElementById("respuesta19").innerText = cele4 
    document.getElementById("respuesta20").innerText = nom5
    document.getElementById("respuesta21").innerText = cc5
    document.getElementById("respuesta22").innerText = celec5
    document.getElementById("respuesta23").innerText = nom6
    document.getElementById("respuesta24").innerText = cc6
    document.getElementById("respuesta25").innerText = celec6
    document.getElementById("respuesta26").innerText = desgen 
    document.getElementById("respuesta27").innerText = objgen
    document.getElementById("respuesta28").innerText = objesp
    document.getElementById("respuesta29").innerText = arqui
    document.getElementById("respuesta30").innerText = requegen
    document.getElementById("respuesta31").innerText = requeadi
    document.getElementById("respuesta32").innerText = clipro
    document.getElementById("respuesta33").innerText = hard1
    document.getElementById("respuesta34").innerText = soft1
    document.getElementById("respuesta35").innerText = otr1
    document.getElementById("respuesta36").innerText = hard2
    document.getElementById("respuesta37").innerText = soft2
    document.getElementById("respuesta38").innerText = otr2
    document.getElementById("respuesta39").innerText = versi1 
    document.getElementById("respuesta40").innerText = netucam1
    document.getElementById("respuesta41").innerText = fecapro1
    document.getElementById("respuesta42").innerText = fecvali1
    document.getElementById("respuesta43").innerText = versi2 
    document.getElementById("respuesta44").innerText = netucam2
    document.getElementById("respuesta45").innerText = fecapro2
    document.getElementById("respuesta46").innerText = fecvali2
    document.getElementById("respuesta47").innerText = elabo1 
    document.getElementById("respuesta48").innerText = aprob1 
    document.getElementById("respuesta49").innerText = vali1 
    document.getElementById("respuesta50").innerText = elabo2 
    document.getElementById("respuesta51").innerText = aprob2 
    document.getElementById("respuesta52").innerText = vali2 
}