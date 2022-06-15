
function header(){
    $(window).scroll(function(e) {

        var distanceScrolled = $(this).scrollTop();
    
        $('.menu_container').css('-webkit-filter', 'blur('+distanceScrolled/60+'px)');
    
    })
};

header();