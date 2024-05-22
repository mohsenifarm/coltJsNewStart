// thruthy and falsey
// false
// 0
// NaN
// undefined
// ""
// var userInput = prompt('enter somthing');
// if(userInput){
//     console.log("truthy")
// } else {
//     console.log('falsey')
// }

//////////////////
// logical operator
// &&
// you can play outside if you done your homework and 
// wash the dishes==>> you have to done both 

// const password = prompt("Enter password!!!");
// if((password.length >= 6 )&& (password.indexOf(' ') === -1)){
//     console.log('Valid Password')
// } else {
//     console.log('Password is not valid')
// }

// OR operator ||
// just need one side be true 
// you can play outside if you done your homeworks or
// whash the dishes 
// that means if you done homeworks or whashe the dishes
// can play

// example
// 0-5 pay 10$
// 5-10 pay 10$
// 10-65 pay 10$
//above 65 free
// let age = prompt('Enter your age!!!');
// if((age < 5 && age > 0) || age >= 65){
//     console.log('FREE')
// } else if(age < 10 && age >= 5) {
//     console.log('10$')
// } else if(age < 65 && age >= 10) {
//     console.log('20$')
// } else {
//     console.log('NOT MAKE SENSE')
// }


/////////
// NOT operator !
// let firstName = prompt('Enter Your First Name!!');
// if(!firstName){
//     firstName = prompt('Enter Again!!!!!')
// }


///////////////////////
// swich statemant
let day = prompt('Enter Number Of DAy!!!');
day = parseInt(day);
switch (day) {
    case 1: 
        console.log('Monday')
        break;
    case 2: 
        console.log('Tuesday')
        break;
    case 3: 
        console.log('Wendsday')
        break;
    case 4: 
        console.log('Thursday')
        break;
    case 5: 
        console.log('Friday')
        break;
    case 6: 
        console.log('Saturday')
        break;
    case 7: 
        console.log('Sunday')
        break;
    default: 
        console.log('Not a DAY!!!!')
}