$(document).ready(function() {
    count = 0 ;
    setTimeout(function() {
        $('.pop-up,.pop-up-overlay').addClass('visible'); 
    }, 500);

    $('.each-img').click(function() {
        $(this).toggleClass('active-img');
        if ($(this).hasClass('active-img')) 
            count = count + 1;
        
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
                }, 4000
            );
            
        }
    });
}
);


$(window).load(function() {

    $('.responsive').slick({
        // dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 8,
        slidesToScroll: 1,
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
