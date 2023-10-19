var workoutSelect = document.getElementById("workoutSelect");
var durationInput = document.getElementById("durationInput");
var startButton = document.getElementById("start");
var pauseButton = document.getElementById("pause");
var endButton = document.getElementById("end");
var timer = document.getElementById("timer");
var cong = document.getElementById("cong");

let workoutInterval;
let isPaused = false;
let totalTime = 0;

function startWorkout() {
  const workoutName = workoutSelect.value;
  const duration = parseInt(durationInput.value, 10);
  if (!workoutName || isNaN(duration) || duration <= 0 || duration < 30) {
    alert("Please select a workout and enter a valid duration");
    return;
  }

  clearInterval(workoutInterval);
  totalTime = duration;
  workoutSelect.disabled = true;
  durationInput.disabled = true;
  startButton.disabled = true;
  pauseButton.disabled = false;
  endButton.disabled = false;

  workoutInterval = setInterval(function () {
    if (!isPaused) {
      totalTime--;
      if (totalTime <= 0) {
        endWorkout();
      }
      updateTimer();
    }
  }, 1000);
  updateTimer();
}

function pauseWorkout() {
  isPaused = !isPaused;
  pauseButton.textContent = isPaused ? "Resume" : "Pause";
}
function endWorkout() {
  clearInterval(workoutInterval);
  workoutSelect.disabled = false;
  durationInput.disabled = false;
  startButton.disabled = false;
  pauseButton.disabled = true;
  endButton.disabled = true;
  workoutSelect.value = "";
  durationInput.value = "";
  workoutSelect.focus();
  timer.textContent = "Workout Complete!";
}

function updateTimer() {
  const minutes = Math.floor(totalTime / 60);
  const seconds = totalTime % 60;
  timer.textContent = `${minutes.toString().padStart(2, "0")} : ${seconds
    .toString()
    .padStart(2, "0")}`;
}
startButton.addEventListener("click", function () {
  startWorkout();
});
pauseButton.addEventListener("click", function () {
  pauseWorkout();
});
endButton.addEventListener("click", function () {
  endWorkout();
});

//2nd
var workoutSelect2 = document.getElementById("workoutSelect2");
var durationInput2 = document.getElementById("durationInput2");
var startButton2 = document.getElementById("start2");
var pauseButton2 = document.getElementById("pause2");
var endButton2 = document.getElementById("end2");
var timerElement = document.getElementById("timer2");

let workoutInterval2;
let isPaused2 = false;
let totalTime2 = 0;

function startWorkout2() {
  const workoutName2 = workoutSelect2.value;
  const duration2 = parseInt(durationInput2.value, 10);
  if (!workoutName2 || isNaN(duration2) || duration2 <= 0) {
    alert("Please select a workout and enter a valid duration");
    return;
  }

  clearInterval(workoutInterval2);
  totalTime2 = duration2;
  workoutSelect2.disabled = true;
  durationInput2.disabled = true;
  startButton2.disabled = true;
  pauseButton2.disabled = false;
  endButton2.disabled = false;

  workoutInterval2 = setInterval(function () {
    if (!isPaused2) {
      totalTime2--;
      if (totalTime2 <= 0) {
        endWorkout2();
      }
      updateWorkout();
    }
  }, 1000);
  updateWorkout();
}
function pauseWorkout2() {
  isPaused2 = !isPaused2;
  pauseButton2.textContent = isPaused2 ? "Resume" : "Pause";
}
function endWorkout2() {
  clearInterval(workoutInterval2);
  workoutSelect2.disabled = true;
  durationInput2.disabled = true;
  startButton2.disabled = true;
  pauseButton2.disabled = false;
  endButton2.disabled = false;
  workoutSelect2.value = "";
  durationInput2.value = "";
  workoutSelect2.focus();
  timerElement.textContent = "WORKOUT COMPLETE";
}
function updateWorkout() {
  const minutes2 = Math.floor(totalTime2 / 60);
  const seconds2 = totalTime2 % 60;
  timerElement.textContent = `${minutes2
    .toString()
    .padStart(2, "0")} : ${seconds2.toString().padStart(2, "0")}`;
}
startButton2.addEventListener("click", function () {
  startWorkout2();
});
pauseButton2.addEventListener("click", function () {
  endWorkout2();
});
endButton2.addEventListener("click", function () {
  endWorkout2();
});
