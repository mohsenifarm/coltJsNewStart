const form = document.querySelector('#form');
const username = document.querySelector('#username');
//const tweetInput = form.elements.username
const tweet = document.querySelector('#tweet');
const main = document.querySelector('#main');

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const div = document.createElement('div');
    const user = document.createElement('h3');
    const content = document.createElement('p');

    if (username.value) {
        user.innerText = username.value;
    } else {
        user.innerText = 'UnKnown'
    }
    if (tweet.value) {
        content.innerText = tweet.value
    } else {
        content.innerText = 'Nothing to tweet'
    };
    div.append(user);
    div.append(content);
    main.append(div)
    div.style.borderBottom = '1px solid black';
    user.style.backgroundColor = randomBackgroun();
    user.style.borderRadius = '30%';
    user.style.backgroundSize = 'cover'


    username.value = ""
    tweet.value = ""

})

//style it
form.style.borderBottom = '1px solid gray'
function randomBackgroun() {
    let r = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let a = 0.4
    return `rgb(${r}, ${g}, ${b},${a})`
}


// const kir = document.querySelector('#kir');

// const b = document.createElement('b')
// const li = document.createElement('li');
// li.innerText = 'kiri';
// console.log(b)
// li.append(b)
// kir.append(li)
// console.log(li)