//1.
//Write a function called sayHello that returns the string "Hello!".
function sayHello() {
    console.log('Hello')
}
// 2.addOne
//takes a single number and returns num + 1
function addOne(num) {
    return num + 1
}

//3.addTwoNumbers
//get two numeric arguments ant return sum of them

function addTwoNumbers(num1, num2) {
    if (typeof (num1) === 'number' && typeof (num2) === 'number') {
        return num1 + num2
    } else {
        console.log('Invalid numbers')
    }
}
//4.sumNumbers
//function that accept an array of number and return sum of array

function sumNumbers(arr) {
    let sum = 0;
    arr.forEach(e => {
        sum += e
    });
    return sum
}

//04.addList
//accept multiple arguments and return sum of them
// function addList (...num) {
//     let sum = 0;
//     if(num.length === 0) {
//         return 0
//     } else {
//         for(let i = 0; i < num.length; i++) {
//             sum += num[i]
//         }
//     }
//     return sum
// }
// or 
function addList(...nums) {
    return nums.reduce((sum, num) => sum + num, 0)
}

//05-computeRemainder
//accepts two numeric arguments and returns the remainder of the division of those two numbers.

function computeRemainder(x, y) {
    if (y === 0) return Infinity;
    return x % y
}

//06-range
// accepts two integers as arguments and returns an array of integers starting with the first argument up to one less than the second argument.

function range(x, y) {
    let arr = []
    if (x <= y) {
        for (let i = x; i < y; i++) {
            arr.push(i)
        }
        return arr
    } else {

        return console.log('First argument must be less than second')
    }

}

//07-reverseUpcaseString
// accepts a single string argument, then returns the string with its characters in reverse orderand converts all characters to uppercase.

function reverseUpcaseString (str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.unshift(str[i].toUpperCase())
    }
    return arr.join('')
}

//08-removeEnds
// ccepts a single string argument, then returns the a string with the first and last characters removed.
function removeEnds (str) {
    let arr = [];
    for(let i = 1; i < str.length; i++) {
        arr.push(str[i])
    }
    // arr.shift()
    arr.pop()
    return arr.join('')
}