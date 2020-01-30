var nav = document.querySelector('header nav')
var button = document.querySelector('header button')


function toggleMenu(){
    nav.classList.toggle('showMe')
}

button.addEventListener('click', toggleMenu)