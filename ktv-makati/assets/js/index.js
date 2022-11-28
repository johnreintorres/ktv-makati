const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.menu-nav-layout');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        hamburger.classList.add('open')
        nav.classList.add('open')

        showMenu=true;
    }else{
        hamburger.classList.remove('open')
        nav.classList.remove('open')

        showMenu=false; 
    }
}


$('.fade').slick({
    dots: false,
    autoplay:true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: false,
    nextArrow: false
    });
