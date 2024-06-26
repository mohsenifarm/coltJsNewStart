// console.log('con')

function randomNumber() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    console.log(`rgb(${r},${g},${b})`)
    return `rgb(${r},${g},${b})`
}
let buttons = document.querySelectorAll('button')
// let h1 = document.querySelector('h1')
// console.log(h1)
for(let button of buttons){
    button.addEventListener('click', colorize)
}

function colorize () {
    console.log(this)
    this.style.backgroundColor = randomNumber()
}
