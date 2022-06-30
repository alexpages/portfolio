
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

function burger_function() {
    var x = document.getElementById("nav_items");
    if (x.style.display=="none"){
        x.style.display="flex";
        x.style.flexDirection="column";
        x.style.height="100%";
    }
}

