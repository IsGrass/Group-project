//Homepage banner java script

//I decided to use slick jquery plugin to the banner on the homepage.
//This banner has dot buttons to slide through the different slides it also auto plays as well and is draggable on mobile.
//It only shows one slide at a time out of a total of 4 with each of them having their own background image and content text.
//This banner was to show some of the reviews we have reviced from officals and partners.
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