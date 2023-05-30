var stopwatchInterval;
var timerInterval;
var stopwatchTime = 0;
var timerTime = 0;

function startStopwatch() {
  stopwatchInterval = setInterval(updateStopwatch, 1000);
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
}

function resetStopwatch() {
  stopwatchTime = 0;
  document.getElementById("stopwatch").innerHTML = "00:00:00";
}

function updateStopwatch() {
  stopwatchTime++;
  var hours = Math.floor(stopwatchTime / 3600);
  var minutes = Math.floor((stopwatchTime - (hours * 3600)) / 60);
  var seconds = stopwatchTime - (hours * 3600) - (minutes * 60);
  document.getElementById("stopwatch").innerHTML = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

function startTimer() {
  var inputTime = document.getElementById("timer-input").value;
  if (inputTime && !isNaN(inputTime) && inputTime > 0) {
    timerTime = inputTime;
    timerInterval = setInterval(updateTimer, 1000);
  } else {
    alert("Please enter a valid time in seconds.");
  }
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  document.getElementById("timer-input").value = "";
  timerTime = 0;
  document.getElementById("timer").innerHTML = "00:00:00";
}

function updateTimer() {
  if (timerTime > 0) {
    timerTime--;
    var hours = Math.floor(timerTime / 3600);
    var minutes = Math.floor((timerTime - (hours * 3600)) / 60);
    var seconds = timerTime - (hours * 3600) - (minutes * 60);
    document.getElementById("timer").innerHTML = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
  } else {
    stopTimer();
    alert("Timer finished!");
  }
}

function formatTime(time) {
  return (time < 10) ? "0" + time : time;
}