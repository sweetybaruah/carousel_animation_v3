document.addEventListener("DOMContentLoaded", function() {
    var p = 0, z = 400;
    
    var carouselWrapper = document.querySelector('.carouselWrapper');
    carouselWrapper.style.perspective = (($('.slide').length - 1) * z + 1) + 'px';
  
    var slides = document.querySelectorAll('.slide');
    slides.forEach(function(slide, i) {
      slide.style.transform = 'translateZ(-' + z * i + 'px)';
    });
    
    var firstSlide = document.querySelector('.slide');
    firstSlide.classList.add('active');
    
    document.querySelector('.next').addEventListener('click', function() {
      var activeSlide = document.querySelector('.active');
      
      if (activeSlide.nextElementSibling && activeSlide.nextElementSibling.classList.contains('slide')) {
        p++;
        document.querySelector('.carousel').style.transform = 'translateZ(' + z * p + 'px)';
        activeSlide.classList.remove('active');
        activeSlide.nextElementSibling.classList.add('active');
      } else {
        p = 0;
        document.querySelector('.carousel').style.transform = 'translateZ(' + z * p + 'px)';
        activeSlide.classList.remove('active');
        firstSlide.classList.add('active');
      }
    });
    
    document.querySelector('.previous').addEventListener('click', function() {
      var activeSlide = document.querySelector('.active');
      
      if (activeSlide.previousElementSibling && activeSlide.previousElementSibling.classList.contains('slide')) {
        p--;
        document.querySelector('.carousel').style.transform = 'translateZ(' + z * p + 'px)';
        activeSlide.classList.remove('active');
        activeSlide.previousElementSibling.classList.add('active');
      } else {
        p = slides.length - 1;
        document.querySelector('.carousel').style.transform = 'translateZ(' + z * p + 'px)';
        activeSlide.classList.remove('active');
        slides[slides.length - 1].classList.add('active');
      }
    });
  });
  