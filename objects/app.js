//Object litteral
// const person = {
//     firstName: 'Payam',
//     lastName: 'Mohseni Far',
//     age: 34,
//     phoneNumber: '8185643993'
// };
// console.log(person);
// //access to property value vith []
// console.log(person['firstName'])
// //POINT : in [] you can put experession
// console.log(person['first' + 'Name'])
// //access to property value with . notaion
// console.log(person.lastName)
// //update property
// person.firstName = 'Parinaz';
// console.log(person);
// //create a new property
// person.email = 'm.mohseni.farfar@gmail.com';
// //or
// person['fathersName'] = 'Reza'
// console.log(person);
// //we can create every type of data in object
// person.certificates = ['Software Engineering', 'Forex Trading'];
// console.log(person)

//example : 
const comments = [
    {username: 'Payam', text: 'Good Job', votes: 10},
    {username: 'Omid', text: 'I dont like it', votes: 1}
];
console.log(comments);
console.log(comments[0].username)