// samen met David gemaakt. Hier maak ik variabelen aan die gekoppeld worden aan de nav en button
var nav = document.querySelector('header nav')
var button = document.querySelector('header button')

// hier wordt een class aangemaakt wanneer je op button klikt
function toggleMenu(){
    nav.classList.toggle('showMe')
}

button.addEventListener('click', toggleMenu)