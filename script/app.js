const nav = document.querySelector('.nav');


window.addEventListener('scroll', () => {
    
    $(function(){
        $(window).scroll(function() {
            var scroll = $(window).scrollTop(); // how many pixels you've scrolled
            var osAbout = $('#about').offset().top; // pixels to the top of div1
            var htAbout = $('#about').height(); // height of div1 in pixels
            var osDiplomas = $('#diplomas').offset().top; // pixels to the top of div1
            var htDilpomas = $('#diplomas').height(); // height of div1 in pixels
            var osSkills = $('#skills').offset().top; // pixels to the top of div1
            var htSkills = $('#skills').height(); // height of div1 in pixels
            var osExp = $('#experiences').offset().top; // pixels to the top of div1
            var htExp = $('#experiences').height(); // height of div1 in pixels
            // if you've scrolled further than the top of div1 plus it's height
            // change the color. either by adding a class or setting a css property
            if((scroll > osAbout + htAbout  && scroll < osDiplomas + htDilpomas)  || (scroll > osExp + htExp  && scroll < osSkills + htSkills)){
                nav.classList.add('whiteNav');
            }
            else{
                nav.classList.remove('whiteNav');
            }
        });
    });
});


var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: false,
    mousewheel: {
      invert: false,
    },
    autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });