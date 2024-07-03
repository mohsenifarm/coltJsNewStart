const form = document.querySelector('form');
let inp = document.querySelector('input');
form.addEventListener('submit',(evt) => {
    evt.preventDefault();
    console.log('SUBMITED');
    console.log(evt.target)
    console.log(inp.value)
    inp.value = ''
})