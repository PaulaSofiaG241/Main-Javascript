nota1 = float(input("ingrese su primer nota:"))
nota2 = float(input("ingrese su seguda nota:"))
nota3 = float(input("ingrese su tercera nota:"))
prom =(nota1 + nota2 + nota3)/3

if prom >= 3.5 and prom <= 4.0:
    print(f"se obtuvo un promedio de {prom} esta: aprobado")
elif prom >= 3.5:
    print(f"se obtuvo un promedio de {prom} eres: sobresaliente ")
else:
    print(f"se obtuvo un promedio de {prom} esta: desaprobado")