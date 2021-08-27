const timer = document.querySelector('#timer');
const playBtn = document.querySelector('.play__btn');
const cancelBtn = document.querySelector('.cancel__btn');
let icon = document.querySelector('.timer__controls i');
let secCircle = document.querySelector('.sec__circle');
let hr = 0;
let min = 0;
let sec = 0;
let stoptime = true;

playBtn.addEventListener('click', playpauseTimer);
cancelBtn.addEventListener('click', resetTimer);

function playpauseTimer() {
    if (stoptime) {
        stoptime = false;
        timerCycle();
        icon.setAttribute('class', 'uil uil-pause');
    } else {
        stoptime = true;
        icon.setAttribute('class', 'uil uil-play');
    }
}

function resetTimer() {
    timer.innerHTML = '00:00:00';
    stoptime = true;
    hr = 0;
    sec = 0;
    min = 0;
}

setInterval(function () {
    secCircle.style.transform = `rotate(${6*sec}deg)`
}, 1000);

function timerCycle() {
    if (stoptime === false) {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);
        sec = sec + 1;
        if (sec === 60) {
            min = min + 1;
            sec = 0;
        }
        if (min === 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }
        if (sec < 10 || sec === 0) {
            sec = '0' + sec;
        }
        if (min < 10 || min === 0) {
            min = '0' + min;
        }
        if (hr < 10 || hr === 0) {
            hr = '0' + hr;
        }
        timer.innerHTML = hr + ':' + min + ':' + sec;
        setTimeout("timerCycle()", 1000);
    }
}

