frase = "El carro esta muy caro y esta muy grande caro caro"

x = input("Ingresa palabra a buscar: ")

z = 0

for i in frase.split():

    if i == x:

        z += 1

print(z)