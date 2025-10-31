const cesta = document.querySelector(".cesta");
const manzanasCont = document.querySelector(".manzanas");
const times = document.getElementById('times');
const puntosHTML = document.getElementById('puntos');
const perdidasHTML = document.getElementById('perdidas');
const vidasHTML = document.getElementById('vidas');
const audioPillar = document.getElementById('audioPillar');
const audioPerder = document.getElementById('audioPerder');
const gameOverAudio = document.getElementById('gameOver');

let cestaLeft = parseInt(window.getComputedStyle(cesta).getPropertyValue("left"));
let cestaBottom = parseInt(window.getComputedStyle(cesta).getPropertyValue("bottom"));

let second = 45;
let tiempoInicial = 45;
let tiempoJugado = 0;
let puntos = 0;
let perdidas = 0;
let vidas = 3;

let enPausa = false;
let gameOverActivo = false;

let manzanaInterval;
let tiempoGenerar;
let frutaActual;

const timer = setInterval(() => {
    if(!enPausa && !gameOverActivo){
        second--;
        times.textContent = second;
    }
    tiempoJugado = tiempoInicial - second;
    if(second==0){ 
        tiempoJugado = tiempoInicial;
        finalizarJuego();
    }
}, 1000);

document.addEventListener('keyup', e => {
    if(e.code === 'Space' && !gameOverActivo){
        enPausa = !enPausa;
    }
});

document.addEventListener('keydown', e => {
    if(e.key === 'ArrowLeft' && cestaLeft > 45) {
        cestaLeft -= 25;
        cesta.style.left = cestaLeft + 'px';
    } else if(e.key === 'ArrowRight' && cestaLeft < 1050) {
        cestaLeft += 25;
        cesta.style.left = cestaLeft + 'px';
    }
});


function generarManzana(){
    frutaActual = document.createElement('div');
    frutaActual.className = 'fruta';
    frutaActual.style.left = Math.floor(Math.random()*1050) + 'px';
    let bottom = 470;
    frutaActual.style.bottom = bottom + 'px';
    manzanasCont.appendChild(frutaActual);

    manzanaInterval = setInterval(()=>{
        if(enPausa || gameOverActivo) return;

        bottom -= 12;
        frutaActual.style.bottom = bottom + 'px';

        if(bottom < cestaBottom + 50 && bottom > cestaBottom &&
           parseInt(frutaActual.style.left) > cestaLeft - 30 &&
           parseInt(frutaActual.style.left) < cestaLeft + 80){
            puntos++;
            puntosHTML.textContent = puntos;
            audioPillar.currentTime = 0;
            audioPillar.play();
            frutaActual.remove();
            clearInterval(manzanaInterval);
            tiempoGenerar = setTimeout(generarManzana, 2000);
        }

        if(bottom < 15){
            perdidas++;
            perdidasHTML.textContent = perdidas;
            audioPerder.currentTime = 0;
            audioPerder.play();

            vidas--;
            if(vidas >=0) vidasHTML.textContent = "❤️".repeat(vidas);

            frutaActual.remove();
            clearInterval(manzanaInterval);

            if(perdidas >= 3) finalizarJuego();
            else tiempoGenerar = setTimeout(generarManzana, 2000);
        }

    }, 50);
}

function finalizarJuego(){
    gameOverActivo = true;
    gameOverAudio.currentTime = 0;
    gameOverAudio.play();
    localStorage.setItem("puntosFinales", puntos);
    localStorage.setItem("tiempoRestante", tiempoJugado);
    clearInterval(timer);
    clearInterval(manzanaInterval);
    clearTimeout(tiempoGenerar);
    setTimeout(() => {
                    window.location.href = "../html/resultados.html";
                }, 2000);
}

document.getElementById('reiniciar').addEventListener('click', () => {
    window.location.href = "../html/bienvenida.html";
});

document.getElementById('fin').addEventListener('click', () => {
    finalizarJuego()
});

generarManzana();
