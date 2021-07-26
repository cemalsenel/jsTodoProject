const todoList = [];

class TodoList{
    constructor(listElement){
        this.listElement = listElement;
    }

    add(todoText){
        const todoObject ={
            id:todoList.length,
            todoText : todoText,
            isDone : false,
        };
        todoList.push(todoObject);
        this.display();
    }

    done(todoId){
    const selectedTodoIndex = todoList.findIndex((item) => item.id == todoId);
    todoList[selectedTodoIndex].isDone = true;

    this.display();
    }

    display(){
        this.listElement.innerHTML = '';

        todoList.forEach(item => {

        const todoElement = document.createElement('li');

        todoElement.innerText = item.todoText;
        todoElement.setAttribute('data-id', item.id);

        if(item.isDone){
            todoElement.classList.add("checked");
        }
        todoElement.addEventListener("click", function(e){
            const selectedId =  e.target.getAttribute('data-id');
           myTodoList.done(selectedId);
        })

        this.listElement.appendChild(todoElement);

    });
    }
}

const listSection = document.querySelector('#myUL');

const myTodoList = new TodoList(listSection);

document.querySelector('#todo_button').addEventListener("click", function(){
    const todoText = document.querySelector('#myInput').value;

    myTodoList.add(todoText);
    
})