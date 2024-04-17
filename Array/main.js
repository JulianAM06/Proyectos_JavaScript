const resp = document.getElementById("respuesta");

const btnejec = document.getElementById("ejecutar");

btnejec.addEventListener("click", arreglo)

let frutas = ["Manzana", "Fresa", "Mango"]

//frutas.length me indica la cantidad de elementos dentro de un array
//frutas[frutas.length - 1] podemos acceder al ultimo elemento del array

function arreglo(){
    frutas.forEach(function(item, index, array){
        resp.innerText = array
    })
}