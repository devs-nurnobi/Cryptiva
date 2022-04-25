$(document).ready(function(){
    $(".counter").counterUp({
        delay:10,
        time:2300
    });
});

// oel carousel section css style
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        800:{
            items:3
        },
        1000:{
            items:3
        }
    }
})


// header section fixed

var nav=document.getElementById('nav');
    window.onscroll=function(){
        if(window.pageYOffset > 100){
            nav.style.background= "rgba(1,1,1,.9)";
        }
        else{
            nav.style.background="transparent";
        }
    }





    //this is form section js code
    const button=document.getElementById('form-btn');

const modal=document.querySelector('.my-modal');
const close=document.querySelector('.btm-cancel');
const cancel=document.querySelector('.cancel');

button.addEventListener('click', function(){
    modal.style.opacity=1;
    modal.style.transform='translateY(0)';
    modal.style.PointerEvents='auto';
});

close.addEventListener('click', function(){
    modal.style.opacity=0;
    modal.style.transform='translateY(-100px)';
    modal.style.PointerEvents='none';
});
cancel.addEventListener('click', function(){
    modal.style.opacity=0;
    modal.style.transform='translateY(-100px)';
    modal.style.PointerEvents='none';
});
