
window.onscroll = function() {scrollFunction()};



function scrollFunction(){
    let myButton = document.getElementById("topButton");
    let header = document.getElementsByClassName("nav_bar_container")[0];
    let button_theme = document.getElementsByClassName("theme")[0];
    
    if (document.body.scrollTop >15 || document.documentElement.scrollTop>15){
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

const menuDisplay = () =>{
    let menu = document.querySelector('.header_container');

    let about = document.getElementById("about");
    let projects = document.getElementById("projects");
    let skills = document.getElementById("skills");

    let pos_menu = window.pageYOffset + menu.offsetHeight;

    let pos_about = about.offsetTop + about.offsetHeight;
    let pos_projects = projects.offsetTop + projects.offsetHeight;
    let pos_skills = skills.offsetTop + skills.offsetHeight;

    let distance_about = pos_about - pos_menu;
    let distance_projects = pos_projects - pos_menu;
    let distance_skills = pos_skills - pos_menu;

    let min = Math.min(...[distance_about, distance_projects, distance_skills].filter(num => num > 0));

    document.querySelectorAll('.icons_header')[3].classList.remove('section_scroll');
    document.querySelectorAll('.icons_header')[4].classList.remove('section_scroll');
    document.querySelectorAll('.icons_header')[5].classList.remove('section_scroll');

    if (document.body.scrollTop >15 || document.documentElement.scrollTop>15){
    if (min === distance_about)
        document.querySelectorAll('.icons_header')[3].classList.add('section_scroll');
    if (min === distance_projects)
        document.querySelectorAll('.icons_header')[4].classList.add('section_scroll');
    if (min === distance_skills)
        document.querySelectorAll('.icons_header')[5].classList.add('section_scroll');
    }
}

function setTheme(){
    let html_class_list = document.documentElement.classList;

    if(!html_class_list.contains("dark")){
        try{
            html_class_list.replace("light","dark");
        }
        finally{
            html_class_list.add("dark");
        } 
    }
    else{
        html_class_list.replace("dark","light");
    }
}

function change_icon(){
    let theme_icon = document.querySelectorAll(".theme_icon")[0];
    if (theme_icon.classList.contains("fa-moon")){
        document.querySelectorAll(".fa-moon")[0].classList.remove("fa-moon");
        theme_icon.classList.add("fa-sun");
    }
    else{
        document.querySelectorAll(".fa-sun")[0].classList.remove("fa-sun");
        theme_icon.classList.add("fa-moon");
    }
}

window.addEventListener('scroll', menuDisplay);