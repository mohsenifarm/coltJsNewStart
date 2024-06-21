//Default Praams

function rollDie(nuSides){
    if(nuSides === undefined){
        nuSides = 100
    }
    return Math.floor(Math.random() * nuSides) + 1
};
// console.log(rollDie())

/////????? OR ???? /////
////numsides = 100 means if it's not true it equal to 100
function rollDie(nuSides = 100) {
    return Math.floor(Math.random() * nuSides) + 1
};
// console.log(rollDie())
function greet(msg = 'Hey There!', person = 'I dont know you????') {
    console.log (`To ${person} : ${msg}`)
};

//#########
//SPREAD ==> syntax => ...
// it makes every argument as seperate with spase
// like :
// console.log('h', 'e', 'l')
// or 
// console.log(...'hel')
//point
const max = Math.max(1,2,3,4,5,6,88,8);
const min = Math.min(1,2,3,4,5,6,88,8);

const nums = [1,2,3,4,5,6,88,8];
// console.log(...nums) //returns 1 2 3 4 5 6 88 8
const maxNum = Math.max(nums)
// console.log(maxNum) //return NaN
let maxNumSpreadSyntax = Math.max(...nums);
// console.log(maxNumSpreadSyntax) //returns 88

//#####
//spread in array
const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats , ...dogs]

//example : 
let str = 'HELLO';
let strCharArr = [...str];//['H', 'E', 'L', 'L', 'O']

//spread in objects

const feline = { legs: 4, familly: 'Felidae' };
const canine = { isFurry: true, familly: 'Caninae'};
const felineCopy = {...feline, mothersName: 'Big Pussy'}
//below both have familly name and it confilict than 2nd one will win
const bothTogether = {...feline, ...canine}
// console.log(bothTogether)

////###POINT ::::
let obj = {...[2,4,6,8]};
//{0: 2, 1: 4, 2: 6, 3: 8}
//index going to be key

////$$$$$$$
//REST : It looks spread but its not
//rest params
//collect all remainig arguments into an actual array

//example
// function sumAll(...nums) {
//     let total = 0;
//     for(num of nums) {
//         total += num
//     }
//     console.log(total)
//     return total
// };
// sumAll(1,2,3,4)

function sumAll(...nums) {
    return nums.reduce((total, el) => total + el)
}

//good example
//in the code below define gold and siver to 2 specific parameter and rest use after
function raceResults(gold, silver, ...eveyOneElse){
    console.log(`GOLD MEDAL GOES TO : ${gold}`)
    console.log(`SILVER MEDAL GOES TO : ${silver}`)
    console.log(`THANKS TO EVERY ONE ELSE : ${eveyOneElse}`)
}
// raceResults("payam","SHARA","OMID","KIRA","SAEED")


//############
//DESTRACTURING 
//a short, clean syntax to unpack
//*values from arrays
//*properties from object
//into distinct variable

const scores = [23,55,67,89,23,43,12];

// const [gold, silver] = scores;
//it like gold = scores[0] and silver = scores[1]

const result = ['Payam Mohseni', 'Shara ghazarian', 'Omid khadivi'];
const [gold, silver, bronze] = result
gold; // Payam Mohseni
silver; //shara ghazarian
bronze; //omid khadivi

const [fastest, ...eveyOneElse] = result;
fastest; // payam mohseni
eveyOneElse; //['shara ghazarian', 'omidkhadivi']

const user = {
    email: 'payam.mohseni013@gmail.com',
    password: 'samnos1234',
    firstName: 'Payam',
    lastName: 'Mohseni',
    born: 1990,
    died: 2050,
    bio: 'Payam Mohseni was a creative person that creat most powerfull corpration',
    city: 'Los Angeles',
    state: 'Californa'
};

// const firstName = user.firstName;
// const lastName = user.lastName;
//or
const { email } = user
//use my own name
const {born: bornYear} = result //bornYeat = 1990

//add property
const {education = 'Software Engineer', lasy = true} = user;

// function fullName (user) {
//     return `${user.firstName} ${user.lastName}`
// }
// console.log(fullName(user))

//or

// function fullName(user){
//     const {firstName, lastName} = user
//     return `${firstName} ${lastName}`
// }
// console.log(fullName(user))

// or 
// function fullName({firstName, lastName}) {
//     return `${firstName} ${lastName}`
// }
// console.log(fullName(user))

const movies = [
    {
        title: 'Gerdab',
        year: 2001,
        score: 100
    },
    {
        title: 'Scar Face',
        year: 1985,
        score: 99
    }
];
movies.filter((movie) => movie.score >= 90);
movies.filter(({ score }) => score >= 90);

movies.map((movie) => {
    return `${movie.title} (${movie.year} is rated ${movie.score})`
})
//or
movies.map(({title, year, score}){
    return `${title} (${year} is rated ${score})`

})