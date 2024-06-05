let input;
const todos = [];

while (input !== 'quit' && input !== 'q') {
    input = prompt('What would you like to todo?');

    if (input === 'list') {
        console.log('*****************');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`)
        }
        console.log('*****************');
    } else if (input === 'new') {
        let newTodo = prompt('Add New Todo To List!!');
        todos.push(newTodo)
        console.log(`${newTodo} added to the list.`)
    } else if(input === 'delete') {
        let del = parseInt(prompt('Which items you want to delete(number)'));
        if(del && todos.includes(todos[del])){
            const deleteItem = todos.splice(del, 1)
            console.log(`${deleteItem} deleted from list,`)
        } else {
            console.log('unknown number')
        }
    }
}
console.log('Quit the app!')
console.log('----------------')

