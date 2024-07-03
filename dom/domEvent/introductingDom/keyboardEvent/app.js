let button = document.querySelector('button');
button.addEventListener('click', (event) => {
    console.log(event.target.className)
    p.append(arr.join(' / '))
})
let inp = document.querySelector('input');
let p = document.querySelector('p');
let arr = []
inp.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
        console.log(evt.target.value)
        arr.push(evt.target.value)
        evt.target.value = ''
        console.log(arr)

    }
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
