# HueMan-Slider
(Once, Hue Paper Slider)

![Paper Logo](../assets/Paper-Slider-Logo.png?raw=true)

Hue Slider is a lightweight, no-frills, JavaScript slider. Built with :heart:
Hue Slider is a web-based slideshow tool designed for displaying images, titles, and descriptions in a visually appealing and interactive way. It is built using HTML, CSS, and JavaScript, and is fully responsive to fit any screen size.

Hue Slider is designed to be easy to use and customize. It includes features such as slide indicators, a slide counter, and previous and next buttons for easy navigation. It also includes options for adding your own images, titles, and descriptions, as well as customizing the colors and styles of the slider.

To use Hue Slider, you simply need to include the required HTML, CSS, and JavaScript files in your web project, and then customize the content and styling to your liking. Once configured, the slider can be embedded on any web page or site, allowing you to showcase your content in a professional and engaging way.

Hue Slider can be used for a wide range of purposes, such as displaying product images on an e-commerce site, showcasing portfolio work on a personal website, or highlighting news stories on a media site. It is a versatile tool that can help you to create visually stunning and engaging content for your website or project.
![Hue Slider Screenshot](../assets/Hue-Slider.jpg?raw=true)

## Setup
# Hue Slider

Hue Slider is a customizable image slider built with HTML, CSS, and JavaScript. It features a responsive design, touch swipe support, and customizable slide captions and links.

## Demo

You can see a live demo of Hue Slider [here](https://example.com).

## Usage

To use Hue Slider, follow these steps:

1. Download or clone the repository.
2. Add the `hue-slider.css` and `hue-slider.js` files to your project.
3. Create an HTML element to contain the slider, for example:

```html
<div class="hue-slider">
  <div class="content-container">
    <div class="hue-slide-item">
      <img src="slide1.jpg" alt="Slide 1" class="slide_img">
      <div class="hue-slide">
        <div class="content-container">
          <header class="entry-header">
            <h1>Slide 1 Title</h1>
          </header>
          <p>Slide 1 description goes here.</p>
          <a href="#" class="hue-button">Read More</a>
        </div>
      </div>
    </div>
    <div class="hue-slide-item">
      <img src="slide2.jpg" alt="Slide 2" class="slide_img">
      <div class="hue-slide">
        <div class="content-container">
          <header class="entry-header">
            <h1>Slide 2 Title</h1>
          </header>
          <p>Slide 2 description goes here.</p>
          <a href="#" class="hue-button">Read More</a>
        </div>
      </div>
    </div>
    <!-- Add more slides as needed -->
  </div>
  <div class="control">
    <div class="control-container">
      <div class="prev"><i class="fa fa-chevron-left"></i></div>
      <div class="hue-counter">1/3</div>
      <div class="next"><i class="fa fa-chevron-right"></i></div>
    </div>
  </div>
  <div id="indicator-wrapper" class="indicators"></div>
</div>
```

4. Add the necessary JavaScript to initialize the slider, example:

```js
const hueSlider = new HueSlider(".hue-slider", {
  autoplay: true,
  slideTime: 4000,
  showIndicators: true,
  showControls: true,
});
```

5. Add the CSS file to the head of the HTML, example:
   
```
</head>
   <link rel="stylesheet" href="hue-slider.css" />
</head>
```

## Options

Hue Slider supports the following options:

| Option         | Default | Description                                                                       |
|----------------|---------|-----------------------------------------------------------------------------------|
| `autoplay`     | `true`  | Whether to automatically advance to the next slide.                               |
| `slideTime`    | `4000`  | The time in milliseconds between slide transitions.                              |
| `showIndicators` | `true` | Whether to show slide indicators.                                                |
| `showControls` | `true`  | Whether to show the previous and next slide controls.                             |

## Credits

Hue Slider was inspired by [Slick](https://kenwheeler.github.io/slick/) and built using [FontAwesome](https://fontawesome.com/) for the arrow icons.

## How to Contribute

We welcome contributions to Hue Slider! If you want to contribute, please follow these steps:

1. Fork this repository.
2. Create a new branch with a descriptive name for your feature or bug fix.
3. Write your code and tests.
4. Ensure that all tests pass.
5. Submit a pull request with your changes.

## License

This project is licensed under the GNU General Public License v3.0. For more information, please see the [LICENSE](LICENSE) file.

For publicly safe contact information, please email us at hue-slider@mydomain.com.
