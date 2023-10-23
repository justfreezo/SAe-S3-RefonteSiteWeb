let slides;
let btns;
let i;

window.addEventListener('load', init);

var manualNav = function (manual) {
    slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
            btn.classList.remove('active');
        });
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
    i = manual;
}

var repeat = function (activeClass){
    let active = document.getElementsByClassName('active');
    i = 1;

    var repeater = () => {
        setTimeout(function () {

            [...active].forEach((activeSlide)=>{
                activeSlide.classList.remove('active');
            })

            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;

            if (slides.length == i) {
                i = 0;
            }
            if (i >= slides.length) {
                return;
            }
            repeater();
        }, 10000);
    }
    repeater();
}

function init() {
    var toggle = document.querySelector('.toggle');
    btns = document.querySelectorAll('.btn');  // Assign btns globally
    slides = document.querySelectorAll('.slide');  // Assign slides globally
    let currentSlide = 1;

    toggle.addEventListener('click', toggleMenu);

    btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            manualNav(i);
            currentSlide = i;
        });
    });

    repeat();
}

function handleInput(inputElement) {
    const searchbar = inputElement.closest('.searchbar');
    if (inputElement.value.trim() !== '') {
        searchbar.classList.add('open');
    } else {
        searchbar.classList.remove('open');
    }
}

function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}
