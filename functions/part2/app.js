//SCOPE
// variable inside the functions are internal variables and we cant access them outside the function
//beacause they are not in globale scope
// example
// var total = 0;
// function collect () {
//     total = 7;
// }
// console.log(total)//returns 0 because total is in globale 
//now call the function and update the global
// collect();
// console.log(total)//retuns 7


//POINT :
//if use VAR inside the conditioanals like loops and if statements
//we can access to variable outside the conditional
// for(let i = 0; i < 9; i++){
//     let p = 'payam';
//     var m = 'mohseni'
// };
// console.log(p)
// console.log(',,,,,,,,,',m)

//Lexical scope
//access to array's of parent function
function bankRobbery(){
    const heros = ['spider man', 'wolvarine', 'black panter'];
    function cryForHepl(){
        for(hero of heros) {
            console.log(hero)
        }
    }
    cryForHepl()
}
// bankRobbery();

/////////////////////////////////////////////////
// function experssion
const add = function (x, y) {
    return x + y;
}
// console.log(add(3,4))

//Hint : functions can accept function as parameter or arguments and
// functions can retuen a function 
function callTwice(func) {
    func()
    func()
};
function rollDie() {
    let random = Math.floor(Math.random() * 9) + 1;
    console.log(random)
}
// callTwice(rollDie);

function callTenTimes(f){
    for(let i = 0; i < 10; i++){
        f()
    }
}
// callTenTimes(rollDie);

////returning a function

// function isBetween(min, max){
//     return function (num) {
//         return num >= min && num <= max
//     }
// };
// let child = isBetween(1, 18);
// console.log(child);
// let calcAge = parseInt(prompt('Whats Your Age?!'));
// console.log(calcAge)
// if(!child(calcAge)){
//     alert('YOU ADULT!!')
// } else {
//     alert('UNDER AGE')
// }
// console.log(child(parseInt(prompt('Tell me you age'))));
////******************** 
//METHODS
//a method is simply a function that has been placed as a property on an object

// const math = {
//     multiply : function (x, y) {
//         console.log(x * y);
//         return x * y
//     },
//     divide : function (x, y) {
//         console.log(x / y);
//         return x / y
//     },
//     squre : function (x) {
//         console.log(x * x)
//         return x * x
//     }
// };
// let q = prompt('What Kind of Calcute you want to do??')
// let x = parseInt(prompt('Type x'));
// let y = parseInt(prompt('Type y'));

// function answer (str) {
//     if(str === 'multiply'){
//        let mul = math.multiply(x, y);
//        alert(`${x} * ${y} is : ${mul}`)
//        return mul;
//     } else if(str === 'divide') {
//         let div = math.divide(x, y);
//         alert(`${x} / ${y} is : ${div}`);
//         return div
//     } else if(str === 'squre'){
//         let sqX = math.squre(x);
//         let sqY = math.squre(y);
//         alert(`${x} ^ 2 is : ${sqX} && ${y} ^ 2 is : ${sqY}`);
//         return true
//     }
// };
// answer(q);

//example: 
//includes method

// let arr = ['payam', 'omid', 'shara'];

// function include (str) {
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === str) return true;
//     }
//     return false
// };
// console.log(include('pyam'))

////************************ 
// This : use this inside the method that refer to object 

// const cat = {
//     name: 'Meshki',
//     color : 'Black',
//     breed: 'Persian st',
//     meow(){
//         console.log(`${this.name} says : MEOW MEOW`)
//         // console.log('MEOW MEOW MEOW')
//     }
// }

////////////
// const hen = {
//     name: 'Helen',
//     eggCount: 0,
//     layAnEgg(){
//         this.eggCount +=1
//     }
// };
// console.log(hen.name);
// console.log(hen.eggCount);
// hen.layAnEgg();
// hen.layAnEgg();
// console.log(hen.eggCount);


///////********** */
//try / catch
//if i get error my code will stop and dont let the rest of code exacute
////hande this situation by using try and catch
function yell (str) {
    try {
    console.log(str.toUpperCase().repeat(2))
    } catch{
        alert('ERROR!!')
    }
};
yell(123)
yell('payam ');