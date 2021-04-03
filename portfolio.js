$(document).ready(function() {

    $('#slides').superslides({
        animation: 'fade',
        play: 5000, 
        pagination: false, 
    });

    let typed = new Typed(".typed", {
        strings: ["Passionate Leader.", "Amateur Photographer.", "Web Development Student.", "Lifelong Learner."], 
        typeSpeed: 70, 
        loop: true, 
        startDelay: 1000, 
        showCursor: false,
    });


    $("#navigation li a").click(function(e) {
        e.preventDefault();

        let targetElement = $(this).attr('href');
        let targetPosition =  $(targetElement).offset().top; 
        $('html, body').animate({ scrollTop: targetPosition - 100}, 'slow');

    });


    const nav = $("#navigation");
    const navTop = nav.offset().top; 

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {
        
        let body = $("body");

        if($(window).scrollTop() >= navTop) {
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav"); 
        } 
        else {
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        }
    }

    $('.purposeCarousel').carousel({
        interval: 6000
      })
   
});

