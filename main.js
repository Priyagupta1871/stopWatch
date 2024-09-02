let hours = 0;
let seconds = 0;
let minutes = 0;
let isRunning = false;
let clock = null;

//getting all the elements
const strButton = document.getElementById('startBtn');
const stopButton = document.getElementById('stopBtn');
const resetButton = document.getElementById('resetBtn');
const displayEle = document.getElementById('display');

//Click Events
// strButton.addEventListener('click', startWatch);
strButton.addEventListener('click', startWatch);
stopButton.addEventListener('click', stopWatch);
resetButton.addEventListener('click', resetWatch);

//function for starting the timer
function startWatch(){
    if(!isRunning){
        isRunning = true;
        clock = setInterval(updateTime, 1000);
        strButton.disabled = true;
        stopButton.disabled = false;
        resetButton.disabled = false;
    }
}

//function for stoping the timer
function stopWatch(){
    if(isRunning){
        clearInterval(clock);
        isRunning = false;
        strButton.disabled = false;
        stopButton.disabled = true;
        resetButton.disabled = false;
    }
}

//function for resetting the timer
function resetWatch(){
    clearInterval(clock);
    isRunning = false;
    hours = 0;
    seconds = 0;
    minutes = 0;
    displayEle.textContent = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
    resetButton.disabled = true;
    stopButton.disabled = true;
    strButton.disabled = false;
}


//update timer function
function updateTime(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }
    //console.log(updateTime);
    displayEle.textContent = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);

}



function formatTime(time) {
    return time < 10 ? "0" + time : time;
}