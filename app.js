//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//Event Listeners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterTodo);


//Functions
function addTodo(event){
    //prevent form from submitting
    event.preventDefault();
    

    // create div todo
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //create check mark button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    //create check mark button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //append todoDiv
    todoList.appendChild(todoDiv);

    //clear todoInput
    todoInput.value = "";
}


function deleteCheck(e){
    // how are check
    const item = e.target;

    //delete todo
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        
        //animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });

        
    }

    //check mark
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("complete");
    }
}

function filterTodo(e){
 const todos = todoList.childNodes;
 todos.forEach(function(todo){
    switch(e.target.value){
        case "all":
            todo.style.display = "flex";
            break;
        case "completed":
            if (todo.classList.contains("complete")){
                todo.style.display = "flex";
            }else{
                todo.style.display = "none";
            }
            break;
        case "uncompleted":
            if(!todo.classList.contains("complete")){
                todo.style.display = "flex";
            }else{
                todo.style.display = "none";
            }
            break;
    }
 });
}

