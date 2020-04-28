const nav = document.querySelector('.nav');


window.addEventListener('scroll', () => {
    if (window.scrollY > 2150 && window.scrollY < 3250) {
        nav.classList.add('whiteNav');
    }
    else{
        nav.classList.remove('whiteNav');
    }
});