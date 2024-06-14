const display = document.getElementById("display");
let time = null;
let startT = 0;
let elapsed = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
        startT = Date.now() - elapsed;
        time = setInterval(update, 10);
        isRunning = true;
    }
}

function stop() {
    if (isRunning) {
        clearInterval(time);
        elapsed = Date.now() - startT;
        isRunning = false;
    }
}

function reset() {
    display.textContent = "00:00:00:00";
    elapsed = 0;
    startT = 0;
    clearInterval(time);
    isRunning = false;
}

function update() {
    const currentTime = Date.now();
    elapsed = currentTime - startT;
    let hours = Math.floor(elapsed / (1000 * 60 * 60));
    let minutes = Math.floor((elapsed / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsed / 1000) % 60);
    let ms = Math.floor((elapsed % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    ms = String(ms).padStart(2, "0");
    display.textContent = `${hours}:${minutes}:${seconds}:${ms}`;
}
