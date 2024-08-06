$(document).ready(function () {
    $(".owl-carousel.owl-carousel-technology").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        nav: true,
        responsive: {
            0: {
                items: 3,
            },
            600: {
                items: 5,
            },
            1000: {
                items: 7,
            },
        },
    });
});
$(document).ready(function () {
    $(".owl-carousel.owl-carousel-review").owlCarousel({
        loop: true,
        margin: 70,
        dots: false,
        autoplay: true,
        nav: false,
        autoplayTimeout:1500,
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 2,
            },
        },
    });
});
