let display = document.querySelector("#display");
let startBtn = document.querySelector("#start")
let stopBtn = document.querySelector("#stop")
let resetBtn = document.querySelector("#reset")

let ms = 0, s = 0, m = 0, h = 0;
let timer = null;

function runStopwatch() {
    ms++
    if (ms == 100) ms = 0, s++;

    if (s == 60) s = 0, m++;

    if (m == 60) m = 0, h++;

    let hour = h < 10 ? "0" + h: h;
    let min = m < 10 ? "0" + m: m;
    let sec = s < 10 ? "0" + s: s;
    let milliSec = ms < 10 ? "0" + ms: ms;

    display.textContent =  `${hour}:${min}:${sec}:${milliSec}`;
}

startBtn.addEventListener("click", () => {
    if(timer == null) {
        timer = setInterval(() => {
            runStopwatch()
        }, 10);
    }
})

stopBtn.addEventListener("click", () => {
        clearInterval(timer);
        timer = null;
})

resetBtn.addEventListener("click", () => {
        clearInterval(timer);
        timer = null;
        ms = 0;
        s = 0;
        m = 0;
        h = 0;
        display.textContent = "00:00:00"
})





