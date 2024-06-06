//syntax
//function name (parameters) {
// ... code ...
//}

//when you want call the function : 
// name(arguments)



function singSong() {
    console.log('Do');
    console.log('Re');
    console.log('Me');
};
// singSong(); //we can call the function berfor defining function

function greet(str) {
    console.log('HELLO ' + str);
};
// greet('Payam')
function love() {
    let name = prompt('Whats your name ?');
    alert(`I Love You ${name}`)
};
// love()

function rollDie(num) {
    let random = Math.floor(Math.random() * num) + 1;
    console.log(random)
}
// rollDie(77);

function average(num1, num2) {
    let avr = (num1 + num2) / 2;
    console.log(avr)
};

// average(20, 30)


function twoParameter(firstName, lastName) {
    console.log(`${firstName} ${lastName} initial is : ${firstName[0].toUpperCase()}.${lastName[0].toUpperCase()}`);
}
// twoParameter('payam', 'mohseni')

function repeat(str, num) {
    let sum = ''
    for (let i = 0; i < num; i++) {
        sum += str
    };
    console.log(sum)
}

// repeat('payam', 3)


//return keyword : 
//1 ) if we need a value and need to do somthng with that value
//we should use return in the function
//2 ) return is break for function (if write whatever after return it's not works).
//return's stops the exacution of function
//3 ) function can return only one thing
//it would be returb object or array or .../only one thing
function sumOfTwo (x, y) {
    if(typeof(x) !== 'number' || typeof(y) !== 'number') return false
    //i didnt use else because i use return and return stop the
    //exacution 
    return x + y;
};

// console.log(sumOfTwo(7,3))
function lastElement (arr) {
    if(arr.length === 0) return null
    return arr[arr.length - 1]
};
// console.log(lastElement([3,5,7]))
// console.log(lastElement([1]) )
// console.log(lastElement([]))

function capitalize(str) {
    let arr = []
    for(let i = 0; i < str.length; i++) {
        arr.push(str[i])
    }
    let upperCase = arr[0].toUpperCase();
    arr.splice(0,1,upperCase);
    return arr.join('')
}

// console.log(capitalize('payam'))

function returnDay(num) {
    let daysOfWeek = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    if(num > 0 && daysOfWeek.includes(daysOfWeek[num - 1])) return daysOfWeek[num - 1];
    return null
}
// console.log(returnDay(8))