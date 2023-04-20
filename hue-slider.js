const slides = document.querySelectorAll(".hue-slide-item");
const indicatorsWrapper = document.getElementById("indicator-wrapper");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const counter = document.querySelector(".hue-counter");
const linkButtons = document.querySelectorAll(".hue-button");

let hueIndex = 0;
let intervalId;

function selectHueSlides(position) {
  hueIndex += position;
  if (hueIndex >= slides.length) {
    hueIndex = 0;
  } else if (hueIndex < 0) {
    hueIndex = slides.length - 1;
  }
  showHueSlide();
}

function indicateSlidePosition(index) {
  hueIndex = index;
  showHueSlide();
}

function showHueSlide() {
  for (const slide of slides) {
    slide.classList.remove("active");
  }
  slides[hueIndex].classList.add("active");

  for (const indicator of indicatorsWrapper.children) {
    indicator.classList.remove("active");
  }
  indicatorsWrapper.children[hueIndex].classList.add("active");

  counter.textContent = `${hueIndex + 1} / ${slides.length}`;
}

function startHueSlider() {
  intervalId = setInterval(() => {
    selectHueSlides(1);
  }, 4000);
}

function stopHueSlider() {
  clearInterval(intervalId);
}

prevButton.addEventListener("click
