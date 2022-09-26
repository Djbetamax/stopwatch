let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');
let miliseconds = document.querySelector('.miliSeconds');

document.querySelector('.start').addEventListener('click', () => {
  if (int !== null) {
    clearInterval(int);
  } int = setInterval(timer, 10);
});

document.querySelector('.pause').addEventListener('click', () => {
  clearInterval(int);
})

document.querySelector('.stop').addEventListener('click', () => {
  clearInterval(int);
  [ miliOut, secOut, minOut, hOut ] = [0, 0, 0, 0];
  hours.innerHTML =  "00";
  minutes.innerHTML = "00";
  seconds.innerHTML = "00";
  miliseconds.innerHTML = "0";
});

let [ miliOut, secOut, minOut, hOut ] = [ 0, 0, 0, 0 ];
let int = null;

function timer() {
  miliOut += 1;
  if ( miliOut == 100 ) {
    miliOut = 0;
    secOut++;

    if (secOut == 60) {
      secOut = 0;
      minOut++;

      if (minOut == 60) {
        minOut = 0;
        hOut++;
      }
    }
  }
  let h = hOut + "0";
  let m = minOut < 10 ? "0" + minOut : minOut;
  let s = secOut < 10 ? "0" + secOut : secOut;
  let ms = miliOut < 10 ? "0" + miliOut : miliOut < 100 ? miliOut : miliOut;

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  miliseconds.innerHTML = ms;
}
