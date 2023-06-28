$(document).ready(function() {
    $("li:first-child").addClass("first");
    $("li:last-child").addClass("last");
    $('[href="#"]').attr("href", "javascript:;");
    $('.menu-Bar').click(function() {
        $(this).toggleClass('open');
        $('.menuWrap').toggleClass('open');
    });

    /* Accordian */
     $('[data-targetit]').on('click', function(e) {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        var target = $(this).data('targetit');
        $('.' + target).siblings('[class^="box-"]').hide();
        $('.' + target).fadeIn();
    });

    /* POPUP Main */
    $('.loginUp').click(function() {
        $('.viewLogin').fadeIn();
        $('.black-overlay').fadeIn();
    });

    /* Close POPUP */
    $('.closePop,.black-overlay').click(function() {
        closePopup();
    });

    

    

     $('.main-slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 1000,
        fade: true,
        //autoplay:true,
        autoplayspeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 825,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },

        ]
    });


     


     // Accordian
    $('.accordian h4').click(function() {
        $('.accordian li').removeClass('active');
        $(this).parent('li').addClass('active');
        $('.accordian li div').slideUp();
        $(this).parent('li').find('div').slideDown();
    });




    $('a.disclaimerAnchor').click(function() {
        $(this).next().slideToggle();
        $(this).toggleClass('active');
    });


    $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });



});



$(window).on('load', function() {
    /* ISOTOPE RE-LAYOUT */
  var $container = $('.grid');

  $container.isotope({
    animationOptions: {
      duration: 500,
      easing: 'swing'
    },
    itemSelector: '.grid-item',
  });



 var currentUrl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
    $('ul.menu li a').each(function() {
        var hrefVal = $(this).attr('href');
        if (hrefVal == currentUrl) {
            $(this).removeClass('active');
            $(this).closest('li').addClass('active')
            $('ul.menu li.first').removeClass('active');
        }
    });
});



  


function closePopup() {
    $('.popup').fadeOut();
    $('body').removeClass('ovr-hiddn');
    $('.black-overlay').fadeOut();
}

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
        $('header').removeClass('sticky');
    } else {
        $('header').addClass('sticky');
    }
});


/* RESPONSIVE JS */
if ($(window).width() < 825) {

    $('').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      autoplay: true,
      autoplaySpeed: 4000,
    });

}


particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#85a0bb"},"shape":{"type":"circle","stroke":{"width":0,"color":"#466e90"},"polygon":{"nb_sides":12},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":5,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":false});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;