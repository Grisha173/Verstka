const slideSelector = '.slider__slide';
const buttonsSelector = {
    prev: '.button--prev',
    next: '.button--next',
};
let activeSlide = 0;
let slides, buttons; 

const hideSlides = () => {
    slides.forEach(element => {
        element.style.display = 'none';
    });
};

const showSlide = () => {
    slides[activeSlide].style.display = 'block';
}

const slidePrev = () => {
    if (activeSlide === 0){
        activeSlide = slides.length - 1;
    } else {
        activeSlide = activeSlide - 1;
    }
    hideSlides();
    showSlide();
};

const slideNext = () => {
    if (activeSlide === slides.length - 1){
        activeSlide = 0;
    } else {
        activeSlide = activeSlide + 1;
    }
    hideSlides();
    showSlide();
};

const sliderInit = () => {
    slides = document.querySelectorAll(slideSelector);
    buttons = {
        prev: document.querySelector(buttonsSelector.prev),
        next: document.querySelector(buttonsSelector.next),
    }
    buttons.prev.addEventListener('click', slidePrev);
    buttons.next.addEventListener('click', slideNext);

    hideSlides();
    showSlide();
    console.log('SLIDES:', slides, 'BUTTONS:', buttons);
}

window.onload = () => {
    sliderInit();
};