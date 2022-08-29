let startstopbtn = document.getElementById('playstopbtn');
let resetbtn = document.getElementById('resetbtn');



let seconds = 0;
let minutes = 0;
let hour = 0;


// variable for leading zeros

let leadingSec = 0;
let leadingMin = 0;
let leadingHour = 0;

let timeInterval = null;
let timerStatus = "stopped";

function stopwatch(){
    seconds++;

    if (seconds / 60 === 1){
        seconds=0;
        minutes++

        if (minutes / 60 === 1){
            minutes=0;
            hour++
        }
    }

    if (seconds < 10){
        leadingSec = "0" + seconds.toString();
    }else{
        leadingSec = seconds;
    }

    if (minutes < 10){
        leadingMin = "0" + minutes.toString();
    }else{
        leadingMin = minutes;
    }

    if (hour < 10){
        leadingHour = "0" + hour.toString();
    }else{
        leadingHour = hour;
    }

    let timer = document.getElementById('timer').innerText = leadingHour + ":" + leadingMin + ":" + leadingSec
    console.log(timer)
}



startstopbtn.addEventListener('click',function(){
    if (timerStatus === 'stopped'){
        timeInterval = window.setInterval(stopwatch,1000);
        document.getElementById('playstopbtn').innerHTML = `<i class='bx bx-pause' id="pausebtn"></i>`;
        timerStatus = "started";
    }else{
        window.clearInterval(timeInterval);
        document.getElementById('playstopbtn').innerHTML = `<i class='bx bx-play' id="play" ></i>`;
        timerStatus = "stopped";
    }
});


function reset(){
    window.clearInterval(timeInterval);
    seconds = 0;
    minutes = 0
    hour = 0;

    document.getElementById('timer').innerHTML = "00:00:00";
    document.getElementById('playstopbtn').innerHTML = `<i class='bx bx-play' id="play" ></i>`;
    timerStatus = "stopped";
}

resetbtn.addEventListener('click', reset);
