$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $("header").css({
            'background': '#fff',
        });
        $('nav a').addClass('scrolling');
    } else {
        $("header").css({
            'background': '#000',
        });
        $("nav a").removeClass("scrolling");
    }
});