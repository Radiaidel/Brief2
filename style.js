const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
        header.style.backgroundColor = 'white';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});