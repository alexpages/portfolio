
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
    document.documentElement.scrollTop = 0;
  }

