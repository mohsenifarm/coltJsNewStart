// let colors = ['red','green','yellow'];
// //to access to the 3rd letter of first element
// // console.log(colors[0][2]);
// //update an element by assigning to the new value
// colors[0] = 'orange red';
// // console.log(colors)
// //we can change the type of element either
// colors[0] = null;
// // console.log(colors)

// //other example
// let numbers = [1,2,3,4];
// //my array has 4 index and the alst one is 4
// //i do a wierd thing
// numbers[10] = 11;
// // console.log(numbers)
// //printed at console : [1, 2, 3, 4, empty × 6, 11];

// let movieLine = ['Tom', 'Nancy'];
// //add element to end of arry 
// //1.by []
// movieLine[2] = 'Pablo'
// console.log(movieLine);
// //2.use push method(add to end of array);
// movieLine.push('Samad');
// console.log(movieLine);
// //we can push multiple element to an array by using push method
// movieLine.push('Harry', 'Eva')
// //remove an element from end of array
// movieLine.pop();
// console.log(movieLine)
// //we can save the value of element that poped from array to a variable
// var lastPerson = movieLine.pop();
// console.log('last person poped : ',lastPerson)
//remove from begeninig of array whit shif
// let movieLine = ['Tom', 'Nancy','Brad'];
// movieLine.shift();
// console.log(movieLine);
// //add elements to begining of array
// movieLine.unshift('Payam','Ali');
// console.log(movieLine);
// //we can hold the value of removed elemet from beganing of array to a variable
// var firstPerson = movieLine.shift();
// console.log('first Person : ', firstPerson);
// //after i save it in variable it removed from array to ['Ali', 'Nancy', 'Brad']
// console.log(movieLine)

//METHODS
//1.Concat :makes a new aarray that merge 2 arrayes together
//cats and dogs array didn't changed
// let cats = ['blue', 'kitty'];
// let dogs = ['rusty', 'wyatt'];
// //cats element become first elements
// console.log(cats.concat(dogs));
// //dogs element become first elements
// console.log(dogs.concat(cats));
// //i can save the concated array to a variable
// let comboParty = dogs.concat(cats);

// //2. Includ : a boolian method that returns true or false
// console.log(cats.includes('blue')); //returns true
// console.log(cats.includes('Blue')); //returns false

// //3.IndexOf : returns index of an element
// ////comboParty = ['rusty', 'wyatt', 'blue', 'kitty'];
// console.log(comboParty.indexOf('blue'))//return 2
// //remeber:
// //in the string we can find the ondex of character by indexOf
// console.log('Payam'.indexOf('P'))//returns 0
// console.log(comboParty.indexOf('Payam'))//return -1 because not exist

// //4.reverse method thar reverse elements of array in order end to front
// //Poist : this method change the original(distructive method)
// console.log(comboParty);
// console.log(comboParty.reverse())

//5.get copy from portion of array
//syntax : arr.sclice(start, end)<end is optional>

// let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// let copyOfColors = colors.slice(1, 5);
// console.log(copyOfColors);
// //if i want just copy of last 2 or 3 i can do thar with negetive index
// console.log('3 last elements : ',colors.slice(-3))

//splice method change the original content of array
//by removing or replacing existiong element or adding new element
//synatx : arr.splice(start ,delete count ,item ti insert);
//example: 
//delete indigo from colors:
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
console.log(colors);
colors.splice(5,1);
console.log(colors)
colors.splice(5,1,'purple');
console.log(colors)
//add between red and orange and no deleting item
colors.splice(1,0,'red-orange');
console.log(colors);
colors.splice(4,0,'light-green','lemon');
console.log(colors);

