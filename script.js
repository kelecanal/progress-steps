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
  update();
});

previous.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

function update() {
  //in each circle, if the index is less than the current active, then add class of 'active' to element
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  //we want to target all actives
  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  //check if the current active is = 1, disable previous button
  if (currentActive === 1) {
    previous.disabled = true;
    //if the current active is at the end, (total end of circles.length), disable 'next' button
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    previous.disabled = false;
    next.disabled = false;
  }
}
