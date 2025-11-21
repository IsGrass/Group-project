$(document).ready(function() {   
    $('.sliding-image').slick({
        infinite: true,
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4300,
        speed: 300,
        draggable: true,
    });
});