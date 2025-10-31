const puntos = localStorage.getItem("puntosFinales") || 0;
const tiempo = localStorage.getItem("tiempoRestante") || 0;
const mensajeFinal = document.getElementById("mensajeFinal");

document.getElementById("puntosHTML").textContent = puntos;
document.getElementById("tiempoHTML").textContent = tiempo;
document.getElementById('result').addEventListener('click', () => {
  window.location.href = "../html/bienvenida.html";
});
document.getElementById('salir').addEventListener('click', () => {
    window.location.href = "../index.html";
});

if (puntos >= 5) {
    mensajeFinal.textContent = "🏆 ¡Victoria! Eres un maestro atrapando manzanas 🍎";
  } else {
    mensajeFinal.textContent = "💀 ¡Derrota! Se te escaparon muchas manzanas 😢";
  }