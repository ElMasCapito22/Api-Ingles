/*const sentences = [
    { spanish: "Mi nombre es avila", english: "my name is avila", hint: "my name is avila" },

];

let currentSentence = {};
let wordsInOrder = [];
let selectedWords = new Set();
let rounds = 10;
let score = 0;

function selectSentence() {
    if (rounds <= 0) {
        document.getElementById("feedback").innerText = `Juego terminado. Tu puntuación es: ${score}`;
        document.getElementById("words-container").innerHTML = "";
        document.getElementById("sentence-output").innerHTML = "";
        return;
    }

    currentSentence = sentences[Math.floor(Math.random() * sentences.length)];
    const wordsArray = currentSentence.english.split(' ');
    wordsInOrder = Array(wordsArray.length).fill(null); // Placeholder for selected words

    const shuffledWords = shuffleArray(wordsArray);

    document.getElementById("sentence-spanish").innerText = currentSentence.spanish;
    document.getElementById("words-container").innerHTML = shuffledWords.map(word => 
        `<button class="word-button" onclick="addWord('${word}')">${word}</button>`
    ).join(" ");
    document.getElementById("feedback").innerText = "";
    document.getElementById("rounds").innerText = `Rondas restantes: ${rounds}`;
    document.getElementById("score").innerText = `Puntuación: ${score}`;
    document.getElementById("sentence-output").innerHTML = ""; // Clear the sentence output
    selectedWords.clear(); // Clear the set of selected words
}

function addWord(word) {
    if (selectedWords.has(word)) {
        removeWord(word);
        return;
    }

    const sentenceOutput = document.getElementById("sentence-output");
    const wordSpan = document.createElement("span");
    wordSpan.textContent = word;
    wordSpan.className = "ticked";
    wordSpan.onclick = () => removeWord(word);
    sentenceOutput.appendChild(wordSpan);
    
    // Find the index of the word and mark it as used
    const index = currentSentence.english.split(' ').indexOf(word);
    if (index !== -1) {
        wordsInOrder[index] = word;
    }

    // Disable and style the button
    const button = Array.from(document.querySelectorAll("#words-container .word-button"))
                        .find(btn => btn.textContent === word);
    if (button) {
        button.classList.add('ticked');
        button.disabled = true;
    }

    // Check if the sentence is complete
    if (wordsInOrder.every(word => word !== null)) {
        checkSentence();
    }
}

function removeWord(word) {
    const sentenceOutput = document.getElementById("sentence-output");
    const wordSpan = Array.from(sentenceOutput.children)
                          .find(span => span.textContent === word);
    if (wordSpan) {
        sentenceOutput.removeChild(wordSpan);
        
        // Find the word to remove and mark it as unused
        const index = currentSentence.english.split(' ').indexOf(word);
        if (index !== -1) {
            wordsInOrder[index] = null;
        }

        // Re-enable the button
        const button = Array.from(document.querySelectorAll("#words-container .word-button"))
                            .find(btn => btn.textContent === word);
        if (button) {
            button.classList.remove('ticked');
            button.disabled = false;
        }

        selectedWords.delete(word);
    }
}

function checkSentence() {
    const userSentence = document.getElementById("sentence-output").textContent.trim().toLowerCase();
    const correctSentence = currentSentence.spanish.toLowerCase();

    if (userSentence == correctSentence) {
        document.getElementById("feedback").innerText = "¡Correcto!";
        document.getElementById("feedback").className = "correct";
        score++;
    } else {
        document.getElementById("feedback").innerText = "Incorrecto. Inténtalo de nuevo.";
        document.getElementById("feedback").className = "incorrect";
    }

    rounds--;
    setTimeout(selectSentence, 2000);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

++window.onload = selectSentence;*/


const sentences = [
    { spanish: "Mi nombre es avila", english: "my name is avila", hint: "my name is avila" }
];

let currentSentence = {};
let wordsInOrder = [];
let selectedWords = new Set();
let rounds = 10;
let score = 0;

function selectSentence() {
    if (rounds <= 0) {
        document.getElementById("feedback").innerText = `Juego terminado. Tu puntuación es: ${score}`;
        document.getElementById("words-container").innerHTML = "";
        document.getElementById("sentence-output").innerHTML = "";
        return;
    }

    currentSentence = sentences[Math.floor(Math.random() * sentences.length)];
    const wordsArray = currentSentence.english.split(' ');
    wordsInOrder = Array(wordsArray.length).fill(null); // Placeholder for selected words

    const shuffledWords = shuffleArray(wordsArray);

    document.getElementById("sentence-spanish").innerText = currentSentence.spanish;
    document.getElementById("words-container").innerHTML = shuffledWords.map(word => 
        `<button class="word-button" onclick="addWord('${word}')">${word}</button>`
    ).join(" ");
    document.getElementById("feedback").innerText = "";
    document.getElementById("rounds").innerText = `Rondas restantes: ${rounds}`;
    document.getElementById("score").innerText = `Puntuación: ${score}`;
    document.getElementById("sentence-output").innerHTML = ""; // Clear the sentence output
    selectedWords.clear(); // Clear the set of selected words
}

function addWord(word) {
    if (selectedWords.has(word)) {
        removeWord(word);
        return;
    }

    const sentenceOutput = document.getElementById("sentence-output");
    const wordSpan = document.createElement("span");
    wordSpan.textContent = word;
    wordSpan.className = "ticked";
    wordSpan.onclick = () => removeWord(word);
    sentenceOutput.appendChild(wordSpan);
    
    // Find the index of the word and mark it as used
    const index = currentSentence.english.split(' ').indexOf(word);
    if (index !== -1) {
        wordsInOrder[index] = word;
    }

    // Disable and style the button
    const button = Array.from(document.querySelectorAll("#words-container .word-button"))
                        .find(btn => btn.textContent === word);
    if (button) {
        button.classList.add('ticked');
        button.disabled = true;
    }

    // Check if the sentence is complete
    if (wordsInOrder.every(word => word !== null)) {
        checkSentence();
    }
}

function removeWord(word) {
    const sentenceOutput = document.getElementById("sentence-output");
    const wordSpan = Array.from(sentenceOutput.children)
                          .find(span => span.textContent === word);
    if (wordSpan) {
        sentenceOutput.removeChild(wordSpan);
        
        // Find the word to remove and mark it as unused
        const index = currentSentence.english.split(' ').indexOf(word);
        if (index !== -1) {
            wordsInOrder[index] = null;
        }

        // Re-enable the button
        const button = Array.from(document.querySelectorAll("#words-container .word-button"))
                            .find(btn => btn.textContent === word);
        if (button) {
            button.classList.remove('ticked');
            button.disabled = false;
        }

        selectedWords.delete(word);
    }
}

function checkSentence() {
    const userSentence = document.getElementById("sentence-output").textContent.trim().toLowerCase();
    const correctSentence = currentSentence.english.toLowerCase(); // Correct sentence in English

    if (userSentence === correctSentence) {
        document.getElementById("feedback").innerText = "¡Correcto!";
        document.getElementById("feedback").className = "correct";
        score++;
    } else {
        document.getElementById("feedback").innerText = "Incorrecto. Inténtalo de nuevo.";
        document.getElementById("feedback").className = "incorrect";
    }

    rounds--;
    setTimeout(selectSentence, 2000);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

window.onload = selectSentence;
