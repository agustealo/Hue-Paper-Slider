# Hue-Paper-Slider

Hue Paper Slider is a no nonesense
Built using pure JavaScript, CSS, and HTML5, no third party dependencies.

## Setup

1. Lets start by adding our CSS to the page header. ```html <link rel="stylesheet" href="style.css" /> ``` 

2. Next add the JavaScript to the footer of our page. ```html <script src="javascript.js" ></script> ```

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
        
        <!-- The slide markup-->
        <div class="hue-slide-item fade">
          <div class="hue-slide">
            <img class="slide_img" src="img/hue-slider-img-1.jpg" />
            <div class="content-container">
              <div class="hue_content">
                <header class="entry-header">
                  <h1 class="entry-title">Add your own title</h1>
                </header>
                <p>
                  This is a paragraph...
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
   ```

## Contributing

If you like to contribute to the project, pull requests are welcome. For any major changes, please open an issue to discuss the changes you intend to make.

## License

[GNU](https://choosealicense.com/licenses/gnu/)
