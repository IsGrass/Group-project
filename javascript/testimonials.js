//All of the 3 testimonials banners javascript

//I decided to use slick jquery plugin to the banner on the testimonials page.
//These banner have arrow buttons to slide through the different slides and is draggable on mobile.
//It only shows one slide at a time out of a total of 3 per banner with each of them having their own background image and content text.
//These banners are for the reveiews from different jobs we have contducted such as corporate,weddings and events we have conducted.
//On smaller screen sizes the arrows disapear and are replaced with touchable dots since the arrows clip at the sides of the phone.
//This banner does not auto play and requires the user to scroll through them.
$(document).ready(function() {   
    $('.review-box').slick({
        infinite: true,
        arrows: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 300,
        draggable: true,
        responsive: [
      {
        breakpoint: 808,
        settings: {
            arrows: false,
            dots:true,
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        
      }
      
    ]

    });
});

