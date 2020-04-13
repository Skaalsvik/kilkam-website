// generall settings


var rtime;
var timeout = false;
var delta = 200;
$(window).resize(function() {
    rtime = new Date();
    if (timeout === false) {
        timeout = true;
        setTimeout(resizeend, delta);
    }
});

function resizeend() {
    if (new Date() - rtime < delta) {
        setTimeout(resizeend, delta);
    } else {
        timeout = false;
        location.reload(false);
    }               
}




// Announcmentbar //
const announcementBar = document.querySelector('.announcement-bar')
function exitButtonClicked(){
    announcementBar.style.display = 'none'
}

// Slideshow //


// slideshow-container and slideshow images
const slideshowSlides = document.querySelector('.slideshow figure');
const slideImages = document.querySelectorAll('.slide-img')
//slide btn
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
// slidecontroller btn
const slideControllers = document.querySelectorAll('.controller button')
//counter
var counter = 2;
const size = slideImages[0].clientWidth

var autoSlide = setInterval(()=>{
    slideshowSlides.style.transition = 'transform 0.6s ease-in-out';
    counter++
    slideshowSlides.style.transform = 'translateX(' + (-size*counter) + 'px';
}, 5000)

slideshowSlides.style.transform = 'translateX(' + (-size*counter) + 'px'
slideControllers[counter-1].style.backgroundImage = 'url(../images/slideshow-assets/selected-ellipse.svg)';

nextBtn.addEventListener('click', ()=>{
    clearInterval(autoSlide)
    if (counter >= slideImages.length -1) return;
    slideshowSlides.style.transition = 'transform 0.4s ease-in-out';
    counter++
    slideshowSlides.style.transform = 'translateX(' + (-size*counter) + 'px';
});

prevBtn.addEventListener('click', ()=>{
    clearInterval(autoSlide)
    if (counter <= 0) return;
    slideshowSlides.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    slideshowSlides.style.transform = 'translateX(' + (-size*counter) + 'px';
});

slideshowSlides.addEventListener('transitionend', ()=>{
    // check end of slideshow
    if (slideImages[counter].id == 'lastClone') {
        slideshowSlides.style.transition = 'none'
        counter = slideImages.length - 2;
        slideshowSlides.style.transform = 'translateX(' + (-size*counter) + 'px';
    } 

    if (slideImages[counter].id == 'firstClone') {
        slideshowSlides.style.transition = 'none'
        counter = slideImages.length - counter;
        slideshowSlides.style.transform = 'translateX(' + (-size*counter) + 'px';
    } 


    // fill slidecontroller
    for (var i = 0; i<slideImages.length-2; i++){
        slideControllers[i].style.backgroundImage = 'url(../images/slideshow-assets/ellipse.svg)';
    }
    slideControllers[counter-1].style.backgroundImage = 'url(../images/slideshow-assets/selected-ellipse.svg)';
});  


function btnClicked(btn){
    slideshowSlides.style.transition = 'transform 0.4s ease-in-out';
    counter = btn
    slideshowSlides.style.transform = 'translateX(' + (-size*counter) + 'px';
    clearInterval(autoSlide)
}
