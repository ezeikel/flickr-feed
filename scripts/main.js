'use strict';

  // window.addEventListener('load', () => {
  //
  //   let images = document.querySelectorAll('.image');
  //   let imgArray = Array.from(images);
  //
  //   let checkImageDetails = (pageReload) => {
  //     if (pageReload) {
  //       imgArray.forEach(img => {
  //         let imgSrc = img.getAttribute('src');
  //         let selected = checkLocalStorage(imgSrc);
  //         if (selected === 'true') {
  //           img.classList.add('selected');
  //         }
  //       });
  //     }
  //   }
  //
  //   let setLocalStorage = (src, selectedState) => {
  //     localStorage.setItem(src, selectedState);
  //   }
  //
  //   let checkLocalStorage = (src) => {
  //     return localStorage.getItem(src);
  //   }
  //
  //   imgArray.forEach(img => {
  //     let imgSrc = img.getAttribute('src');
  //
  //     img.addEventListener('click', event => {
  //
  //       let elem = event.target;
  //       elem.classList.toggle('selected');
  //
  //       if(elem.classList.contains('selected')) {
  //         setLocalStorage(imgSrc, 'true');
  //       } else {
  //         setLocalStorage(imgSrc, 'false');
  //       }
  //     });
  //   });
  //
  //   checkImageDetails(true);
  //
  // });

//debugger;

let tags = 'london';
let url = 'http://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=';

debugger;
fetch(`http://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=london`)
  .then(response => response.json())
  .then(data => {
    //console.log(data);
    // for (var i=0; i<data.items.length; i++) {
    //     var item = data.items[i];
    //     var img = document.createElement('img');
    //     var imgurl = item.media.m;
    //     img.setAttribute('src', imgurl);
    //     img.className = 'image pointer';
    //     var container = document.getElementById('imagecontainer');
    //     container.appendChild(img);
    // }
  });
