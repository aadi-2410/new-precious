$(document).ready(function () {
    $(".owl-carousel.owl-carousel-technology").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        nav: true,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 4,
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

function cancelFunction() {
    document.getElementById("applymodal").style.display = "none";
}

function applyModalOpen() {
    document.getElementById("applymodal").style.display = "block";
}