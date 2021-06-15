// intialize values
let [milliseconds, seconds, minutes, hours] = [000, 00, 00, 00];

// get display text
let msDisplay = document.getElementById("milliseconds");
let secondsDisplay = document.getElementById("seconds");
let minutesDisplay = document.getElementById("minutes");
let hoursDisplay = document.getElementById("hours");

// interval variable
let interval;

// function runs inside setInterval
function displayTimer() {
  milliseconds += 10;

  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  // convert integer into text to display
  // if number is single digit then add 0
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms =
    milliseconds < 10
      ? "00" + milliseconds
      : milliseconds < 100
      ? "0" + milliseconds
      : milliseconds;

  // appends display
  msDisplay.innerHTML = ms;
  secondsDisplay.innerHTML = s;
  minutesDisplay.innerHTML = m;
  hoursDisplay.innerHTML = h;
}

// implemented start button
document.getElementById("button-start").addEventListener("click", () => {
  // call displayTimer
  interval = setInterval(displayTimer, 10);
});

// implemented stop button
document.getElementById("button-stop").addEventListener("click", () => {
  clearInterval(interval);
});

// implemented reset button
document.getElementById("button-reset").addEventListener("click", () => {
  // reset and reintialize every values
  clearInterval(interval);

  [milliseconds, seconds, minutes, hours] = [000, 00, 00, 00];

  msDisplay.innerHTML = "000";
  secondsDisplay.innerHTML = "00";
  minutesDisplay.innerHTML = "00";
  hoursDisplay.innerHTML = "00";
});
