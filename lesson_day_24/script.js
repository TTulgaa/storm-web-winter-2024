let checkedTodo = {}
if (localStorage.getItem('todo') === null){
    checkedTodo = {
        name: 'learn js',
        completed: false
    }
}
else{
    checkedTodo = JSON.parse(localStorage.getItem('todo'))
}
localStorage.setItem('todo',JSON.stringify(checkedTodo))
const todos = document.getElementsByClassName('todos'[0]);
const liElement = document.createElement('li');
liElement.textContent = checkedTodo.name;

console.log(todos)
if(checkedTodo.completed){
    liElement.classList.add('completed')
}
liElement.addEventListener('click', function(){
    checkedTodo.completed= !checkedTodo.completed
    localStorage.setItem('todo', JSON.stringify(checkedTodo))
    if(checkedTodo.completed){
        liElement.classList.add('completed')
    }
    else{
        liElement.classList.remove('completed')
    }
    
})
