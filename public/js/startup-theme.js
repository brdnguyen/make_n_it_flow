$(document).ready(function() {
    count = 0 ;
    setTimeout(function() {
        $('.pop-up,.pop-up-overlay').addClass('visible'); 
    }, 500);

    $('.each-img').click(function() {
        if (!$(this).hasClass('active-img')) 
            count = count + 1;
        $(this).addClass('active-img');

        var id = $(this).attr('data-theme');
        console.log(id); 
        $(".dynamic-content-frame").each(function(){
            if($(this).attr('data-frame') == id) {
                $(this).show();
            }
        });

        if (count == 3) {
            // print 'personalising for XXXXX'
            $('.message').show();
            $('#circle').circleProgress({
                value: 0.8,
                size: 80,
                fill: {
                    gradient: ["red", "orange"]
                }
            });
            setTimeout(
              function() {
                $('.pop-up, .pop-up-overlay').hide();
                $('.content').show();
                }, 5000
            );
            
        }
    });
}
);


$(window).load(function() {
    $('.carousel-img').click(function() {
        if ($(this).hasClass('just-clicked')){
            $(':last-child', this).remove();
        } else {
           $(this).append('<div class="fav"></div>');
        }
        $(this).toggleClass('just-clicked');
    });
    $('.carousel-img').hover(function() {
        $(this).toggleClass('hover-active');
        $(this).append($('.hover-tile'));
        var favourite = Math.floor(Math.random() * 98) + 1;
        $('.fav-counter').html(favourite);
    });

    $('.carousel-img').on('mouseover', function(event){
        $('.hover-tile').show();
    });

    $('.carousel-img').on('mouseout', function(event){
        $('.hover-tile').hide();
    });


    // $('.slick-arrow').hover(function() {
    //     print
    //   $('.responsive').slick('slickNext');
    // });

    $('.responsive').slick({
        // dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 6,
        slidesToScroll: 2,
        swipeToSlide:true,
        variableWidth: true,
        prevArrow: false
                //,
        // responsive: [{
        //     breakpoint: 1024,
        //     settings: {
        //         slidesToShow: 6,
        //         slidesToScroll: 1,
        //         // centerMode: true,

        //     }

        // }, {
        //     breakpoint: 800,
        //     settings: {
        //         slidesToShow: 3,
        //         slidesToScroll: 2,
        //         dots: true,
        //         infinite: true,

        //     }


        // }, {
        //     breakpoint: 600,
        //     settings: {
        //         slidesToShow: 2,
        //         slidesToScroll: 2,
        //         dots: true,
        //         infinite: true,
                
        //     }
        // }, {
        //     breakpoint: 480,
        //     settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1,
        //         dots: true,
        //         infinite: true,
        //         autoplay: true,
        //         autoplaySpeed: 2000,
        //     }
        // }]
    });


});
