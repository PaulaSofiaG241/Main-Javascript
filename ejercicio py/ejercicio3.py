import math

cat1 = float(input("Ingresar cateto opuesto: "))
cat2 = float(input("Ingresar cateto adyacente: "))

hip = (cat1*cat1)+(cat2*cat2)

math.sqrt(hip)
print(f"La hipotenusa es:{hip}" )