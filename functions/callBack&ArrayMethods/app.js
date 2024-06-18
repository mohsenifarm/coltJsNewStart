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
// console.log(firstNames)
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
// let titles = movies.map(movie => movie.title);
// console.log(titles)


//Filter Array callback method
//cerates a new array with all elements that pass the test

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,20];
// let odds = nums.filter(n => {
//     return n % 2 === 1
// });
// console.log(odds)
// const movies =  [
//     {
//         title: 'Amadeus',
//         score: 99,
//         year: 1984
//     },
//     {
//         title: 'Sharkando',
//         score: 35,
//         year: 2000
//     },
//     {
//         title: '13 Going on 30',
//         score: 70,
//         year: 2004
//     },
//     {
//         title: 'Stand by me',
//         score: 85,
//         year: 1985
//     }
// ];
// let highScore = movies.filter(e => {
//     return e.score > 80
// });
// console.log(highScore)
// let lowScore = movies.filter(movie => movie.score < 80);
// console.log(lowScore)
// console.log('Recent Movies');
// const recentMovies = movies.filter(e => e.year > 2000);
// console.log(recentMovies)

// example : 
// function validUserNames(usernames) {
//     return usernames.filter(user => user.length < 10)
//   };
//   console.log(validUserNames(['payam', 'Alireza aliakbari']))

//EVERY : tests whether all elements in the array pass the provided function.
//it returns a boolean value

// const words = ['dog', 'cat', 'bag', 'sag'];
// let everyEl = words.every(e => e.length === 3);
// console.log(everyEl)
// let extwo = words.every(e => e[length-1] === 'g');
// console.log(extwo)

//Some: simmiler to every, but return true if any of elements pass the test function

// const words = ['dog', 'jello', 'log', 'cupcake', 'bag', 'wag'];
// let someTestOne = words.some(e => e.length === 3);
// console.log(someTestOne)

//reduce : exacutes a reducer function on each element of array,
//resulting in a single value

// let arr = [3, 5, 7, 9, 11];
// //accumulator holds the sum and currentValue is the current value of element
// let result = arr.reduce((accumulator, currenValue) => {
//     return accumulator + currenValue
// })
// console.log(result)

// example
// let prices = [9.99, 1.50, 19.99, 49.99, 30.50];
// let sumPrice = prices.reduce((total, price) => {
//     return (total + price) 
// });
// // console.log(sumPrice);
// const minPrice = prices.reduce((min, price) => {
//     if(price < min){
//         return price
//     } else {
//         return min
//     }
// });
// console.log(minPrice)
// const maxPrice = prices.reduce((max, price) => {
//     if(price > max) {
//         return price
//     } else {
//         return max
//     }
// });
// console.log(maxPrice)

//example
const movies =  [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharkando',
        score: 35,
        year: 2000
    },
    {
        title: '13 Going on 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand by me',
        score: 85,
        year: 1985
    }
];
let highestRatedMovie = movies.reduce((highest, movie) => {
    if(movie.score > highest.score) {
        return movie
    } else {
        return highest
    }
});
console.log(highestRatedMovie)