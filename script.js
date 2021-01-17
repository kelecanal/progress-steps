const progress = document.getElementById("progress");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;

  //console.log(currentActive);

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
});

previous.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }
});
