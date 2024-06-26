// const firstBold = document.querySelector('b');
// console.log(firstBold);
// const paragraph = firstBold.parentElement;
// console.log(paragraph)
// console.log(paragraph.children)
// console.log('netx ' + firstBold.nextElementSibling)
// console.log('previous ' + firstBold.previousElementSibling)
const newImg = document.createElement('img')
// console.log(newImg)
newImg.src = 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvZGluZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D';
const newH2 = document.createElement('h2');
newH2.innerHTML = 'HI';
// console.log(newH2.innerText)

document.body.appendChild(newH2)

document.body.appendChild(newImg)
const para = document.querySelector('p');

const boldTag = document.createElement('b');
boldTag.innerText = 'THIS IS BOLD //';
para.prepend(boldTag)
para.append(boldTag)
const h1 = document.querySelector('h1');
const h2 = document.createElement('h2');
h2.append('This become after h1');
// console.log(h2.innerText);
// syntax 
//targetElement.insertAdjacentElement(position,element)
h1.insertAdjacentElement('afterend', h2)
// console.log(h1.nextElementSibling)
const h4 = document.createElement('h4');
h4.innerHTML = 'This is h4';
h1.after(h4)
h1.before(h4)

// let container = document.querySelector('.container');
// // console.log(container)
// let btn = document.createElement('button');
// btn.innerText = 'btn'
// // console.log(btn.innerHTML)
let i = 0
while (i < 100) {
    let container = document.querySelector('.container');
    // console.log(container)
    let btn = document.createElement('button');
    btn.innerText = 'btn'
    // console.log(btn.innerHTML)
    container.appendChild(btn)
    i++

}

//remove child
let firstChild = document.querySelector('li');
// let parent = firstChild.parentElement
// console.log(parent)
// parent.removeChild(firstChild)
//or
firstChild.remove();