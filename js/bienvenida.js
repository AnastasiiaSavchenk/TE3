var btnP = document.getElementById('btnP');
var btnI = document.getElementById('btnI');
var btnA = document.getElementById('btnA');
var nivelSeleccionado = null;

btnP.onclick = function() {
    resetearColores();
    btnP.style.backgroundColor = "blue";
    nivelSeleccionado = "principiante";
};

btnI.onclick = function() {
    resetearColores();
    btnI.style.backgroundColor = "orange";
    nivelSeleccionado = "intermedio";
};

btnA.onclick = function() {
    resetearColores();
    btnA.style.backgroundColor = "red";
    nivelSeleccionado = "avanzado";
};

function resetearColores() {
    btnP.style.backgroundColor = "mediumturquoise";
    btnI.style.backgroundColor = "mediumturquoise";
    btnA.style.backgroundColor = "mediumturquoise";
}

document.getElementById('comenzar').onclick = function() {
    if (!nivelSeleccionado) {
        alert("Selecciona un nivel antes de comenzar.");
        return;
    }

    if (nivelSeleccionado === "principiante") {
        window.location.href = "../html/principiante.html";
    } else if (nivelSeleccionado === "intermedio") {
        window.location.href = "../html/intermedio.html";
    } else if (nivelSeleccionado === "avanzado") {
        window.location.href = "../html/avanzado.html";
    }
};