let display = document.querySelector(".display");
let stopBtn = document.getElementById("stopBtn");
let startBtn = document.getElementById("startBtn");
let resetBtn = document.getElementById("resetBtn");

let msec = 0;
let secs = 0;
let mins = 0;

let timer = null;

startBtn.addEventListener("click", function () {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(startTimer, 10);
});

stopBtn.addEventListener("click", function () {
  clearInterval(timer);
});

resetBtn.addEventListener("click", function () {
  clearInterval(timer);
  display.innerHTML = `00 : 00 : 00`;
  msec = secs = mins = 0;
});

function startTimer() {
  msec++;
  if (msec == 100) {
    msec = 0;
    secs++;
    if (secs == 60) {
      secs = 0;
      mins++;
    }
  }

  let msecStr = msec < 10 ? `0${msec}` : msec;
  let secsStr = secs < 10 ? `0${secs}` : secs;
  let minsStr = mins < 10 ? `0${mins}` : mins;

  display.innerHTML = `${minsStr} : ${secsStr} : ${msecStr}`;
}
