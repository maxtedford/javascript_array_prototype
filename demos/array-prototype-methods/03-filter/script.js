// TODO: Filter out just the photographs and store them in a variable called `photographs`.

var photographs = instagramAPI.data.filter(function(obj) {
  return obj.type === "image";
});

// TODO: Filter out just the videos and store them in a variable called `videos`.

var videos = instagramAPI.data.filter(function(obj) {
  return obj.type === "video";
});

// TODO: Filter out all of the photographs that don't have any likes and store the remaining photographs into a variable called `popularPhotographs`.

var popularPhotographs = photographs.filter(function(photo) {
  return photo.likes.count > 0;
});

// TODO: Map each photograph into a DOM node and append it to the #photographs DIV element.

var photographElements = photographs.forEach(function(photo) {
  var image = document.createElement('img');
  image.alt = photo.caption.text;
  image.src = photo.images.low_resolution.url;
  image.className = "instagram-image";
  $('#photographs').append(image);
});
