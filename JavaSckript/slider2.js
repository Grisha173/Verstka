const buttonsSelector = {
    prev: '.button--prev',
    next: '.button--next',
};
const sliderSelector = '.slider-container';
const slideSelector = '.slider-slide img';
const trackSelector = '.slider-slide';

let activeSlide = 0;
let slider, slides, track, buttons;

const slidePrev = () => {
    if (activeSlide === 0){
        activeSlide = slides.length - 1;
    } else {
        activeSlide = activeSlide - 1;
    }
    refresh();
};

const slideNext = () => {
    if (activeSlide === slides.length - 1){
        activeSlide = 0;
    } else {
        activeSlide = activeSlide + 1;
    }
    refresh();
};

const refresh = () => {
    const width = slider.offsetWidth;
    const move = activeSlide * width;
    track.style.transform = `translate(-${move}px, 0)`;
    
};

const sliderInit = () => {
    slides = document.querySelectorAll(slideSelector);
    buttons = {
        prev: document.querySelector(buttonsSelector.prev),
        next: document.querySelector(buttonsSelector.next),
    }
    buttons.prev.addEventListener('click', slidePrev);
    buttons.next.addEventListener('click', slideNext);
    slider = document.querySelector(sliderSelector);
    track = document.querySelector(trackSelector);
    refresh();
}

window.onload = () => {
    sliderInit();
};
