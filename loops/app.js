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

// let max = parseInt(prompt('Enter Your MAX Number?!!!'));
// while(!max) {
//     max = parseInt(prompt('Enter Valid Number!!!'))
// }
// let randomNum = Math.floor(Math.random() * max + 1);
// console.log(`RANDOM IS ${randomNum}`);

// let guess = prompt('Enter Guess!!');
// let attemptGuessNumbers = 1;
// while (parseInt(guess) !== randomNum){
//     if (guess === 'exit') break;
//     guess = parseInt(guess)
//     if (guess > randomNum){
//         guess = prompt('High')
//          attemptGuessNumbers++

//     } else if (guess < randomNum){
//         guess = prompt('LOW')
//          attemptGuessNumbers++

//     } else {
//         guess = prompt('Invalid guess. Please enter number or type(exit)')
//     }
// }
// if (guess === 'exit') {
//     console.log('you ExItEd')
// } else {
//     console.log('CONGRATS!!!');
//     console.log(`Numer of guess is ${attemptGuessNumbers}`)
// }

//FOR OF LOOP

// const colors = ['RED', 'BLUE', 'GREEN', 'PURPLE'];
// for(let i = 0; i < colors.length; i++) {
//     console.log(colors[i])
// }
// //or
// for(let color of colors){
//     console.log(`visit colors.com/${color}`)
// }

// let seatinChart = [
//     ['Payam', 'Shara', 'Omid'],
//     ['Shawn', 'Jim', 'Kim'],
//     ['Alex', 'Rebeca', 'Anita', 'Sara']
// ];
// for(let i = 0; i < seatinChart.length; i++) {
//     // console.log(seatinChart[i])
//     for(let j = 0; j < seatinChart[i].length; j++) {
//         console.log(seatinChart[i][j])
//     }
// }
//or
// for (let seats of seatinChart){
//     // console.log(seats);
//     for(let seat of seats) {
//         console.log(seat)
//     }
// }

// //example for string
// for(let char of 'PAYAM') {
//     console.log(char)
// }
// const numbers = [1,2,3,4,5,6,7,8,9]; 
// for(let num of numbers){
//     let square = num * num
//     console.log(square)
// }
// /////////////// Iterating around *OBJECT*

// const testScores =  {
//     payam: 98,
//     ali: 32,
//     omid: 100,
//     shara: 12,
//     hassan: 9
// };
// for (let person in testScores){
//     console.log(`${person} score is : ${testScores[person]}`)
// }

////////OBJECT METHODS
// let keys = Object.keys(testScores);
// console.log(keys) //returns : ['payam', 'ali', 'omid', 'shara', 'hassan']


// let val = Object.values(testScores);
// console.log(val)  //returns : [98, 32, 100, 12, 9]


// let enteries = Object.entries(testScores);
// console.log(enteries); 
//returns : 
// 0
// : 
// (2) ['payam', 98]
// 1
// : 
// (2) ['ali', 32]
// 2
// : 
// (2) ['omid', 100]
// 3
// : 
// (2) ['shara', 12]
// 4
// : 
// (2) ['hassan', 9]

//example : 
// const testScores =  {
//     payam: 98,
//     ali: 32,
//     omid: 100,
//     shara: 12,
//     hassan: 9
// };
// let keys = Object.keys(testScores);
// console.log(keys)  //['payam', 'ali', 'omid', 'shara', 'hassan']
// for(let key of keys){
//     console.log(key)
// }
