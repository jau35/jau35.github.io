setSize = function () {
    var window_width = $(window).width(),
    window_height = window.innerHeight,
    header_height = $(".default-header").height(),
    header_height_static = $(".site-header.static").outerHeight(),
    fitscreen = window_height - header_height;

    $(".fullscreen").css("height", window_height)
    $(".fitscreen").css("height", fitscreen);
}

initScrollToTop = function () {
    //------- Go to Top --------// 
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 100) {
            $('#header1').addClass('header-scrolled1');
            $('#back-top').addClass('back-top-animation');
        } else {
            $('#header1').removeClass('header-scrolled1');
            $('#back-top').removeClass('back-top-animation');
        }
    });

    /* ---------------------------------------------
        scroll body to 0px on click
     --------------------------------------------- */
     $('#back-top a').on("click", function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
}

initMobileNav = function () {

     //------- Superfish nav menu  js --------//  

     $('.nav-menu').superfish({
        animation: {
            opacity: 'show'
        },
        speed: 400
    });


    //------- Mobile Nav  js --------//  

    if ($('#nav-menu-container').length) {
        var $mobile_nav = $('#nav-menu-container').clone().prop({
            id: 'mobile-nav'
        });
        $mobile_nav.find('> ul').attr({
            'class': '',
            'id': ''
        });
        $('body').append($mobile_nav);
        $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="lnr lnr-menu"></i></button>');
        $('body').append('<div id="mobile-body-overly"></div>');
        $('#mobile-nav').find('.menu-has-children').prepend('<i class="lnr lnr-chevron-down"></i>');

        $(document).on('click', '.menu-has-children i', function (e) {
            $(this).next().toggleClass('menu-item-active');
            $(this).nextAll('ul').eq(0).slideToggle();
            $(this).toggleClass("lnr-chevron-up lnr-chevron-down");
        });

        $(document).on('click', '#mobile-nav-toggle', function (e) {
            $('body').toggleClass('mobile-nav-active');
            $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
            $('#mobile-body-overly').toggle();
        });

        $(document).click(function (e) {
            var container = $("#mobile-nav, #mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
                    $('#mobile-body-overly').fadeOut();
                }
            }
        });
    } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
        $("#mobile-nav, #mobile-nav-toggle").hide();
    }
}

initOwlCarousel = function () {
    //------- Owl Carusel  js --------//
    if($('.active-brand-carusel').length) {
        $('.active-brand-carusel').owlCarousel({
            items: 5,
            loop: true,
            autoplayHoverPause: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 3,
                },
                991: {
                    items: 4,
                },
                1024: {
                    items: 5,
                }
            }
        });
    }
}

hashHandler = function () {
    const path = window.location.hash.slice(1) // remove leading '#'
    const id = path.split('#')[1];
    if (id) {
        var retries = 0;
        const scroll = () => {
            retries += 1;
            if (retries > 50) return;
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => element.scrollIntoView(), 0);
            } else {
                setTimeout(scroll, 100);
            }
        };
        scroll();
    }
    else {
        setTimeout(function () {
            $('html, body').scrollTop(0).show();
            $('html, body').animate({
                scrollTop: 0
            }, 0)
        }, 0);
    }
  }

onLoad = function () {
    setSize();
    initScrollToTop();
    initMobileNav();

    //------- Header Scroll Class  js --------//  

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('header-scrolled');
        } else {
            $('#header').removeClass('header-scrolled');
        }
    });

    initOwlCarousel();
    hashHandler();
};

onChange = function () {
    setSize();
    initOwlCarousel();
    hashHandler();
};

$(document).ready(onLoad);
$(window).bind('hashchange', onChange);
$(window).bind('resize', setSize);