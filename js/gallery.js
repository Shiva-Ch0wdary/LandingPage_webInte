document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.gallery img');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox img');
    const lightboxClose = document.querySelector('.lightbox button');
  
    images.forEach(image => {
      image.addEventListener('click', function () {
        lightboxImg.src = this.src;
        lightbox.classList.add('visible');
      });
    });
  
    lightboxClose.addEventListener('click', function () {
      lightbox.classList.remove('visible');
    });
  });
  