//used slick to make the imgs move across the screen 
// used autoplay option with arrows and draggable turned off
//it scrolls them idivuyally
$(document).ready(function() {   
    $('.partner-box').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 300,
        variableWidth: true,
        draggable: false,
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

