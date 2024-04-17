// Capturamos todos los datos enviados desde el HTML

const display = document.querySelector('#display')

const botones = document.querySelectorAll('button')

botones.forEach((item) =>{
    item.onclick = () => {
        if (item.id == "limpiar"){
            display.innerText = "";
        }
        else if (item.id == "borrar"){
            let string = display.innerText.toString();
            display.innerText = string.substring(0, string.length-1);
        }
        else if (item.id == "igual" && display.innerText !=""){
            display.innerText = eval(display.innerText);
        }
        else if (item.id == "igual" && display.innerText ==""){
            display.innerText = "Null";
            setTimeout(() => (display.innerText = ""),2000);
        }
        else {
            display.innerText += item.id;
        }
    }
})

