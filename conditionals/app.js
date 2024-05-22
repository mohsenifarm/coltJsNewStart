// console.log('=>>Connected')
// let userAge = prompt('Enter your age');
// userAge = parseInt(userAge)
// console.log(userAge)
// if(userAge === 18) {
//     console.log('Your age is at edge');
// } else if (userAge > 18) {
//     console.log('Above age')
// } else {
//     console.log('you are under age')
// }
// 0-5 free 
// 5-10 child $10
// 10-65 adult $20
// 56+ seniors $10 
// var ageRange = prompt('Enter Your Age!!');
// ageRange = parseInt(ageRange);
// console.log(ageRange);
// if (ageRange < 5) {
//     console.log('Pay Free')
// } else if (ageRange < 10) {
//     console.log("Pay Child Price!! $10")
// } else if (ageRange < 65) {
//     console.log('Pay Adult Price!!! $20')
// } else if (ageRange >= 65) {
//     console.log('You Are Senior!!! Pay $10')
// }
const password = prompt("Enter Password PLZ!!!");
if(password.length >= 6){
    if(password.indexOf(' ') === -1){
        console.log('VALID')
    }else {
        console.log('Passwor Can not includ spaces')
    }
} else {
    console.log('password should be more than 6 charactor')
}