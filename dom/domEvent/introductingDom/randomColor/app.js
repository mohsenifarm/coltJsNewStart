const h1 = document.querySelector('h1');
const body = document.querySelector('body');

function randomNum() {
    let random = Math.floor(Math.random() * 255) + 1;
    return random
}
body.addEventListener('click', () => {
    let rgb = `rgb(${randomNum()},${randomNum()},${randomNum()})`;
    body.style.backgroundColor = rgb
    h1.innerHTML = rgb
})