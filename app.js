
const images = [
    "./img/sunset.jpeg",
    "./img/green.png",
    "./img/sunset4.jpg",
    "./img/sunset1.jpg"
]

var currentImageIndex = 0;

const elementsArray = document.querySelectorAll(".circle");

//initialize header with image
elementsArray.forEach(function(elem) {
    elem.style.backgroundImage = "url('" + images[currentImageIndex] + "')";
});

const button = document.querySelector(".btn");
button.addEventListener("click",function() {
    button.classList.add("btn-animate");

    currentImageIndex += 1;
    if(currentImageIndex >= images.length) 
        currentImageIndex = 0;

    //Start animation
    elementsArray.forEach(function(elem) {
        elem.classList.add("circle-animate");
    });
});

button.addEventListener("animationend",function() {
    button.classList.remove("btn-animate");
});

//Register circle animationEnd event
elementsArray.forEach(function(elem) {
    elem.addEventListener("animationend",function() {
        elem.style.backgroundImage="url('"+images[currentImageIndex]+"')";
        elem.classList.remove("circle-animate");
        console.log("test")
    });
});

$(window).scroll(function() {
    var topWindow = $(window).scrollTop();
    var topWindow = topWindow * 1.5;
    var windowHeight = $(window).height();
    var position = topWindow / windowHeight;
    position = 1 - position;
    $('.arrow-wrap').css('opacity', position);
});

$(function() {
    $('a[href*=#content]:not([href=#content])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html,body').animate({
               scrollTop: target.offset().top
            }, 1000);
        return false;
        }
        }
    });
});
