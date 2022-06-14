
function header(){
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            //switch to active class
            $("header_items").addClass("active");
        } else {
            //return to defaul css config
           $("header_items").removeClass("active");
        }
    });
}


header();