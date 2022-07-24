let clock_digital = document.getElementById("clock-digital");
let hourse_hand = document.getElementById("hour-hand");
let minute_hand = document.getElementById("minute-hand");
let second_hand = document.getElementById("second-hand");
function showClock() {
  let date = new Date();
  let hourse = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let hourseWithZero = "0" + hourse;
  let minutesWithZero = "0" + minutes;
  let secondsWithZero = "0" + seconds;
  let h = 360 / 12;
  let m = 360 / 60;
  let s = 360 / 60;
  let hourseDeg = hourse * h + minutes / 2;
  let minuteDeg = minutes * m;
  let secondDeg = seconds * s;
  hourse_hand.setAttribute("style", `transform :rotate(${hourseDeg}deg)`);
  minute_hand.setAttribute("style", `transform :rotate(${minuteDeg}deg)`);
  second_hand.setAttribute("style", `transform :rotate(${secondDeg}deg)`);
  clock_digital.innerHTML =
    hourseWithZero.slice(-2) +
    ":" +
    minutesWithZero.slice(-2) +
    ":" +
    secondsWithZero.slice(-2);
}
setInterval(showClock, 1000);
