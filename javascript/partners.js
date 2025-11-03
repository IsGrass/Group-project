$(document).ready(function() {   
    $('.partner-box').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        speed: 300,
        variableWidth: true,
        draggable: false,
        centerMode: false,
        responsive: [ // so it fixes bug on it disappearing on desktop view (desktop first)
        {
        breakpoint: 768, 
        settings: {
            centerMode: true,
        }
        }]
    });
});

