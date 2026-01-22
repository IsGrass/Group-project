//All of the 3 testimonials banners javascript

//I decided to use slick jquery plugin to the banner on the testimonials page.
//It only shows one slide at a time.
// all three banners were merged into one 
//This banner does not auto play and requires the user to scroll through them.
$(document).ready(function() {   
    $('.review-box').slick({
        infinite: true,
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 300,
        draggable: true,
    });
});

