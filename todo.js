/*
 In the  todo app we have 
 -new, 
 -list,
 -delete, 
 -quit
*/

let userInput = prompt('What do you want to do?\n\Please type any of: new, list, delete, quit')
const todos = [];

while (userInput !== 'quit' && userInput !== 'q'){
    if (userInput === 'list'){
        console.log('*****************')
    for(i=0; i<todos.length; i++){
        console.log(`${[i]}: ${todos[i]}`)
    }
        console.log('*****************')
    }else if( userInput === 'new'){
        const newTodo = prompt('What is the new todo? Type one')
        todos.push(newTodo)
        console.log(`You added: ${newTodo}`)
    }else if(userInput === 'delete'){
       const index = parseInt(prompt('What do yo want to delete? Enter the index'))
       if(!Number.isNaN(index)){
        const deleted = todos.splice(index, 1)
        console.log(`You have deleted ${deleted[0]}`)
       }else{
           alert('the index you enter is invalid')
       }
    }
    userInput = prompt('What do you want to do?\n\Please type any of: new, list, delete, quit')
}
console.log('Ok! you quit the App')