// ***
// forEach 

// let numbers =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,1819,20,30];

//even fizz
//% 3 buzz
//even and odd fizbuzz

// numbers.forEach(function(e){
//     if(e % 2 === 0 && e % 3 !== 0) {
//         console.log(`${e} is fizz`)
//     } else if (e % 3 === 0 && e % 2 !== 0) {
//         console.log(`${e} is buzz`)
//     } else if (e % 2 === 0 && e % 3 ===0) {
//         console.log(`${e} is fizzbuzz`)
//     }
// })

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99
//     }, 
//     {
//         title: 'Stand by me',
//         score: 85
//     },
//     {
//         title: 'Parasite',
//         score: 95
//     },
//     {
//         title: 'Alien',
//         score: 90
//     }
// ];
// movies.forEach(function(e){
//     // console.log(e)
//     if(e.score >= 90) {
//         console.log(`${e.title} score is ${e.score}/100`)
//     }else {
//         console.log(`${e.title} score is ${e.score}/100 *LESS THAN 90*`)
//     }
// })

// *** MAP 

// create a new array with the results of calling a callback on every element in the array
//synatax: array.map(function())//same is forEach but create a new array
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 30];
// let doubles = numbers.map(function (num) {
//     return num * 2;
// });
// console.log(doubles)

//example :
// const movies = [
//         {
//             title: 'Amadeus',
//             score: 99
//         }, 
//         {
//             title: 'Stand by me',
//             score: 85
//         },
//         {
//             title: 'Parasite',
//             score: 95
//         },
//         {
//             title: 'Alien',
//             score: 90
//         }
//     ];
//     movies.forEach(function(e){
//         // console.log(e)
//         if(e.score >= 90) {
//             console.log(`${e.title} score is ${e.score}/100`)
//         }else {
//             console.log(`${e.title} score is ${e.score}/100 *LESS THAN 90*`)
//         }
//     });

//     let moviesTitle = movies.map(function(movie){
//         return movie.title.toUpperCase()
//     });
//     console.log(moviesTitle)

// DO NOT ALTER THE FOLLOWING CODE:
// const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

// // Write your code here
// const firstNames = fullNames.map(function(fn){
//     return fn.first
// });
// ***
//Arrow function (mostly expression function)

// const square =  (x) => {
//     return x * x;
// }
// const greet = (personsName) => {
//     return `Hey ${personsName}`
// }

// const rollDie = () => {
//     return Math.floor(Math.random() * 10) + 1;
// }

////// OR ////////insted of return keyword change parantecis with curly braces

// const rollDie = () => (
//     Math.floor(Math.random() * 10) + 1
// )
//one line arrow funtion 

// const add = (x, y) => x + y;

//wrapup arrow function

const movies = [
        {
            title: 'Amadeus',
            score: 99
        }, 
        {
            title: 'Stand by me',
            score: 85
        },
        {
            title: 'Parasite',
            score: 95
        },
        {
            title: 'Alien',
            score: 90
        }
    ];
let titles = movies.map(movie => movie.title);
console.log(titles)