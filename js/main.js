'use strict';

window.addEventListener('load', function () {

  var images = document.querySelectorAll('.image');
  var imgArray = Array.from(images);

  var setLocalStorage = function setLocalStorage(src, selectedState) {
    localStorage.setItem(src, selectedState);
  };

  var checkLocalStorage = function checkLocalStorage(src) {
    return localStorage.getItem(src);
  };

  var checkImageDetails = function checkImageDetails(pageReload) {
    if (pageReload) {
      imgArray.forEach(function (img) {
        var imgSrc = img.getAttribute('src');
        var selected = checkLocalStorage(imgSrc);
        if (selected === 'true') {
          img.classList.add('selected');
        }
      });
    }
  };

  imgArray.forEach(function (img) {
    var imgSrc = img.getAttribute('src');

    img.addEventListener('click', function (event) {

      var elem = event.target;
      elem.classList.toggle('selected');

      if (elem.classList.contains('selected')) {
        setLocalStorage(imgSrc, 'true');
      } else {
        setLocalStorage(imgSrc, 'false');
      }
    });
  });

  checkImageDetails(true);
});