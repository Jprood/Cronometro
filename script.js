const minutsEl = document.querySelector("#minutos")
const secondsEl = document.querySelector("#segundos")
const millisecondsEl = document.querySelector("#milissegundos")
const startbtn = document.querySelector("#iniciar")
const pausebtn = document.querySelector("#pausar")
const resumebtn = document.querySelector("#continuar")
const resetebtn = document.querySelector("#resetar")

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

startbtn.addEventListener("click", starTimer);
pausebtn.addEventListener("click", pauseTimer);
resumebtn.addEventListener("click", resumeTimer);
resetebtn.addEventListener("click", reseteTimer);

function starTimer() {
    interval = setInterval(() => {

        if(!isPaused) {

            milliseconds += 10

            if(milliseconds === 1000) {
                seconds++;
                milliseconds = 0
            }

            if(seconds === 60) {
                minutes++;
                seconds = 0;
            }

            minutsEl.textContent = formatTime(minutes);
            secondsEl.textContent = formatTime(seconds);
            millisecondsEl.textContent = formatmilliseconds(milliseconds);
        }
    }, 10);

    startbtn.style.display = "none";
    pausebtn.style.display = "block"
}

function pauseTimer() {
    isPaused = true
    pausebtn.style.display = "none";
    resumebtn.style.display = "block";
}

function resumeTimer() {
    isPaused = false
    pausebtn.style.display = "block";
    resumebtn.style.display = "none";
}
function reseteTimer() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    minutsEl.textContent = "00";
    secondsEl.textContent = "00";
    millisecondsEl.textContent = "000";

    startbtn.style.display = "block"
    pausebtn.style.display = "none";
    resumebtn.style.display = "none";
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}


function formatmilliseconds(time) {
    return time <100 ? `${time}`.padStart(3, "0") : time;
}