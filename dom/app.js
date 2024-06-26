// // DOM stand for Documaent Object Model 
// //selecting

// //1.getElementById
// let banner = document.getElementById("banner");
// // console.log(banner)
// let toc = document.getElementById('toc');
// // console.log(toc)
// // console.dir(toc)
// let imgs = document.getElementsByTagName('img');
// // console.log(imgs)
// // for(img of imgs) {
// //     console.log(img)
// // }
// let squareImages = document.getElementsByClassName('square');
// // console.log(squareImages)

// //############### querySelector ###############
//querySelecor just give us the first match IF you want get all for
//example tag names we should use quarySelectoeAll
// let banner = document.querySelector('#banner');
// // console.log(banner);


// let thirdSuqareClass = document.querySelector('img:nth-of-type(2)');
// let javaAtag = document.querySelector('a[title="Marco Polo"]')

// let allImages = document.querySelectorAll('img');
// // console.log(allImages)


// let squareImages = document.querySelectorAll('.square');
// // console.log(squareImages)

///////////////////////////////////////////////////////////
//manipulating
// ##################################
// const h1 = document.querySelector('h1');
// console.dir(h1)
// h1.innerHTML = 'PAYAM'

//just retrive the text inside the first paragragh
const justCheck = document.querySelector('p').innerText
// console.log(justCheck)

//now manipulating the text
const firstParagraph = document.querySelector('p');
firstParagraph.innerText = 'Changed'

// let bTags = document.querySelectorAll('h2 b');
// console.log(bTags)
// for(b of bTags){
//     console.log(b)
//     // setTimeout(() => {
//     //     console.log(b)
//     // },700)
// }

const allLinks = document.querySelectorAll('a');

// for(let link of allLinks) {
//     link.innerHTML = 'I AM A LINK'
// }
const h1 = document.querySelector('h1');
h1.innerHTML = '<i>CHANGE IT AND INSERT I</i>'

//#########ATRIBUTES
const linkFirst = document.querySelector('a');
// console.log(linkFirst.href)
console.log(linkFirst.getAttribute('href'))

//set id attribute
linkFirst.setAttribute('id', 'payam');

//change the input type

const inp = document.querySelector('input[type="text"]');
console.log(inp)
// inp.setAttribute('placeholder', 'SET ATTRIBUTE')
inp.type = 'password'
//or
inp.setAttribute('type', 'checkbox')

//############change style
h1.style.color = 'red'
h1.style.fontWeight = '100'
h1.style.border = '1px solid olive'

for(let link of allLinks) {
    link.style.textDecorationStyle = 'wavy';
    link.style.textDecorationColor = 'rgb(0, 108, 134)'
}
//##############
//classList
let h2 = document.querySelector('h2');
//1 way
h2.setAttribute('class','purple');
h2.setAttribute('class', 'border');
//2 way
h2.classList.add('purple')
h2.classList.add('border')
h2.classList.remove('purple');
h2.classList.contains(border);
h2.classList.toggle('purple')
h2.classList.toggle('purple')
h2.classList.toggle('purple')
let firstBold = document.querySelector('b');
let paragraphh = firstBold.parentElement
console.log(`this : ${paragraphh}`)
console.log('wooooooo')
alert('j')