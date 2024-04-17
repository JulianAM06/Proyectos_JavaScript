var nombre = "Julian";
var edad = 32;
var activo = true;
var apellido = "Alzate Monsalve"
var estatura = 1.78;
var cedula = false;

//typeof nos permite saber que tipo de dato esta almacenado en la variable
console.log(nombre + " " + typeof nombre);
console.log(edad + " " + typeof edad);
console.log(activo + " " + typeof activo);
console.log(apellido + " " + typeof apellido);
console.log(estatura + " " + typeof estatura);

alert("Iniciando con JavaScript," + " mi nombre es: " + nombre + " y tengo: " + edad + " años");

// Condicional AND
console.log(edad >= 18 && cedula ==true)

//Condicional OR
console.log(edad >= 18 || cedula ==true)


//Si usamos var podemos acceder a dicha variable desde cualquier parte del codigo
if (true){
    var nombre2 = "Matias";
}

console.log(nombre2);


// Si usamos la variable let no podemos acceder a dicha variable desde afuera del condicional
//if (true){
    //let nombre3 = "Matias";
//}

//console.log(nombre3);


// Si usamos const queire decir una constante que no puede ser modificada o asignarle otro valor diferente
//const email = "juliannal@hotmail.com";

//email = "julianalzatemonsalve@gmail.com";

var comida1 = 2800;

var comida2 = 1300;

var bebida1 = 2800;

var bebida2 = 1300;

var totalComida = comida1 + comida2

var totalBebida = bebida1 + bebida2

var totalCena = totalBebida + totalComida

console.log("Total de Comida es : " + totalComida + ", " + "Total de Bebida es: " + totalBebida + ", " + "Total de la Cena es: " + totalCena)


//Uso de condicionales if - else if - else

if (totalComida > totalBebida){
    console.log("Restaurante Costoso")
}
else if (totalComida == totalBebida) {
    console.log("Restaurante Medio")
}
else {
    console.log("Restaurante Economico")
}

//Ciclo While

var i = 0

while (i < 10) {

    i = i + 1;
    console.log(i)
}

// Ciclo For

for(var i = 1; i <= 10; i += 1){
    console.log(i)
}

// Funciones

function cafetera(ing1, ing2, ing3){
    if (ing1 == "leche" && ing2 == "agua" && ing3 == "cafe"){
        return true;
    }

    else{
        return false
    }
}

var tasa = cafetera("leche", "vinagre", "cafe")

if (tasa == true){
    console.log("Listo el Cafe")
}
else {
    console.log("No son los ingredientes para el Cafe")
}