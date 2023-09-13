
// Slide Animation
$(window).scroll(function(){
    $('.slideanim').each(function(){
        var pos = $(this).offset().top

        var wintop = $(window).scrollTop()

        if(pos < wintop + 600){
            $(this).addClass('slide')
        }
    })
})
