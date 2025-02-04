const container = document.getElementById('corazones-container');

function crearCorazon() {
    const corazon = document.createElement('div');
    corazon.classList.add('corazon');
    corazon.textContent = '❤️';

    // Asigna una posición aleatoria horizontalmente
    corazon.style.left = `${Math.random() * 100}%`;

    // Asigna una duración aleatoria de la animación (3 a 5 segundos)
    corazon.style.animationDuration = `${Math.random() * 2 + 3}s`;

    container.appendChild(corazon);

    // Elimina el corazón después de que termine la animación
    setTimeout(() => {
        corazon.remove();
    }, 5000);  // coincide con el tiempo de duración de la animación
}

// Crear un corazón cada 0.5 segundos
setInterval(crearCorazon, 500);
