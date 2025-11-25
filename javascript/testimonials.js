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

