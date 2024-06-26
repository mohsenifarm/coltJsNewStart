// events responding to user inputs and actions 
const btn = document.querySelector('#v2');

btn.onclick = function() {
    console.log('clicked')
}

function screem(){
    console.log('AAAAHHHHHHHH!!!!!!')
}
btn.onmouseenter = screem

const h1 = document.querySelector('h1');
h1.onclick = () => {
    alert('clicked on h1')
}

//addEventListener

const btnV3 = document.querySelector('#v3');

btnV3.addEventListener('click', () => {
    alert('clicked')
})
// btnV3.addEventListener('mouseenter', () => {
//     alert('fuckkkkk')
// })
function twist () {
    console.log('twist')
}
function shout () {
    console.log('shout')
}
const tasBtn = document.querySelector('#tas');

tasBtn.addEventListener('click',twist,{once : true})
tasBtn.addEventListener('click',shout)

