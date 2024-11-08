let nombre = "Julian";

console.log(nombre)

let persona = {
    nombre: "Matias",
    apellido: "Alzate Yarce",
    edad: 1,
    cedula: 1037676779,
}

console.log(persona.cedula)
console.log(persona['apellido'])

persona.cedula = 1035425685

console.log(persona.cedula)

let animales = ['Gato', 'Perro']

console.log(animales)

console.log(animales[0])

function saludar () {
    return ("Hola Mundo")
}

console.log(saludar())

// Validar Condicion
let edad = 18;

let acceso = edad > 17 ? 'Permitir Acceso' : 'No Puede Ingresar';

console.log(acceso)