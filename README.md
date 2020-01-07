# Hue-Paper-Slider

![Paper Logo](../assets/Paper-Slider-Logo.png?raw=true)

Hue Paper Slider is a lightweight, no-frills, JavaScript slider. Built with :heart: using pure JavaScript, CSS, HTML, and no other third party dependencies.

![Hue Slider Screenshot](../assets/Hue-Slider.jpg?raw=true)

## Setup

1. Lets start by adding our CSS to the page header. Here is the typical method or whatever is best for your project ```html <link rel="stylesheet" href="hue-slider.css" /> ``` 

2. Next add the JavaScript to the footer of our page. ```html <script src="hue-slider.js" ></script> ```

3. The HTML markup for Hue Slider container.

   ```html
   
    <div class="hue-slider">
        <div class="hue-slider-container">

            <!-- Add slides here-->
    
        </div>
    </div>
   
   ```

3. Now the HTML markup for adding a slide to the slider.

   ```html
        ...<!-- .hue-slider-container -->

        <!-- The markup for adding a slide-->
        <div class="hue-slide-item fade">
          <div class="hue-slide">
            <img class="slide_img" src="img/hue-slider-img-1.jpg" />
            <div class="content-container">
              <div class="hue_content">
                <header class="entry-header">
                  <h1 class="entry-title">This is slide one</h1>
                </header>
                <p>
                  This is a slide markup, use the same pattern to
                  add additional slides to the slider.
                </p>
                <input
                  class="hue-button"
                  onclick="window.location.href = '#AddYourLinkHere'"
                  type="button"
                  value="Read More"
                />
              </div>
            </div>
          </div>
        </div>

        ...<!-- .hue-slider-container -->
   ```

## Contributing

If you like to contribute to the project, pull requests are welcome. For any major changes, please open an issue to discuss the changes you intend to make.

## License

[GNU] (https://choosealicense.com/licenses/gpl-3.0/)
