function cambiarNegro(elemento, color = 'red') {
    elemento.style.backgroundColor = color;
}

const azul = document.getElementById("azul");
azul.addEventListener("click", function() {
    cambiarNegro(azul, 'black')
});

const rojo = document.getElementById("rojo");
rojo.addEventListener("click", function() {
    cambiarNegro(rojo, 'black')
});

const verde = document.getElementById("verde");
verde.addEventListener("click", function() {
    cambiarNegro(verde, 'black')
});

const amarillo = document.getElementById("amarillo");
amarillo.addEventListener("click", function() {
    cambiarNegro(amarillo, 'black')
});

const div = document.getElementById("key");
const body = document.querySelector("body");

document.addEventListener("keydown", function(event) {
    if (event.key === 'a') {
        div.style.backgroundColor = 'pink'
    }
    else if (event.key === 's') {
        div.style.backgroundColor = 'orange'
    }
    else if (event.key === 'd') {
        div.style.backgroundColor = 'skyblue'
    }
    else if (event.key === 'q') {
        const nuevoElemento = document.createElement('div');
        nuevoElemento.style.backgroundColor = 'purple';
        nuevoElemento.style.width = '200px';
        body.appendChild(nuevoElemento);
    }
    else if (event.key === 'w') {
        const nuevoElemento = document.createElement('div');
        nuevoElemento.style.backgroundColor = 'gray';
        nuevoElemento.style.width = '200px';
        body.appendChild(nuevoElemento);
    }
    else if (event.key === 'e') {
        const nuevoElemento = document.createElement('div');
        nuevoElemento.style.backgroundColor = 'brown';
        nuevoElemento.style.width = '200px';
        body.appendChild(nuevoElemento);
    }
});     
