const form = document.querySelector('form');
const input = document.querySelector('input');
const ul =document.querySelector('ul')
form.addEventListener('submit',(evt) => {
    evt.preventDefault();
    console.log(evt);
    if(input.value && typeof(input.value !== 'number')) {
        let li = document.createElement('li');
        li.innerText = input.value
        ul.appendChild(li);
        input.value = ""
    }
})



//for deleting lis i get ul(parent of lis) and use event delegation by
//using event target
ul.addEventListener('click',(evt)=>{
    evt.target.nodeName ==='LI' && evt.target.remove()
})