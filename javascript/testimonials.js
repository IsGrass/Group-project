$(document).ready(function() {   
    $('.review-box1').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        dots: true,
        variableWidth: true,
        draggable: true,
        centerMode: false,
        responsive: [ // so it fixes bug on it disappearing on screenj sizes above 768
            {
                breakpoint: 768, 
                settings: {
                    centerMode: true,
                }
            }
        ]
    });
});

$(document).ready(function() {   
    $('.review-box2').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        variableWidth: true,
        draggable: true,
        centerMode: false,
        responsive: [ // so it fixes bug on it disappearing on screenj sizes above 768
            {
                breakpoint: 768, 
                settings: {
                    centerMode: true,
                }
            }
        ]
    });
});

$(document).ready(function() {   
    $('.review-box3').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        variableWidth: true,
        draggable: true,
        centerMode: false,
        responsive: [ // so it fixes bug on it disappearing on screenj sizes above 768
            {
                breakpoint: 768, 
                settings: {
                    centerMode: true,
                }
            }
        ]
    });
});