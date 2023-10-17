window.addEventListener('load', init);


function init(){
    var menu = document.querySelector('.menu');
    var toggle = document.querySelector('.toggle');
    toggle.addEventListener('click', toggleMenu);
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

