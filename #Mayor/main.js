const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');
const n3 = document.getElementById('n3');
const boton = document.getElementById('boton');
const mostrar = document.getElementById('mostrar');

function calcularMax(numero1, numero2, numero3) {
    if (numero1 > numero2 && numero1 > numero3) {
        return numero1;
    } else if (numero2 > numero1 && numero2 > numero3) {
        return numero2;
    } else {
        return numero3;
    }
}

function mayor() {
    // Capturar los valores de los campos de entrada cada vez que se hace clic en el botón
    const numero1 = parseFloat(n1.value);
    const numero2 = parseFloat(n2.value);
    const numero3 = parseFloat(n3.value);
    
    // Calcular el número mayor utilizando la función calcularMax
    const numeroMayor = calcularMax(numero1, numero2, numero3);

    // Mostrar el número mayor en el elemento con el id 'mostrar'
    mostrar.innerText = "El número mayor es: " + numeroMayor;
}

boton.addEventListener('click', mayor);

