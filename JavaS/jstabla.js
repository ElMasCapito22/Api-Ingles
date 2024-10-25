/*
function playAudio(audioId) {
    const audio = document.getElementById(audioId);
    if (audio) {
        audio.play();
    }
}*/
/*/
function playAudio(audioId) {
    const audio = document.getElementById(audioId);
    if (audio) {
        // Para verificar que la función se llama
        audio.play().catch((error) => {
            console.error('Error al reproducir el audio:', error);
        });
    } else {
        console.error('No se encontró el audio con ID:', audioId);
    }
}*/
let currentlyPlaying = null; // Variable para rastrear el audio en reproducción

function playAudio(audioId) {
    const audio = document.getElementById(audioId);
    
    // Si hay un audio actualmente reproduciéndose, lo pausamos
    if (currentlyPlaying && currentlyPlaying !== audio) {
        currentlyPlaying.pause();
        currentlyPlaying.currentTime = 0; // Reiniciar el tiempo
    }
    
    if (audio) {
        audio.play().catch((error) => {
            console.error('Error al reproducir el audio:', error);
        });
        currentlyPlaying = audio; // Actualizar la referencia al audio actual
    } else {
        console.error('No se encontró el audio con ID:', audioId);
    }
}

// Función para parar el audio
function stopAudio() {
    if (currentlyPlaying) {
        currentlyPlaying.pause();
        currentlyPlaying.currentTime = 0; // Reiniciar el tiempo
        currentlyPlaying = null; // Limpiar la referencia
    }
}

// Añadir el evento al botón de parar
document.getElementById('stopButton').addEventListener('click', stopAudio);

