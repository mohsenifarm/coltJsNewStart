let button = document.querySelector('button');
button.addEventListener('click', (event) => {
    console.log(event.target.className)
})
let inp = document.querySelector('input');
inp.addEventListener('click',function(evt){
    console.log(evt.target.value)
})
// inp.addEventListener('keydown', function (e) {
//     // console.log(e)
//     // console.log(e.key)
//     // console.log(e.code)
//     switch (e.code) {
//         case 'ArrowUp':
//             console.log('UP')
//             break
//         case 'ArrowDown':
//             console.log('DOWN')
//             break
//         case 'ArrowLeft':
//             console.log('LEFT')
//             break
//         case 'ArrowRight':
//             console.log('RIGHT')
//             break
//         defult:
//             console.log('IGNORED')
//     }
// })
