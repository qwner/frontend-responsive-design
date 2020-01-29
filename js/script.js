
// var body = document.querySelector('body')
// var button = document.querySelector('body header button')
// var nav = document.querySelector('body header nav')

// function toggleMenu(){
// nav.classList.toggle('showMe')
// }

// button.addEventListener('click', toggleMenu)

var nav = document.querySelector('header nav')
var button = document.querySelector('header button')

function toggleMenu(){
nav.classList.toggle('showMe')
}

button.addEventListener('click', toggleMenu)
