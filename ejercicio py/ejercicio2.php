<?php
//Determinar si un aprendiz aprobo la materia dadas 3 notas las materias 
//se aprueban con 3.5, el sistema debera mostrar un mensaje de aprobo, 
//reprobo y el promedio de la materia 


$nota1 = readline("Ingrese la nota 1 ");
$nota2 = readline("Ingrese la nota 2 ");
$nota3 = readline("Ingrese la nota 3 ");

$promedio = ($nota1 + $nota2 + $nota3) / 3;


if ($promedio >= 3.5) {
    echo "Aprobado con un promedio de" . $promedio;
} elseif ($promedio < 3.5) {
    echo "Reprobado con un promedio de " . $promedio;
} else {
    echo "Valores invalidos";
}

?>