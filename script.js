let minutes = 0;
let seconds = 0;
let centiseconds = 0;
let timerInterval = null;
let isRunning = false;

const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const centisecondsDisplay = document.getElementById('centiseconds');
const startButton = document.querySelectorAll('.button')[1];
const stopButton = document.querySelectorAll('.button')[0];
const resetButton = document.querySelectorAll('.button')[2];

function updateTimer() {
    centiseconds++;
    if (centiseconds >= 100) {
        centiseconds = 0;
        seconds++;
    }
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }

    minutesDisplay.textContent = minutes < 10 ? '0' + minutes : minutes;
    secondsDisplay.textContent = seconds < 10 ? '0' + seconds : seconds;
    centisecondsDisplay.textContent = centiseconds < 10 ? '0' + centiseconds : centiseconds;
}

startButton.addEventListener('click', () => {
    if (!isRunning) {
        timerInterval = setInterval(updateTimer, 10); 
        isRunning = true;
    }
});

stopButton.addEventListener('click', () => {
    clearInterval(timerInterval); 
    isRunning = false;
});

resetButton.addEventListener('click', () => {
    clearInterval(timerInterval); 
    isRunning = false;
    minutes = 0;
    seconds = 0;
    centiseconds = 0;

    minutesDisplay.textContent = '00';
    secondsDisplay.textContent = '00';
    centisecondsDisplay.textContent = '00';
});
