const btn = document.querySelector('.btn');

function randomColor () {
    return `hsl(${Math.floor(Math.random()*360)},100%,50%)`;
}

btn.addEventListener('click',() => {
    document.body.style.background = randomColor();
    console.log(randomColor());
})