let todoInput = document.getElementById("todoInput")
let todoList = document.getElementById("todoList")

function addTodo(){
    let newLi = document.createElement("li")
    newLi.className = "todo-item"
    let newSpan = document.createElement('span')
    newSpan.innerHTML = todoInput.value
    let newI = document.createElement("i")
    newI.className= "fa-regular fa-trash-can"
    newI.addEventListener('click', (e)=>{
        newLi.remove()
    })
    newLi.append(newSpan, newI)
    todoList.append(newLi)
    todoInput.value = ''
}