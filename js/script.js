// "use strict" 
let todoInput = document.querySelector("#todo-input");
let addBtn = document.querySelector(".btn");
let todoList = document.querySelector("#todo-list");
let arrayData = [];

function getTasks() {
    let getTodo = localStorage.getItem("todoList");
    arrayData = JSON.parse(getTodo) || [];
    sayTodo();
}getTasks();

function addTask() {
    arrayData.push({text: todoInput.value, isDone: false});
    todoInput.value = "";
    sayTodo();
    savaItems();
}

function savaItems() {
    let items = JSON.stringify(arrayData)
    localStorage.setItem('todoList',items);

}

function sayTodo() {
    todoList.innerHTML = ""
    arrayData.forEach((item,index) =>{
        addElement(item,index);
    })
}

function addElement(item,index) {
    let todoItem = document.createElement("li");
    todoItem.setAttribute("class","list-group-item");
    if (item.isDone) {
        todoItem.setAttribute("class","list-group-item done");
    }
    let span = `<span class="text">${item.text}</span>`
    const remove = `<i class="fa fa-remove" onclick="removeItem(${index})"></i>`
    const done = `<i class="fa fa-check" onclick="doneItem(${index})"></i>`
    todoItem.innerHTML = span + remove + done;
    todoList.appendChild(todoItem);
    
}

function removeItem(index){
    arrayData.splice(index,1);
    sayTodo();
    savaItems();
}

function doneItem(index){
    arrayData[index].isDone = !arrayData[index].isDone;
    sayTodo();
    savaItems();
}


