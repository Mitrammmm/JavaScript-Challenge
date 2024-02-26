let timer;
let isPomodoro = true;
let isRunning = false;
let timeLeft;


//for startinf timer
function startTimer() {
    const pomodoroDuration = document.getElementById("pomodoroDuration").value * 60;
    const breakDuration = document.getElementById("breakDuration").value * 60;

    timeLeft = isPomodoro ? pomodoroDuration : breakDuration;

    clearInterval(timer); 
    timer = setInterval(updateTimer, 1000);
    toggleButtons(true);
    isRunning = true;
}

//for pause and resume {it was a headache!!}
function pauseResumeTimer() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("pauseButton").textContent = "Resume";
    } else {
        timer = setInterval(updateTimer, 1000);
        document.getElementById("pauseButton").textContent = "Pause";
    }
    isRunning = !isRunning;
}

//for reseting timer
function resetTimer() {
    clearInterval(timer);
    toggleButtons(false);
    isRunning = false;
    isPomodoro = true;
    startTimer(); // Start a new timer after reset
    updateDisplay();
}

//for updating timer
function updateTimer() {
    timeLeft--;

    if (timeLeft < 0) {
        clearInterval(timer);
        alert(isPomodoro ? "Pomodoro session ended. Take a break!" : "Break session ended. Start a new Pomodoro!");
        toggleButtons(false);
        isRunning = false;
        isPomodoro = !isPomodoro;
        startTimer();
    }

    updateDisplay();
}

//for displaying and providing updated result
function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    document.getElementById("timer").textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function toggleButtons(running) {
    document.getElementById("startButton").disabled = running;
    document.getElementById("pauseButton").disabled = !running;
    document.getElementById("resetButton").disabled = !running;
}

//for siwtching themes
function toggleTheme() {
    document.body.classList.toggle("dark-theme");
}