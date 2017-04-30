'use strict';

window.addEventListener('load', () => {

  let images = document.querySelectorAll('.image');
  let imgArray = Array.from(images);

  let setLocalStorage = (src, selectedState) => {
    localStorage.setItem(src, selectedState);
  }

  let checkLocalStorage = (src) => {
    return localStorage.getItem(src);
  }

  let checkImageDetails = (pageReload) => {
    if (pageReload) {
      imgArray.forEach(img => {
        let imgSrc = img.getAttribute('src');
        let selected = checkLocalStorage(imgSrc);
        if (selected === 'true') {
          img.classList.add('selected');
        }
      });
    }
  }

  imgArray.forEach(img => {
    let imgSrc = img.getAttribute('src');

    img.addEventListener('click', event => {

      let elem = event.target;
      elem.classList.toggle('selected');

      if(elem.classList.contains('selected')) {
        setLocalStorage(imgSrc, 'true');
      } else {
        setLocalStorage(imgSrc, 'false');
      }
    });
  });

  checkImageDetails(true);

});
