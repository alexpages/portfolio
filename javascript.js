
window.onscroll = function() {scrollFunction()};



function scrollFunction(){
    let myButton = document.getElementById("topButton");
    let header = document.getElementsByClassName("nav_bar_container")[0];
    let button_theme = document.getElementsByClassName("theme")[0];
    
    if (document.body.scrollTop >100 || document.documentElement.scrollTop>100){
        myButton.style.opacity=1;
        myButton.style.cursor="pointer";
        header.style.position="fixed";
        header.style.backgroundColor = "rgba(30,32,34,.48)";
        header.style.transition="all ease-in 0,2s";
        button_theme.style.transition="all ease-in 0,2s";
    }
    else{
        myButton.style.opacity=0;
        myButton.style.cursor="auto";
        header.style.backgroundColor = "#1E2022";
        header.style.position="static";
        header.style.transition="all ease-in 0,2s";

        button_theme.style.backgroundColor = "transparent";
        button_theme.style.transition="all ease-in 0,2s";
    }


}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


function button(){
    const toggleButton = document.getElementsByClassName("toggle_button")[0]
    const navBarLinks = document.getElementsByClassName("nav_items")[0]
    navBarLinks.classList.toggle('active')  
    
}


