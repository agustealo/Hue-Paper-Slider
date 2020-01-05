/**
 * Hue Paper Slider
 * By Agustealo
 * URI www.agustealo.com
 * GitHub https://github.com/agustealo/Hue-Paper-Slider
 * Lightweight, dependency free, yet riched with features you'd expect form a premium slider
 * 
 */
var time = 4000;
var hueIndex = 0;
var slides, indicators, i,c=0;

hueSlider();// Fire hueSlider function to begin playing slides

// The main function, gets slides ready for business
function hueSlider() {
  var i;
  slides = document.getElementsByClassName("hue-slide-item"); // Main class to get things going, all slides are found using this tag.
  indicators = document.getElementsByClassName("indicator");  // Searches for empty div with the .indicator class, this will later be populated.
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // All none active slide (.hue-slide-item) will have a display of none to hide visibility
  }
  hueIndex++;
  if (hueIndex > slides.length) {
    hueIndex = 1; // Make sure the index begins at 1.
  }
  slides[hueIndex - 1].style.display = "block"; // Make current slide visible
  // Setup counter display
  document.getElementsByClassName("counter")[0].innerText = hueIndex + " / " + slides.length; // Show slide count, ie. [1/3]
  
  // Setup the indicator
  for (i = 0; i < indicators.length; i++) { 
    indicators[i].className = indicators[i].className.replace(" active", ""); // Remove .active from all indicator tags. 
  }
  var indicatorItems = document.getElementById("indicator-wrapper");
  c++;
  if (c<slides.length){ // Condition makes sure indicator count isn't more than the amount of slides in slider.
      if (c>0){c=0} // If count is grater than 0 make it 0, this is used for the "onclick" ID for indicateSlidePosition() function
  for (i = 0; i < slides.length; i++) { // Time to populate the indicator, but only once.
      c++;
      if (c==1){ indicators.className += " active"; } // On first loop only, add "active" once to the first indicator's tagg, indicating first active slide
      indicatorItems.innerHTML += '<span class="indicator" onclick="indicateSlidePosition(' + c + ')">&#9635;</span>'; // Add indicator's html stuff for each slide
  }
}
  indicators[hueIndex - 1].className += " active";
  setTimeout(hueSlider, time); // Adds autoplay feature to slide
}

// Next, Previous, and Text display counter
function selectHueSlides(position) {
  hueIndex += position;
  if (hueIndex > slides.length) {
    hueIndex = 1;
  } else if (hueIndex < 1) {
    hueIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < indicators.length; i++) {
    indicators[i].className = indicators[i].className.replace(" active", "");
  }
  slides[hueIndex - 1].style.display = "block";
  document.getElementsByClassName("counter")[0].innerText = hueIndex + " / " + slides.length;// Display's the total slides and show the current position
  indicators[hueIndex - 1].className += " active";
}

// The Indicator
function indicateSlidePosition(index) {
  if (index > slides.length) {
    index = 1;// Makes sure index begins at #1
  } else if (index < 1) {
    index = slides.length;// If total index count is less than one then index equal total length of slide
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";// Hide none active slides
  }
  for (i = 0; i < indicators.length; i++) {
    indicators[i].className = indicators[i].className.replace(" active", "");// Indicators resets to regular state for none active slides
  }
  slides[index - 1].style.display = "block";// Display active slide
  indicators[index - 1].className += " active";// Indicates slide is active & curently being displayed
}
