id = 1

setInterval(function(){
    $('#box' + id).animate({
        left: '-50%'
    }, 500, function() {
        $(this).css('left', '150%');
        $(this).appendTo('#container');
    });

    $('#box' + id).next().animate({
        left: '50%'
    }, 500);

    id = id <= 5 ? id + 1 : 1;
},4000)