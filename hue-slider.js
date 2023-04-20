const slides = Array.from(document.querySelectorAll(".hue-slide-item"));
const indicatorsWrapper = document.getElementById("indicator-wrapper");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const counter = document.querySelector(".hue-counter");
const linkButtons = Array.from(document.querySelectorAll(".hue-button"));

let hueIndex = 0;
let intervalId;

function selectHueSlides(position) {
  hueIndex = (hueIndex + position + slides.length) % slides.length;
  showHueSlide();
}

function indicateSlidePosition(index) {
  hueIndex = index;
  showHueSlide();
}

function showHueSlide() {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[hueIndex].classList.add("active");

  Array.from(indicatorsWrapper.children).forEach((indicator) =>
    indicator.classList.remove("active")
  );
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

prevButton.addEventListener("click", () => selectHueSlides(-1));
nextButton.addEventListener("click", () => selectHueSlides(1));
linkButtons.forEach((button) =>
  button.addEventListener("click", (event) => {
    event.preventDefault();
    indicateSlidePosition(linkButtons.indexOf(button));
  })
);

startHueSlider();
