
window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    var myButton = document.getElementById("topButton");
    if (document.body.scrollTop >100 || document.documentElement.scrollTop>100){
        myButton.style.opacity=1;
        myButton.style.cursor="pointer";
    }
    else{
        myButton.style.opacity=0;
        myButton.style.cursor="auto";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;º
  }


function button(){
    const toggleButton = document.getElementsByClassName("toggle_button")[0]
    const navBarLinks = document.getElementsByClassName("nav_items")[0]
    navBarLinks.classList.toggle('active')  
    
}

function random(){
    if (($(window).width() > 767) && (navBarLinks.classList.contains('active'))){
        navBarLinks.classList.toggle('active')  
    }
}

random();

