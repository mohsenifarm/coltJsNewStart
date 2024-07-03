const input = document.querySelector('input');

// const ul = document.querySelector('ul')
// input.addEventListener('keydown',(evt) => {
//     if(evt.key === 'Enter') {
//         const li = document.createElement('li');
//         li.innerText = input.value;
//         ul.append(li)
//         input.value = ''
//     }
// })

const h2 = document.querySelector('h2');
input.addEventListener('input',(evt) => {
    console.log(evt);
    h2.innerText = input.value
})



//new quick course vent bubbling
function getColor(){
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return `rgb(${r},${g},${b})`
}



const div = document.querySelector('div');
const unique = document.querySelector('#unique');
unique.addEventListener('click',(evt)=> {
    div.style.backgroundColor = getColor()
    evt.stopPropagation()
})
div.addEventListener('click',()=>{
    div.classList.toggle('hide')
})