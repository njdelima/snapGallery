# snapGallery.js
### Create responsive galleries with minimal effort
snapGallery is a super-simple jQuery plugin that converts your unordered, haphazard, differently sized images into a beautiful gallery. 

Completely responsive and customizable, snapGallery allows you to select the spacing between images, the minimum width allowed before stacking and the maximum number of columns, with more options on the way!

## [View the plugin homepage with a live demonstration!](http://neerajdelima.ga/snapGallery/)

## Download

**Recommended:** Download the script from [here](http://neerajdelima.ga/snapGallery/snapGallery.js) 

Not recommended: link to the script

```html
<script src="http://neerajdelima.ga/snapGallery/snapGallery.js"></script>
```

### Usage

Add the following barebones HTML markup:

```html
<ul id="gallery-container">
  <li><img src="./path/to/img1.jpg" /></li>
  <li><img src="./path/to/img2.jpg" /></li>
  <li><img src="./path/to/img3.jpg" /></li>
  <!-- -->
  <!-- -->
  <li><img src="./path/to/img21.jpg" /></li>
  <li><img src="./path/to/img22.jpg" /></li>
</ul>
```

Make sure to include both jQuery as well as the snapGallery script:

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="./snapGallery.js"></script>
```

Call the plugin & watch the magic happen!

```javascript
$(function() {
  $('#gallery-container').snapGallery();
})
```


### Demo

**snapGallery takes an unordered list of images like this:**

<img src="https://raw.githubusercontent.com/njdelima/snapGallery/master/snapGalleryBefore.png" width="800" alt="Snap Gallery Before image" />

**and converts them into a gallery like this:**

<img alt="Snap Gallery After image" src="https://raw.githubusercontent.com/njdelima/snapGallery/master/snapGalleryAfter.png" width="800" />
