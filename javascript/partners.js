//Partners sliding images javascript

//I decided to use slick to make the imgs move across the screen.
//I used autoplay option that ninfintiely slides them across.
//i set all the stuff that i wouldn't use to false since this is many images being shown at once.
//It scrolls them idivuyally.
//In smaller screen sizes it will center the mage image so they are all placed evenly across the phone and tablet.
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
        responsive: [
            {
                breakpoint: 768, 
                settings: {
                    centerMode: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});

