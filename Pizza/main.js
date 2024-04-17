// Tomamos dato atraves de su id
//const contenedor = document.getElementById('contenedor');

// Tomamos todos los elementos que poseen la clase topping
//const topping = document.getElementsByClassName('topping');

// Tomamos todos los elementos que tengan la misma caractristica
//const miLista = document.getElementsByTagName('li');

// En el HTML usamos la etiqueta onclick y le pasamos esta funcion como parametro
// Tambien se pueden adicionar parametros, los cuales se envian desde el HTML
//function mostrarClick(topping){
// console.log(topping);
//}

// Pasamos a realizarlo para un solo elemento

// Capturamos el id del elemento
//const aceitunas = document.getElementById('aceitunas');

// Creamos la funcion, le pasamos como  parametro el evento (e)
//function mostrarClick(e){
    // Al evento a mostrar por consola, le pasamos el blanco y su texto interno
    //console.log(e.target.innerText);
//}

// Creamos el evento, primero un click, y luego la funcion a ejecutarse (sin parentesis)
//aceitunas.addEventListener('click', mostrarClick)


// Pasamos a realizarlo para varios elementos

// Capturamos la clase topping de todos los elementos
const toppings = document.getElementsByClassName('topping');

// Creamos la funcion, le pasamos como  parametro el evento (e)
function mostrarClick(e){
    // Al evento a mostrar por consola, le pasamos el blanco y su texto interno
    console.log(e.target.innerText);
}

// Como son varios elementos creamos un ciclo for para recorrerlos
for (const topping of toppings) {
    topping.addEventListener('click', mostrarClick)
}


