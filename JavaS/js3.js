document.addEventListener('DOMContentLoaded', () => {
    const sentences = [
        { text: "Hello, how are you?", audioUrl: "../Audio/hello-how-are-you.mp3" },
        { text: "What is your name?", audioUrl: "../Audio/what-is-your-name.mp3" },
        // Agrega más oraciones y URLs de audio aquí
    ];

    const sentenceEl = document.getElementById('sentence');
    const startBtn = document.getElementById('start-btn');
    const nextRoundBtn = document.getElementById('next-round-btn');
    const feedbackContainer = document.getElementById('feedback-container');
    const statusEl = document.getElementById('status');
    const audioEl = document.getElementById('audio');
    const roundCountEl = document.getElementById('round-count');
    const errorSummary = document.getElementById('error-summary');
    const errorList = document.getElementById('error-list');

    let currentSentence = {};
    let currentRound = 0;
    const totalRounds = 10;
    let isRecording = false;
    let recognition = null;
    let errors = [];

    function getRandomSentence() {
        const index = Math.floor(Math.random() * sentences.length);
        return sentences[index];
    }

    function updateFeedback(transcript) {
        const sentenceWords = currentSentence.text.split(' ');
        const transcriptWords = transcript.split(' ');

        feedbackContainer.innerHTML = '';
        sentenceWords.forEach((word, index) => {
            const feedbackWord = document.createElement('span');
            feedbackWord.classList.add('feedback-word');
            if (transcriptWords[index] && transcriptWords[index].toLowerCase() === word.toLowerCase()) {
                feedbackWord.classList.add('correct');
            } else {
                feedbackWord.classList.add('incorrect');
                errors.push({ round: currentRound + 1, word }); // Guardar el error
            }
            feedbackWord.textContent = word + ' ';
            feedbackContainer.appendChild(feedbackWord);
        });
    }

    function startRecording() {
        if (isRecording) return; // No iniciar una nueva grabación si ya está en curso

        console.log('Starting recording...');
        isRecording = true;
        recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = 'en-US';
        recognition.interimResults = true; // Permite resultados intermedios
        recognition.maxAlternatives = 1;

        recognition.onresult = (event) => {
            console.log('Speech result:', event.results);
            let transcript = '';
            for (let i = event.resultIndex; i < event.results.length; i++) {
                transcript += event.results[i][0].transcript;
            }

            updateFeedback(transcript);
        };

        recognition.onerror = (event) => {
            console.error('Speech Recognition Error:', event.error);
            statusEl.textContent = 'Error al reconocer la voz.';
            statusEl.style.color = 'red';
        };

        recognition.onend = () => {
            console.log('Speech recognition ended.');
            isRecording = false; // Asegúrate de que la grabación termine si se detiene
            if (feedbackContainer.querySelectorAll('.incorrect').length === 0) {
                statusEl.textContent = '¡Oración completa! Puedes pasar a la siguiente ronda.';
                statusEl.style.color = 'green';
                nextRoundBtn.disabled = false; // Habilitar el botón para pasar a la siguiente ronda
            }
        };

        recognition.start();
    }

    function startFinalRecording() {
        if (isRecording) return; // No iniciar una nueva grabación si ya está en curso

        console.log('Starting final recording...');
        isRecording = true;
        recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = 'en-US';
        recognition.interimResults = true; // Permite resultados intermedios
        recognition.maxAlternatives = 1;

        recognition.onresult = (event) => {
            console.log('Final speech result:', event.results);
            let transcript = '';
            for (let i = event.resultIndex; i < event.results.length; i++) {
                transcript += event.results[i][0].transcript;
            }

            updateFeedback(transcript);
        };

        recognition.onerror = (event) => {
            console.error('Speech Recognition Error:', event.error);
            statusEl.textContent = 'Error al reconocer la voz.';
            statusEl.style.color = 'red';
        };

        recognition.onend = () => {
            console.log('Final speech recognition ended.');
            isRecording = false; // Asegúrate de que la grabación termine si se detiene
            nextRoundBtn.disabled = false; // Habilitar el botón para pasar a la siguiente ronda
        };

        recognition.start();

        // Detener la grabación después de 5 segundos
        setTimeout(() => {
            if (isRecording) {
                recognition.stop();
            }
        }, 7000);
    }

    function showErrorSummary() {
        errorList.innerHTML = '';
        errors.forEach(error => {
            const li = document.createElement('li');
            li.textContent = `Ronda ${error.round}: Palabra Incorrecta - ${error.word}`;
            errorList.appendChild(li);
        });
        errorSummary.style.display = 'block';
    }

    function nextRound() {
        if (currentRound >= totalRounds) {
            statusEl.textContent = '¡Juego terminado! Has completado todas las rondas.';
            statusEl.style.color = 'black';
            startBtn.disabled = false;
            nextRoundBtn.disabled = true; // Deshabilitar el botón al final del juego
            showErrorSummary(); // Mostrar resumen de errores
            return; // Salir de la función si ya no hay más rondas
        }

        currentSentence = getRandomSentence();
        sentenceEl.textContent = currentSentence.text;
        audioEl.src = currentSentence.audioUrl;

        // Intentar reproducir el audio
        audioEl.play().then(() => {
            console.log('Audio started playing');
        }).catch((error) => {
            console.error('Error playing audio:', error);
        });

        roundCountEl.textContent = `Ronda: ${currentRound + 1}/${totalRounds}`;
        nextRoundBtn.disabled = true; // Deshabilitar el botón hasta que la pronunciación sea correcta
        startRecording();
        
        // Después de 5 segundos, comenzar la grabación final
        setTimeout(() => {
            if (!isRecording) {
                startFinalRecording();
            }
        }, 5000);
    }

    startBtn.addEventListener('click', () => {
        console.log('Start button clicked');
        currentRound = 0;
        errors = []; // Resetear los errores al comenzar el juego
        startBtn.disabled = true;
        nextRound();
    });

    nextRoundBtn.addEventListener('click', () => {
        console.log('Next round button clicked');
        currentRound++;
        nextRound();
    });

    // Inicialmente deshabilitar el botón de siguiente ronda
    nextRoundBtn.disabled = true;
});
