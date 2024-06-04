// for (let i = 0; i <=10; i++){
//     console.log(i)
// }

//print even numbers from 0 - 10
// for (let i = 0; i <= 100; i++){
//     if(i % 2 === 0 && i !== 0){
//         console.log(i)
//     } else if(i !== 0) {
//         console.log('odd ',i)
//     } else {
//         console.log('ziro')
//     }
// }

//count down even
// for(let i = 100; i >= 0; i--){
//     if(i !== 0 && i % 2 === 0){
//         console.log(i)
//     }
// }
// for(let i = 100; i >= 0; i-=10){
//     console.log(i)
// }
// var arr =  [0,1,2,3,'4',5,6,7,8,9];
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }
//or
// var  colors = ['red', 'bluee', 'green', 'oreange'];
// colors.forEach((e) => {
//     console.log(e)
// })
//nested loops
// var students =[
//     ['ali', 'ashkan', 'payam'],
//     ['aynaz', 'parinaz', 'malihe','mahshid','sevda'],
//     ['nazila', 'mona', 'elahe']
// ];
// for(let i = 0; i < students.length; i++){
//     // console.log(students[i])
//     for(let j = 0; j < students[i].length; j++){
//         console.log(students[i][j])
//     }
// }
// var cars = [
//     ['pride','saina','quik','shahin'],
//     ['206 pejoat','rana', 'dena'],
//     ['camry', 'yaris', 'corrola', 'vensa'],
//     ['forte', 'sportage', 'optima', 'soal']
// ];
// for(let i = 0; i < cars.length; i++){
//     console.log(cars[i])
//     for(let j = 0; j < cars[i].length; j++){
//         console.log(cars[i][j])
//     }
// }
////or
// cars.forEach(arr => {
//     console.log(arr);
//     arr.forEach(e => {
//         console.log(e)
//     })
// })
////while loop
// var arr = ['a','b', 'c', 'd', 'e'];
// let i = 0
// while(i < arr.length){
//     console.log(arr[i]);
//     i++
// }
// var guessNumber = 11111;
// var random = Math.floor(Math.random() * 100)
// var arrGuess = [];
// console.log(random)


// while (guessNumber != random) {
//     guessNumber = prompt('Enter your guess number between 0 to 10!!');
//     arrGuess.push(guessNumber);
//     console.log(arrGuess)
//     if(guessNumber == random) break;
// }





// var secret = 'star';
// let userAnswer = '';
// let userKeys = []
// while(userAnswer !== secret){
//     userAnswer = prompt('Write the secert key!!!')
//     userKeys.push(userAnswer)
//     console.log(userKeys)
// }

let max = parseInt(prompt('Enter Your MAX Number?!!!'));
while(!max) {
    max = parseInt(prompt('Enter Valid Number!!!'))
}
let randomNum = Math.floor(Math.random() * max + 1);
console.log(`RANDOM IS ${randomNum}`);

let guess = prompt('Enter Guess!!');
let attemptGuessNumbers = 1;
while (parseInt(guess) !== randomNum){
    if (guess === 'exit') break;
    attemptGuessNumbers++
    if (guess > randomNum){
        guess = prompt('High')
    } else {
        guess = prompt('LOW')
    }
}
if (guess === 'exit') {
    console.log('you ExItEd')
} else {
    console.log('CONGRATS!!!');
    console.log(`Numer of guess is ${attemptGuessNumbers}`)
}

// let maximum = parseInt(prompt('What is your maximum number?'));
// while(!maximum) {
//     maximum = prompt('Just write a number PLZZZZ?');
// };

// let random = Math.floor(Math.random() * maximum) + 1;
// console.log(random)

// let guess = prompt(`Guess The Random Number(1 - ${maximum} )`);
// console.log('GUESS : ',guess);

// while(parseInt(guess !== random)){
//     if(guess === 'q') break;
//     if(guess > random) {
//         guess = prompt('Your guess is higher than random')
//     } else {
//         guess = prompt('Your Guess Is Less Than Random!!')
//     }
// }
// if(guess === 'q') {
//     console.log('You Left The Game')
// } else {
//     console.log('YOY WIN!!!!')
// }