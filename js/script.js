// toggler btn //

$(document).ready(function () {
    'use strict';

    $('.nav-button').click(function () {
        'use strict';

        $('.nav-button').toggleClass('change');

    });

});

// close mobile menu on click //

/*$(document).ready(function () {

    $('.navbar-nav li a').on('click touch', function () {

        $('.nav-button').click();

    });

});*/

// hide and show transparent background on scroll //

$(document).ready(function () {

    // show/hide navbar on page load
    showHideNave();
    
    $(window).scroll(function () {

        // show/hide navbar on window's scroll
        showHideNave();

    });

    function showHideNave() {

        if ($(this).scrollTop() < 200) {

            // hide sticky navbar and back to top button
            $('.navbar').removeClass('sticky-nav-menu');
            $('#back-to-top').fadeOut(); // back to top btn

        } else {

            // show sticky navbar and back to top button
            $('.navbar').addClass('sticky-nav-menu');
            $('#back-to-top').fadeIn(); // back to top btn

        }

    }

});

// smooth scrolling //

$(document).ready(function () {

    $('a.smooth-scroll').click(function (event) {

        event.preventDefault();

        var section = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");

    });

});

// work-section----- magnific popup //

$(document).ready(function () {
    'use strict';

    $('#work').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});

// owl-carousel---for team section //

$(document).ready(function () {

    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        loop: true,
        smartSpeed: 700,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 1
            },
            // breakpoint from 576 up
            576: {
                items: 2
            },
            // breakpoint from 768 up
            768: {
                items: 3
            },
        }
        /*autoplayHoverPause: true*/
    });

});

// owl-carousel--- for testimonials section //

$(document).ready(function () {

    $("#customer-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        smartSpeed: 700,
        /*autoplayHoverPause: true*/
    });

});

// counter up //

$(document).ready(function () {
    'use strict';

    $('.counter').counterUp({
        delay: 10,
        time: 2500
    });

});

// owl-carousel--- for clients section //

$(document).ready(function () {

    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        loop: true,
        smartSpeed: 700,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 3
            },
            // breakpoint from 768 up
            768: {
                items: 4
            },
            // breakpoint from 992 up
            992: {
                items: 6
            }
        }
        /*autoplayHoverPause: true*/
    });

});

// Add animations & initialize wow //

$(document).ready(function () {

    'use strict';
    new WOW().init();

});