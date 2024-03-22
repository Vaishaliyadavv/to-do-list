//SELECT ELEMENTS 
const form = document.getElementById('todoform');
const todoInput = document.getElementById('newtodo');

//VARS
let todos = [];

// FORM SUBMIT
form.addEventListener('submit', function (event) {
    event.preventDefault();

    saveTodo();

});


// SAVE TODO

function saveTodo() {
    const todoValue = todoInput.value

    const todo = {
        value: todoValue,
        checked: false,
        color: '#' + Math.floor(Math.random() * 16777215).toString(16)

    }

    todos.push(todo);

    console.log(todos);
}