// Capturamos los elementos del HTML por su Id

const inputRojo = document.getElementById('rojo');

const inputVerde = document.getElementById('verde');

const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('textoRojo');

const textoVerde = document.getElementById('textoVerde');

const textoAzul = document.getElementById('textoAzul');

// Creamos variables locales donde vamos a tomar el valor del input

let rojo = inputRojo.value;

let verde = inputVerde.value;

let azul = inputAzul.value;

// Pasamos esa variable let al atributo texto con innerText

textoRojo.innerText = rojo;

textoVerde.innerText = verde;

textoAzul.innerText = azul;


// Creamos funcion para actualizar el color

function actualizarColor (rojo, verde, azul) {
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
    document.body.style.backgroundColor = colorRGB;
}

// Actualizamos el texto del input Rojo

inputRojo.addEventListener('change', (e) => {
    rojo = e.target.value;
    textoRojo.innerText = rojo;
    actualizarColor(rojo, verde, azul);
})

// Actualizamos el texto del input Verde

inputVerde.addEventListener('change', (e) => {
    verde = e.target.value;
    textoVerde.innerText = verde;
    actualizarColor(rojo, verde, azul);
})

// Actualizamos el texto del input Azul

inputAzul.addEventListener('change', (e) => {
    azul = e.target.value;
    textoAzul.innerText = azul;
    actualizarColor(rojo, verde, azul);
})