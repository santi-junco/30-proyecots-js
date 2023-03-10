const pressed = [];
const secretCode = 'santi';

window.addEventListener('keyup', (e) =>{
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    
    if (pressed.join('').includes(secretCode)){
        body = document.getElementById('body');
        h1 = document.createElement("h1");
        texto = document.createTextNode("Descubriste la clave secreta");
        h1.appendChild(texto)
        body.appendChild(h1);
    }
});