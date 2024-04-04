const slideSelector = '.slider__slide';
const buttonsSelector = {
    prev: '.button--prev',
    next: '.button--next',
}

const hideSlides = (items) => {
    items.forEach(element => {
        element.style.display = 'none';
    });
};

const sliderInit = () => {
    const slides = document.querySelectorAll(slideSelector);
    const buttons = {
        prev: document.querySelector(buttonsSelector.prev),
        next: document.querySelector(buttonsSelector.next),
    }
    hideSlides(slides);
    console.log('SLIDES:', slides, 'BUTTONS:', buttons);
}

window.onload = () => {
    sliderInit();
};