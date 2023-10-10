function handleInput(inputElement) {
    const searchbar = inputElement.closest('.searchbar');
    if (inputElement.value.trim() !== '') {
        searchbar.classList.add('open');
    } else {
        searchbar.classList.remove('open');
    }
}