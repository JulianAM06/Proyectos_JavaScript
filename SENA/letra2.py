frase = "El carro esta muy caro y esta muy grande caro caro muy muy"

x = input("Ingresa palabra a buscar: ")

z = 0

for i in frase.split():

    if i == x:

        z += 1

if z == 1 or z == 2 :

    print("Existen menos de 2")

elif z >= 3:

    print(z - 2)