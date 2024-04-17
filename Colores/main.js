// Seleccionamos los elementos
const boton = document.querySelector('button');

const color = document.getElementById('color');

// Funcion para generar el color hexadecimal aleatorio
function generarColorAleatorio() {
    let digitos = '0123456789ABCDEF';
    let colorHex = '#';

    for (let i = 0; i < 6; i++) {
        let aleatorio = Math.floor(Math.random() * 16);
        colorHex += digitos[aleatorio];    
    }

    return colorHex
}

// Funcion para mostrar los cambios en el HTML 
function cambiarColor() {
    // Variable para llamar la funcion anterior
    let colorGenerado = generarColorAleatorio();
    // De la etiqueta p tomamos su contenido del texto
    color.textContent = colorGenerado;
    // Ejecutamos dicho color generado por la funcion en el body
    document.body.style.backgroundColor = colorGenerado; 
}

boton.addEventListener('click', cambiarColor);
