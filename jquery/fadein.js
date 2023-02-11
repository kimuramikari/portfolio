$(window).on('load scroll', function () {
    const fadein = $('.fade_in');
    const animation = 'animation';
    fadein.each(function () {
        const boxOffset = $(this).offset().top;
        const scrollPos = $(window).scrollTop();
        const wh = $(window).height();

        if (scrollPos > boxOffset - wh + 100) {
            $(this).addClass(animation);
        }
    })
})