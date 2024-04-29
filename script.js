let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginform = document.querySelector('.login-from-container');
let formclose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.nav-middle');


window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginform.classList.remove('active');
}

window.addEventListener("scroll", function(){
    var navbar = this.document.querySelector(".nav-container");
    navbar.classList.toggle("sticky",window.scrollY > 0);
})

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginform.classList.add('active');
});

formclose.addEventListener('click', () =>{
    loginform.classList.remove('active');
});



