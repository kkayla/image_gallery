var request; //latest image being requested
var current; //image currently  shown
var cache = { //cache object
      };
var frame = ('#photo-viewer'); //contaier for selected image
var thumbs = ('.thumb'); //containter for thumbnail images

function crossfade($img) { //function to fade between images
                          //passing in the new larger image as a parameter
    if (current){         //if there is currently an image showing
      current.stop().fadeOut('slow');    //stop the animation and fade it out
    }

    img.css({                      //setting the css margins for the image
      marginLeft: -$img.width() /2,   //negative margins for half the images width
      marginTOp: -$img.height() /2     //negative margins for half the images height
    });

    $img.stop().fadeTO('slow', 1); //stop animation over new image & fade in

    $current = $img;              //new image becomes the current image
}

$(document).on('click', '.thumb', function(e){   //when a thumb is clicked on
  var img;                      //create a local variale called $img
  var src = this.href;           //store path to image
  request = src;                 //store path to image AGAIN in request

  e.preventDefault();     //stop the default link behavior to open in a new page

  $thumbs.removeClass('active');      //remove actice from all thumbs
  $(this).addClass('active');         //adds active calss onto clicked thumb

  if (cache.hasOwnProperty(src)){     //
    if (cache[src].isLoading === false)
    crossfade(cache[src].$img);
  }

  else {
    img = ('<img/>');
  }

})
