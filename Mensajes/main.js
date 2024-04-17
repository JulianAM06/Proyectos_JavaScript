let boton = document.getElementById('boton');

let mensaje = document.getElementById('mensaje');

let autor = document.getElementById('autor');

function generarEnteroAleatorio (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function cambiarCita () {
    let indiceAleatorio = generarEnteroAleatorio(0, mensajes.length);
    mensaje.innerText = `"${mensajes[indiceAleatorio].texto}"`;
    autor.innerText = mensajes[indiceAleatorio].autor;
}

cambiarCita();

boton.addEventListener('click', cambiarCita);