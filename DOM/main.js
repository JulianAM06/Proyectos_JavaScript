// Uso del DOM

// Capturamos el numero o elemento ingresado en el HTML atraves del id, y lo almacenamos en una Constante
const ent1 = document.getElementById("n1");

const ent2 = document.getElementById("n2");

const resp = document.getElementById("respuesta");

const btncalc = document.getElementById("calcular");

//Cuando se haga click llamamos la funcion Sumar
btncalc.addEventListener("click",sumar)

// Creamos la funcion Sumar con los valores enviados desde el HTML
function sumar() {
    
    //Convertimos esos valores en numeros reales
    const op1 = parseFloat(ent1.value);
    const op2 = parseFloat(ent2.value);

    //Realizamos la operacion dentro de la funcion
    let resultado = op1 + op2;

    //Enviamos el resultado de la operacion a la variable en el HTML
    resp.innerText = resultado
}