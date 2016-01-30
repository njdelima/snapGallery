# snapGallery.js
### Create responsive galleries with minimal effort
snapGallery is a super-simple jQuery plugin that converts your unordered, haphazard, differently sized images into a beautiful gallery. 

Completely responsive and customizable, snapGallery allows you to select the spacing between images, the minimum width allowed before stacking and the maximum number of columns, with more options on the way!

### Usage

Add the following barebones HTML markup:

```
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

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="./snapGallery.js"></script>
```

Call the plugin & watch the magic happen!

```
$(function() {
  $('#gallery-container').snapGallery();
})
```
